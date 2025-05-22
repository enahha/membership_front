import { route } from 'quasar/wrappers';
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router';
import routes from './routes';

// 현재 로드된 모든 스타일 링크를 관리
function loadStyle(href) {
  return new Promise((resolve, reject) => {
    // 기존 스타일 제거
    document.querySelectorAll('link[data-style]').forEach((link) => {
      document.head.removeChild(link);
    });

    // 새로운 스타일 추가
    const link = document.createElement('link');
    link.href = href;
    link.rel = 'stylesheet';
    link.setAttribute('data-style', href); // 추적을 위한 속성

    link.onload = () => {
      console.log(`Style loaded: ${href}`);
      resolve();
    };
    link.onerror = (error) => {
      console.error(`Failed to load style: ${href}`, error);
      reject(error);
    };

    document.head.appendChild(link);
  });
}

export default route(function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE),
  });

  Router.afterEach((to) => {
    // 라우트 변경 시 특정 스타일 로드
    if (to.meta && to.meta.style) {
      loadStyle(to.meta.style).catch((error) => {
        console.error(`Failed to load style: ${to.meta.style}`, error);
      });
    }
  });

  return Router;
});
