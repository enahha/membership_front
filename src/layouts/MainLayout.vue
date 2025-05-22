<template>
  <q-layout view="hHr LpR lFf" class="">
    <!-- <q-header elevated> -->
    <!-- <q-header class="header" style="background-image: url(images/star1.jpg)"> -->
    <!-- <q-header elevated class="header bg-white"> -->
    <q-header class="header shadow-1">
      <q-toolbar class="page-1200">

        <!-- <q-btn
          flat
          dense
          round
          color="white"
          icon="menu"
          aria-label="Menu"
          @click="drawer = !drawer"
        /> -->

        <div class="q-ml-md q-mb-xs">
          <a style="cursor: pointer;" @click="goHome">
            <img src="images/favicon.png" style="width: 150px; margin-top: 7px;" />
          </a>
        </div>

        <q-toolbar-title>
          <div class="text-bold">
            <table border="0" width="100%" style="margin: 0px 0px 0px 0px;" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                </td>
                <!-- <td align="center" width="28" rowspan="2">
                  <a style="cursor: pointer;" @click="goHome">
                    <img src="logo/logo_kstar.png" style="width: 24px; margin-top: 7px;" />
                  </a>
                </td>
                <td align="left" rowspan="2" width="100">
                  <div class="row">
                    <div class="q-pl-xs" style="margin-top: 0px;">
                      <a style="cursor: pointer;" @click="goHome">
                        <span class="text-black">NFT Migration</span>
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="q-pl-xs">
                    <a style="cursor: pointer;" @click="goHome">
                      <span class="text-body2 text-primary">Beta</span>
                    </a>
                  </div>
                </td> -->
                <!-- 관리자 수정용 -->
                <!-- <td v-if="isAdmin" align="left"><q-btn to="/token/newList" flat size="lg" class="text-white" label="New Tokens" style="width: 120px;" no-caps /></td> -->
              </tr>
            </table>
          </div>
        </q-toolbar-title>

<!--
  if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
}
-->
        <!--
        <q-select
          v-model="locale"
          :options="localeOptions"
          dense
          borderless
          emit-value
          map-options
          style="width: 55px"
          @update:model-value="onChangeLocale"
        />
        -->

        <!-- wallet icon -->
         <!--
        <div v-if="getWalletAddress">
          <q-btn flat dense rounded aria-label="Menu">
            <img v-if="getWalletType === 'kaikas'" src="logo/logo_kaikas.png" width="20" />
            <img v-else-if="getWalletType === 'metamask'" src="logo/logo_metamask.png" width="25" />
            <img v-else-if="getWalletType === 'klip'" src="logo/klip.svg" width="30" />
            <img v-else-if="getWalletType === 'phantom'" src="logo/logo_phantom.png" width="30" />
            <img v-else src="logo/logo_kstar.png" width="20" />
            <span v-if="getWalletAddressLast" class="text-black text-weight-bold text-lowercase q-pl-xs">{{ getWalletAddressLast }}</span>
            <span v-else class="text-black text-weight-bold text-lowercase q-pl-xs">No Wallet</span>


            <q-menu>
            <div class="no-wrap q-pa-sm">
              //  disconnect wellect
              <div class="q-pt-xs q-pb-xs">
                //  <div class="text-h6 q-mb-md">Settings</div>
                <div class="row text-center">
                  <div class="col q-pl-xs q-pr-sm">
                    <q-btn
                      color="primary"
                      push
                      size="md"
                      label="Disconnect"
                      no-caps
                      @click="logout"
                    />
                  </div>
                </div>
              </div>
            </div>
            </q-menu>

          </q-btn>
        </div>

        <q-btn
          v-else
          flat
          dense
          round
          color="black"
          icon="account_balance_wallet"
          aria-label="Menu"
          @click="connectMetaMaskWallet"
        />



        <div v-if="getSolanaWalletAddress">
          <q-btn flat dense rounded aria-label="Menu">
            <img v-if="getSolanaWalletType === 'kaikas'" src="logo/logo_kaikas.png" width="20" />
            <img v-else-if="getSolanaWalletType === 'metamask'" src="logo/logo_metamask.png" width="25" />
            <img v-else-if="getSolanaWalletType === 'klip'" src="logo/klip.svg" width="30" />
            <img v-else-if="getSolanaWalletType === 'phantom'" src="logo/logo_phantom.png" width="30" />
            <img v-else src="logo/logo_kstar.png" width="20" />
            <span v-if="getSolanaWalletAddressLast" class="text-black text-weight-bold text-lowercase q-pl-xs">{{ getSolanaWalletAddress }}</span>
            <span v-else class="text-black text-weight-bold text-lowercase q-pl-xs">No Wallet</span>


            <q-menu>
            <div class="no-wrap q-pa-sm">
              //  disconnect wellect
              <div class="q-pt-xs q-pb-xs">
                //  <div class="text-h6 q-mb-md">Settings</div>
                <div class="row text-center">
                  <div class="col q-pl-xs q-pr-sm">
                    <q-btn
                      color="primary"
                      push
                      size="md"
                      label="Disconnect"
                      no-caps
                      @click="logout"
                    />
                  </div>
                </div>
              </div>
            </div>
            </q-menu>

          </q-btn>
        </div>

        <q-btn
          v-else
          flat
          dense
          round
          color="white"
          label="phantom"
          aria-label="Menu"
          @click="connectPhantomWallet"
        />
        -->

        <!--
        <q-btn
          flat
          dense
          round
          color="black"
          icon="language"
          aria-label="Menu"
        >

          <q-menu>
            <div class="no-wrap q-pa-sm">
              <div class="q-pt-xs q-pb-xs">
                <div class="row text-center">
                  <div class="col q-pl-xs q-pr-sm">
                    <q-btn
                      v-if="locale === 'ko-KR'"
                      color="primary"
                      push
                      size="md"
                      label="English"
                      no-caps
                      @click="changeLocale('en-US')"
                    />
                    <q-btn
                      v-if="locale !== 'ko-KR'"
                      color="grey"
                      push
                      size="md"
                      label="English"
                      no-caps
                      disable
                    />
                  </div>
                  <div class="col q-pl-sm q-pr-xs">
                    <q-btn
                      v-if="locale === 'en-US'"
                      color="primary"
                      push
                      size="md"
                      label="Korean"
                      no-caps
                      @click="changeLocale('ko-KR')"
                    />
                    <q-btn
                      v-if="locale !== 'en-US'"
                      color="grey"
                      push
                      size="md"
                      label="Korean"
                      no-caps
                      disable
                    />
                  </div>
                </div>

              </div>

            </div>
          </q-menu>

        </q-btn>
        -->

      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="drawer"
      show-if-above
      :width="240"
      :breakpoint="600"
      bordered
    > -->
      <!-- element 가 resize 되면 onResize 호출 -->
      <!-- <q-resize-observer @resize="onResize" />

      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }"> -->

        <!-- <q-toolbar class="page-default text-center shadow-1" style="">

          <q-toolbar-title>
            <a style="cursor: pointer;" @click="goHome">
              <q-avatar>
                <img src="logo/logo_kstar.png" style="width: 24px; height: 24px; margin-top: 4px;" />
              </q-avatar>

              <span class="text-body1">
                <b>Menu</b>&nbsp;
              </span>
            </a>
          </q-toolbar-title>
        </q-toolbar> -->

        <!-- <q-list padding> -->
          <!--
          <q-item-label
            class="bg-grey-4"
          >
            <table v-if="getUid" border="0" width="100%">
              <tr>
                <td align="center">
                  <a style="cursor: pointer;" @click="goEditUserInfo">
                    <span class="text-white"><b>{{ getUid }}</b></span>
                    <span v-if="isAdmin" class="text-white">
                      &nbsp;[ADMIN]
                    </span>
                    &nbsp;
                    <q-icon name="account_box" size="sm" color="white" />
                  </a>
                </td>
              </tr>
            </table>
            <table border="0" width="100%">
              <tr>
                <td align="center"><b>Beyond Blockchain Framework</b></td>
              </tr>
            </table>
            <table border="0" width="100%">
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td align="center">
                  <q-btn v-if="getUid" outline style="color: goldenrod; width: 100%;" :label="$t('logout')" @click="logout" rounded />
                  <q-btn v-if="!getUid" outline style="color: goldenrod; width: 100%;" :label="$t('login')" @click="showLoginModal" rounded />
                </td>
              </tr>
            </table>
          </q-item-label>
          -->

          <!-- <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          /> -->

          <!-- MYPAGE -->
          <!-- <q-item clickable to="/mypage">
            &nbsp;&nbsp;&nbsp;
            <q-item-section avatar>
              <q-icon name="person_pin" style="width: 20px; height: 20px;" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('menu_mypage') }}</q-item-label>
            </q-item-section>
          </q-item> -->

          <!-- NEW TOKEN LIST -->
          <!-- <q-item clickable to="/token/newList">
            &nbsp;&nbsp;&nbsp;
            <q-item-section avatar>
              <q-icon name="wb_twighlight" style="width: 20px; height: 20px;" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('menu_new_token_list') }}</q-item-label>
            </q-item-section>
          </q-item> -->

          <!-- POPULAR TOKEN LIST -->
          <!-- <q-item clickable to="/token/popList">
            &nbsp;&nbsp;&nbsp;
            <q-item-section avatar>
              <q-icon name="favorite" style="width: 20px; height: 20px;" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('menu_pop_token_list') }}</q-item-label>
            </q-item-section>
          </q-item> -->

          <!-- NFT PROJECT LIST -->
          <!-- <q-item clickable to="/project/projectList">
            &nbsp;&nbsp;&nbsp;
            <q-item-section avatar>
              <q-icon name="rocket_launch" style="width: 20px; height: 20px;" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('menu_project_list') }}</q-item-label>
            </q-item-section>
          </q-item> -->

          <!-- WHITELIST LIST -->
          <!-- <q-item clickable to="/whitelist/whitelistList">
            &nbsp;&nbsp;&nbsp;
            <q-item-section avatar>
              <q-icon name="list_alt" style="width: 20px; height: 20px;" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('menu_whitelist_list') }}</q-item-label>
            </q-item-section>
          </q-item> -->

          <!-- NFT MINTING LIST -->
          <!-- <q-item clickable to="/minting/mintingList">
            &nbsp;&nbsp;&nbsp;
            <q-item-section avatar>
              <q-icon name="add_photo_alternate" style="width: 20px; height: 20px;" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('menu_minting_list') }}</q-item-label>
            </q-item-section>
          </q-item> -->

          <!-- PRESALE LIST -->
          <!-- <q-item clickable to="/presale/presaleList">
            &nbsp;&nbsp;&nbsp;
            <q-item-section avatar>
              <q-icon name="rocket_launch" style="width: 20px; height: 20px;" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('menu_presale_list') }}</q-item-label>
            </q-item-section>
          </q-item> -->

          <!-- RECRUIT LIST -->
          <!-- <q-item clickable to="/recruit/recruitList">
            &nbsp;&nbsp;&nbsp;
            <q-item-section avatar>
              <q-icon name="assignment_ind" style="width: 20px; height: 20px;" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('menu_recruit_list') }}</q-item-label>
            </q-item-section>
          </q-item> -->

          <!-- TODO: 되돌리기3 -->
          <!-- <q-separator spaced />

          <q-item clickable @click="openUrl('https://dexata.kr/')">
            &nbsp;&nbsp;&nbsp;
            <q-item-section avatar>
              <q-icon name="insert_chart" style="width: 20px; height: 20px;" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('menu_chart_site') }}</q-item-label>
            </q-item-section>
          </q-item> -->

          <!-- LINK -->
          <!-- <q-item clickable to="/link">
            &nbsp;&nbsp;&nbsp;
            <q-item-section avatar>
              <q-icon name="link" style="width: 20px; height: 20px;" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('menu_howto_link') }}</q-item-label>
            </q-item-section>
          </q-item> -->

          <!-- NOTICE -->
          <!-- <q-item clickable to="/notice">
            &nbsp;&nbsp;&nbsp;
            <q-item-section avatar>
              <q-icon name="notifications_active" style="width: 20px; height: 20px;" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('menu_notice_list') }}</q-item-label>
            </q-item-section>
          </q-item> -->

          <!-- <q-separator /> -->



          <!-- 0. TEST MENU -->
          <!-- <q-expansion-item
            :label="$t('menu_group_manage')"
            default-closed
          > -->
            <!-- 1. REGISTER TOKEN -->
            <!-- <q-item clickable to="/token/register">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="add_circle" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ $t('menu_register_token') }}</q-item-label>
              </q-item-section>
            </q-item> -->

            <!-- 2. CREATE TOKEN -->
            <!-- <q-item v-if="getUid" clickable to="/token/createList">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="generating_tokens" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ $t('menu_create_token_list') }}</q-item-label>
              </q-item-section>
            </q-item> -->

            <!-- MY TOKENS -->
            <!-- <q-item v-if="getUid" clickable to="/token/myList">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="animation" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ $t('menu_my_token_list') }}</q-item-label>
              </q-item-section>
            </q-item> -->

            <!-- MY NFT PROJECT LIST -->
            <!-- <q-item v-if="getUid" clickable to="/nft/myNftProjectList">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="image" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ $t('menu_my_nft_project_list') }}</q-item-label>
              </q-item-section>
            </q-item> -->

            <!-- MY RECRUIT LIST -->
            <!-- <q-item v-if="getUid" clickable to="/recruit/myRecruitList">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="assignment_ind" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ $t('menu_my_recruit_list') }}</q-item-label>
              </q-item-section>
            </q-item> -->

            <!-- MY WHITELIST -->
            <!-- <q-item v-if="getUid" clickable to="/whitelist/myWhitelistList">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="list_alt" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ $t('menu_my_whitelist_list') }}</q-item-label>
              </q-item-section>
            </q-item> -->

            <!-- MY NFT MINTING LIST -->
            <!-- <q-item v-if="getUid" clickable to="/minting/myMintingList">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="add_photo_alternate" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ $t('menu_my_minting_list') }}</q-item-label>
              </q-item-section>
            </q-item>
 -->
            <!-- MY PRESALE LIST -->
            <!-- <q-item v-if="getUid" clickable to="/presale/myPresaleList">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="rocket_launch" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ $t('menu_my_presale_list') }}</q-item-label>
              </q-item-section>
            </q-item> -->

            <!-- MY POOL -->
            <!-- <q-item v-if="getUid" clickable to="/pool">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="join_full" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ $t('menu_my_pool_list') }}</q-item-label>
              </q-item-section>
            </q-item> -->

            <!-- MY AIRDROP -->
            <!-- <q-item v-if="getUid" clickable to="/airdrop">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="auto_awesome" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ $t('menu_my_airdrop_list') }}</q-item-label>
              </q-item-section>
            </q-item> -->

          <!-- </q-expansion-item>  -->

          <!-- <q-separator /> -->











          <!-- LINKTREE -->
          <!--<q-item to="#">
            &nbsp;&nbsp;&nbsp;
            <q-item-section avatar>
              <img src="images/logo-128x128.png" style="width: 24px; margin-bottom: 5px;" />
            </q-item-section>
            <q-item-section>
              <a @click="openUrl('https://linktr.ee/beastar')">
                <q-item-label class="text-white">{{ $t('menu_linktree') }}</q-item-label>
              </a>
            </q-item-section>
          </q-item>-->

          <!-- HOLDER -->
          <!-- <q-item clickable to="/holder">
            &nbsp;&nbsp;&nbsp;
            <q-item-section avatar>
              <q-icon name="groups" style="width: 20px; height: 20px;" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('menu_holder_list') }}</q-item-label>
            </q-item-section>
          </q-item> -->


          <!-- SUPPORT -->
          <!-- <q-item clickable to="/support">
            &nbsp;&nbsp;&nbsp;
            <q-item-section avatar>
              <q-icon name="help" style="width: 20px; height: 20px;" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('menu_support') }}</q-item-label>
            </q-item-section>
          </q-item> -->
          <!-- <div v-if="isAdmin">

            <q-separator color="primary" /> -->

            <!-- ADMIN CREATE TOKEN -->
            <!-- <q-item clickable to="/admin/adminUserList">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="account_circle" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>[A] {{ $t('menu_admin_user_list') }}</q-item-label>
              </q-item-section>
            </q-item> -->

            <!-- ADMIN CREATE TOKEN -->
            <!-- <q-item clickable to="/admin/adminCreateList">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="generating_tokens" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>[A] {{ $t('menu_create_token_list') }}</q-item-label>
              </q-item-section>
            </q-item> -->

            <!-- ADMIN MY TOKENS -->
            <!-- <q-item clickable to="/admin/adminMyList">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="list_alt" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>[A] {{ $t('menu_my_token_list') }}</q-item-label>
              </q-item-section>
            </q-item> -->

            <!-- ADMIN CONTRACT VERIFICATION REQUEST LIST-->
            <!-- <q-item clickable to="/admin/adminContractVerifyList">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="policy" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>[A] {{ $t('menu_admin_contract_verification_request_list') }}</q-item-label>
              </q-item-section>
            </q-item> -->

            <!-- ADMIN CREATE POOL REQUEST LIST -->
            <!-- <q-item clickable to="/admin/adminCreatePoolList">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="join_full" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>[A] {{ $t('menu_admin_create_pool_request_list') }}</q-item-label>
              </q-item-section>
            </q-item> -->

            <!-- ADMIN CREATE AIRDROP REQUEST LIST -->
            <!-- <q-item clickable to="/admin/adminCreateAirdropList">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="auto_awesome" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>[A] {{ $t('menu_admin_create_airdrop_request_list') }}</q-item-label>
              </q-item-section>
            </q-item> -->

            <!-- ADMIN MINTING REQUEST FUND LIST -->
            <!-- <q-item clickable to="/admin/adminMintingWithdrawList">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="request_quote" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>[A] {{ $t('menu_admin_minting_withdraw_list') }}</q-item-label>
              </q-item-section>
            </q-item> -->

            <!-- ADMIN PRESATE REQUEST FUND LIST -->
            <!-- <q-item clickable to="/admin/adminPresaleWithdrawList">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="request_quote" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>[A] {{ $t('menu_admin_presale_withdraw_list') }}</q-item-label>
              </q-item-section>
            </q-item> -->

            <!-- ADMIN MANAGE TOKEN -->
            <!-- <q-item clickable to="/admin/adminManageToken">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="settings" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>[A] {{ $t('menu_admin_manage_token') }}</q-item-label>
              </q-item-section>
            </q-item> -->

            <!-- ADMIN MAINTENANCE -->
            <!-- <q-item clickable to="/admin/adminMaintenance">
              &nbsp;&nbsp;&nbsp;
              <q-item-section avatar>
                <q-icon name="settings" style="width: 20px; height: 20px;" />
              </q-item-section>
              <q-item-section>
                <q-item-label>[A] {{ $t('menu_admin_maintenance') }}</q-item-label>
              </q-item-section>
            </q-item> -->

          <!-- </div> -->

        <!-- </q-list> -->

      <!-- </q-scroll-area> -->

    <!-- </q-drawer> -->


    <q-drawer
      side="right"
      v-model="rightDrawerOpen"
      bordered
    >

      <q-toolbar class="page-default text-center shadow-1" style="background: rgb(235, 235, 235)">
        <q-icon name="account_circle" size="sm" />
        <q-toolbar-title>
          <span class="text-body2"><b>{{ $t('account_information') }}</b></span>
        </q-toolbar-title>
        <q-icon name="close" size="sm" @click="toggleRightDrawer" style="cursor: pointer;" />
      </q-toolbar>

      <div class="q-pt-sm">
      </div>

      <div class="no-wrap q-pa-sm">

        <!-- acount information -->
        <div class="row justify-center">
          <div v-if="getUid" class="col-12" style="word-break: break-all;">
            <table border="0" style="width: 100%;">
              <tr>
                <td align="center" width="100">
                  <div>
                    <div>
                      <a style="cursor: pointer;" @click="goMypage">
                        <q-avatar size="60px">
                          <img v-if="getProfileImage" :src="getProfileImage">
                          <img v-else src="https://cdn.quasar.dev/img/boy-avatar.png">
                        </q-avatar>
                      </a>
                    </div>
                    <div class="q-pt-sm">
                      <q-btn
                        color="primary"
                        outline
                        rounded
                        size="sm"
                        style="width: 60px"
                        @click="goEditUserInfo"
                      >
                        {{ $t('edit') }}
                      </q-btn>
                    </div>
                  </div>
                </td>
                <td align="left">
                  <div class="q-pb-xs">
                    <span class="col-12 text-weight-bold">{{ getUid }}</span>
                  </div>
                  <div class="q-pb-xs">
                    <span v-if="getNickname" class="col-12">{{ getNickname }}</span>
                    <span v-else class="col-12">No nickname</span>
                  </div>
                  <div class="q-pb-xs">
                    <span v-if="getName" class="col-12">{{ getName }}</span>
                    <span v-else class="col-12">No name</span>
                  </div>
                  <div class="">
                    <span v-if="getWalletAddress" class="col-12" style="cursor: pointer;">
                      <a @click="copyValue(getWalletAddress)">
                        {{ getWalletAddress }}
                      </a>
                    </span>
                    <span v-else class="col-12">No wallet address</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="2" align="center">
                  <div class="q-pt-xs">
                    <!-- <q-btn outline dense style="color: goldenrod; width: 90%;" :label="$t('logout')" @click="logout" rounded /> -->
                    <q-btn
                      color="primary"
                      push
                      size="md"
                      v-close-popup
                      style="width: 50%"
                      @click="logout"
                    >
                      {{ $t('logout') }}
                    </q-btn>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div v-else class="col-12 text-center" style="word-break: break-all;">
            <q-btn
              color="primary"
              push
              size="md"
              v-close-popup
              style="width: 50%"
              @click="showWalletModal"
            >
              {{ $t('login') }}
            </q-btn>
          </div>
        </div>

      </div>

      <div class="q-pb-xs"></div>

      <q-separator />

      <!-- Wallet Infomation -->
      <!-- <q-toolbar class="page-default text-center" style="background: rgba(237, 237, 237, .6);">
        <q-icon name="account_balance_wallet" size="sm" />
        <q-toolbar-title>
          <span class="text-body2"><b>{{ $t('wallet_information') }}</b></span>
        </q-toolbar-title>
      </q-toolbar>
      <q-list>
        <q-item-label>
        </q-item-label>

        <q-item clickable to="/token/register">
          &nbsp;&nbsp;&nbsp;
          <q-item-section avatar>
            <q-icon name="add_circle" style="width: 20px; height: 20px;" />
          </q-item-section>
          <q-item-section>
            <q-item-label>1. {{ $t('menu_register_token') }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list> -->
    </q-drawer>



    <!-- <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

  <q-dialog v-model="msgBox">
    <q-card>
      <q-toolbar>
        <q-avatar>
          <img src="logo/logo_kstar.png" style="width: 24px; height: 24px;" />
        </q-avatar>

        <q-toolbar-title>
          <span class="text-weight-bold">BEASTAR</span>
        </q-toolbar-title>

        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>

      <q-card-section>
        {{ $t('under_construction')}}
      </q-card-section>
    </q-card>
  </q-dialog>

  <LoginModal ref="refLoginModal" @callback-login="callbackLogin" />
  <WalletModal ref="refWalletModal" @callback-wallet="callbackWallet" />
  <IframeModal ref="refIframeModal" />

</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'
// import LoginModal from 'components/login/login-modal'

import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  WalletAdapterNetwork,
} from "@solana/wallet-adapter-base"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { PublicKey, Connection, Transaction, ComputeBudgetProgram  } from "@solana/web3.js"
// import { useStore } from 'vuex'

export default defineComponent({
  name: 'MainLayout',
  data () {
    return {
      scrollAreaHeight: 2000, // 좌측메뉴 스크롤 DIV 높이
      scrollAreaHeightMinus: 50, // 좌측메뉴 스크롤 DIV 높이에서 차감할 높이
      // uid: '',
      // loginModal: false,
      test: '',
      // nickname: '',
      // profile_image: '',
      // name: '',
      // mobile_no: '',
      wallet_address: '',
      solanaWalletAddress: '',
      // ucode: '',
      // birth: '',
      // gender: '',
      // nation: '',
      // tel_no: '',
      // thumbnail: '',
      // introduce: '',
      // push_agree_yn: '',
      // adcd: '',
      // id_card_image: '',
      // home_address: '',
      // home_address_image: '',
      // business_registration_no: '',
      // business_license_image: '',
      // company_address: '',
      // company_address_image: '',
      // company_tel_no: '',
    }
  },
  components: {
    // EssentialLink,
    // LoginModal,
  },
  computed: {
    getUid () {
      return this.$store.getters.getUid
    },
    getName () {
      return this.$store.getters.getName
    },
    getNickname () {
      return this.$store.getters.getNickname
    },
    getProfileImage () {
      return this.$store.getters.getProfileImage
    },
    getWalletType () {
      return this.$store.getters.getWalletType
    },
    getWalletAddress () {
      return this.$store.getters.getWalletAddress
    },
    getWalletAddressShort () {
      const address = this.$store.getters.getWalletAddress
      if (address) {
        return address.substr(0, 6) + '...' + address.substr(address.length - 4, address.legnth)
      } else {
        return address
      }
    },
    getWalletAddressLast () {
      const address = this.$store.getters.getWalletAddress
      if (address) {
        return '...' + address.substr(address.length - 4, address.legnth)
      } else {
        return address
      }
    },
    getSolanaWalletType () {
      return this.$store.getters.getSolanaWalletType
    },
    getSolanaWalletAddress () {
      return this.$store.getters.getSolanaWalletAddress
    },
    getSolanaWalletAddressLast () {
      const address = this.$store.getters.getSolanaWalletAddress
      if (address) {
        return '...' + address.substr(address.length - 4, address.legnth)
      } else {
        return address
      }
    },
    getMobileNo () {
      return this.$store.getters.getMobileNo
    },
    isAdmin () {
      return this.$store.getters.getAdcd === this.$adminCode
    },
  },
  created: function() {

    const walletAddress = localStorage.getItem('WALLETADDRESS') ? localStorage.getItem('WALLETADDRESS') : this.$cookie.get('walletAddress')
    const walletType = localStorage.getItem('WALLETTYPE') ? localStorage.getItem('WALLETTYPE') : this.$cookie.get('walletType')
    if(walletAddress && walletType) {
      this.$store.dispatch('setWalletType', walletType)
      this.$store.dispatch('setWalletAddress', walletAddress)
    }

    const solanaWalletAddress = localStorage.getItem('SOLANAWALLETADDRESS') ? localStorage.getItem('SOLANAWALLETADDRESS') : this.$cookie.get('solanaWalletAddress')
    const solanaWalletType = localStorage.getItem('SOLANAWALLETTYPE') ? localStorage.getItem('SOLANAWALLETTYPE') : this.$cookie.get('solanaWalletType')
    if (solanaWalletAddress && solanaWalletType) {
      this.$store.dispatch('setSolanaWalletType', solanaWalletType)
      this.$store.dispatch('setSolanaWalletAddress', solanaWalletAddress)
    }

    // // 디바이스 설정
    // this.setDevice()

    // 쿠키에 UID와 AUTH_KEY가 있으면 유저정보 바인딩
    const uid = localStorage.getItem('UID') ? localStorage.getItem('UID') : this.$cookie.get('UID')
    const authKey = localStorage.getItem('AUTH_KEY') ? localStorage.getItem('AUTH_KEY') : this.$cookie.get('AUTH_KEY')
    if (uid && authKey) {
      this.$store.dispatch('setUid', uid)
      const adcd =  localStorage.getItem('ADCD') ? localStorage.getItem('ADCD') : this.$cookie.get('ADCD')
      this.$store.dispatch('setAdcd', adcd)
    }

    // 쿠키에 LOCALE이 있으면 설정
    const cookieLocale = localStorage.getItem('LOCALE') ? localStorage.getItem('LOCALE') : this.$cookie.get('LOCALE')
    // alert('cookieLocale: ' + cookieLocale)
    if (cookieLocale && cookieLocale !== 'null') {
      this.locale = cookieLocale
    } else {
      // set default language
      this.locale = 'en-US'
      // this.locale = 'ko-KR'
    }

    // CORDOVA APP에서 로그인 후 WEB으로 왔을 때 처리
    if ((this.$q.platform.is.cordova === true || this.$q.platform.is.name === 'webkit') && this.$route.query.uid && this.$route.query.authKey
      // && this.$q.platform.is.mobile === true && (this.$q.platform.is.platform === 'andriod' || this.$q.platform.is.platform === 'ios')
    ) {
      // localStorage에 locale 값이 있으면 localStorage 값으로 설정, 없으면 this.$route.query.locale 설정
      // if (this.$route.query.locale) {
      //   this.locale = this.$route.query.locale
      //   alert('this.$route.query.locale: ' + this.$route.query.locale)
      //   this.$cookie.set('LOCALE', this.$route.query.locale)
      // }
      const localStorageLocale = localStorage.getItem('LOCALE')
      if (localStorageLocale && localStorageLocale !== 'null') {
        this.locale = localStorageLocale
        this.$cookie.set('LOCALE', localStorageLocale)
      } else {
        if (this.$route.query.locale && this.$route.query.locale !== 'null') {
          this.locale = this.$route.query.locale
        }
        this.$cookie.set('LOCALE', this.$route.query.locale)
        localStorage.setItem('LOCALE', this.$route.query.locale, 365) // APP용
      }
      // 사용자 정보 설정
      this.$store.dispatch('setUid', this.$route.query.uid)
      this.$store.dispatch('setAdcd', this.$route.query.adcd)
      localStorage.setItem('UID', this.$route.query.uid, 365) // APP용
      localStorage.setItem('AUTH_KEY', this.$route.query.authKey, 365) // APP용
      localStorage.setItem('ADCD', this.$route.query.adcd, 365) // APP용

      // 로그인 처리
      this.doLogin()
    }

    // 계정 정보 조회
    // this.selectUser()

    // 화면 크기에 따른 좌측 메뉴 스크롤 DIV 의 Height 설정
    this.onResize()
  },
  mounted: function() {
    // this.$refs.refLoginModal.show()
    // console.log(this.$q.platform.is)
    if (this.$q.platform.is.desktop) {
      if (window.ethereum) {
        // 지갑주소 변경 이벤트 구독
        window.ethereum.on('accountsChanged', this.walletAccountsChangedMetamask)
        // 체인 변경 이벤트 구독
        window.ethereum.on('chainChanged', this.handleChainChangedMetamask);
      }
      if (window.klaytn) {
        window.klaytn.on('accountsChanged', this.walletAccountsChangedKaikas)
        // 체인 변경 이벤트 구독
        window.klaytn.on('networkChanged', this.handleChainChangedKaikas)
      }
    }

    // 팬텀지갑 주소변경 이벤트
    // this.handlePhantomAccountChange()
  },
  setup () {
    // const $store = useStore()
    // const loginModalFlag = computed({
    //   get: () => $store.state.common.loginModalFlag,
    //   set: val => {
    //     $store.commit('common/updateLoginModalFlag', val)
    //   }
    // })

    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    const miniState = ref(false)

    const { locale } = useI18n({ useScope: 'global' })

    return {

      drawer: ref(false),
      miniState,

      drawerClick (e) {
        // if in "mini" state and user
        // click on drawer, we switch it to "normal" mode
        if (miniState.value) {
          miniState.value = false

          // notice we have registered an event with capture flag;
          // we need to stop further propagation as this click is
          // intended for switching drawer to "normal" mode only
          e.stopPropagation()
        }
      },

      // essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },

      locale,
      localeOptions: [
        { value: 'en-US', label: 'EN' },
        { value: 'ko-KR', label: 'KO' },
      ],
      msgBox: ref(false),

      // loginModalFlag,
    }
  },
  methods: {
    onResize() {
      this.scrollAreaHeight = window.innerHeight - this.scrollAreaHeightMinus
      console.log(window.innerHeight)
      console.log(this.scrollAreaHeight)
    },
    walletAccountsChangedMetamask(accounts) {
      // console.log(accounts)
      this.$store.dispatch('setWalletType', 'metamask')
      this.$store.dispatch('setWalletAddress', accounts[0])

      // ■■■ 회원정보 체크, 존재하지 않으면 가입화면으로 이동
      // this.checkUser(accounts[0])
    },
    walletAccountsChangedKaikas(accounts) {
      // console.log(accounts)
      this.$store.dispatch('setWalletType', 'kaikas')
      this.$store.dispatch('setWalletAddress', accounts[0])

      // ■■■ 회원정보 체크, 존재하지 않으면 가입화면으로 이동
      // this.checkUser(accounts[0])
    },
    handleChainChangedMetamask(chainId) {
      console.log(chainId) // eth mainnet: 0x1, cypress: 0x2019, baobab: 0x3e9
      // We recommend reloading the page, unless you must do otherwise
      // window.location.reload();
      this.checkChain()
    },
    handleChainChangedKaikas(chainId) {
      console.log(chainId) // mainnet: 8217, baobab: 1001
      // We recommend reloading the page, unless you must do otherwise
      // window.location.reload();
      this.checkChain()
    },
    async checkChain() {
      // 로그인 상태가 아니면 처리하지 않음
      if(!this.$store.getters.getWalletAddress) {
        return
      }

      // 메인넷 확인
      const walletType = this.$store.getters.getWalletType
      let chainId = ''
      if (walletType === 'kaikas') {
        chainId = window.klaytn.networkVersion
      } else if (walletType === 'metamask') {
        chainId = await window.ethereum.request({ method: 'eth_chainId' })
      } else {
        return true
      }
      if (chainId !== 8217 && chainId !== '0x2019') {
        // 메인넷이 아니므로 로그아웃
        this.logout()
        this.$noti(this.$q, this.$t('set_to_the_mainnet'))
        return false
      }
      return true
    },

    async connectPhantomWallet() {
      let provider
      // 지갑이 설치되어 있는지 확인하고, 그 후에는 팬텀 지갑의 프로바이더를 가져오거나 사용자를 팬텀 지갑 설치 페이지로 리디렉션
      // 팬텀지갑 설치 확인
      if (window.phantom && window.phantom.solana && window.phantom.solana.isPhantom) {
        const getProvider = () => {
          if ('phantom' in window) {
            const provider = window.phantom.solana

            if (provider && provider.isPhantom) {
              console.log(provider)
              return provider
            }
          }
          return null
        };

        provider = getProvider()
        console.log("provider : ", provider)

        // 팬텀 지갑 연결 시도
        const handleConnect = async () => {
        console.log("팬텀지갑 연결 시도")

          if (!provider) return
          try {
            const resp = await provider.connect()
            console.log("팬텀지갑 연결 시도 resp ")
            console.log(resp)

            const walletAddress = resp.publicKey.toString()
            console.log("팬텀지갑 연결 시도 walletAddress ")
            console.log(walletAddress)

            this.$cookie.set('solanaWalletAddress', walletAddress)
            this.$cookie.set('solanaWalletType', 'phantom')
            this.$store.dispatch('setSolanaWalletAddress', walletAddress)
            this.$store.dispatch('setSolanaWalletType', 'phantom')
            localStorage.setItem('SOLANAWALLETADDRESS', walletAddress)
            localStorage.setItem('SOLANAWALLETTYPE', 'phantom')

            this.solanaWalletAddress = walletAddress

          } catch (error) {
            this.$noti(this.$q, this.$t('failed' + error))
          }
        }

        // 연결 시도 실행
        handleConnect()
      } else {
        this.$noti(this.$q, this.$t('Phantom Wallet is not installed. Please install the wallet first.'))
        window.open('https://phantom.app/', '_blank')
      }
    },
    // 팬텀 지갑 프로바이더 가져오는 메소드
    getPhantomProvider() {
      if ('phantom' in window && window.phantom.solana && window.phantom.solana.isPhantom) {
        const provider = window.phantom.solana
        if (provider && provider.isPhantom) {
          return provider
        }
      }
      return null
    },
    handlePhantomAccountChange() {
      if ('phantom' in window && window.phantom.solana && window.phantom.solana.isPhantom) {
        const provider = this.getPhantomProvider()
        if (!provider) return
        
        // 팬텀 지갑 주소 변경 이벤트
        provider.on('accountChanged', async (publicKey) => {
          if (publicKey) {
            // console.log(`Switched to account ${publicKey.toBase58()}`)
            this.$cookie.set('solanaWalletAddress', publicKey.toBase58())
            this.$store.dispatch('setSolanaWalletAddress', publicKey.toBase58())
            localStorage.setItem('SOLANAWALLETADDRESS', publicKey.toBase58())
          } else {
            try {
              await provider.connect()
            } catch (error) {
              // console.error('Failed to reconnect to Phantom wallet', error)
            }
          }
        })
      }
    },
    async disconnectPhantomWallet() {
      try {
        if (window.solana && window.solana.isPhantom) {
          await window.solana.disconnect()
          console.log('Phantom wallet disconnected')
        } else {
          console.error('Phantom wallet is not connected')
        }
      } catch (error) {
        // console.error('Failed to disconnect Phantom wallet', error)
      }

      this.$store.dispatch('setSolanaWalletAddress', '')
      this.$store.dispatch('setSolanaWalletType', '')
      localStorage.setItem('SOLANAWALLETADDRESS', '')
      localStorage.setItem('SOLANAWALLETTYPE', '')
      this.$cookie.set('solanaWalletAddress', '')
      this.$cookie.set('solanaWalletType', '')
    },


    // async checkUser(walletAddress) {
    //   // 메인넷 확인
    //   const isMainnet = await this.checkChain()
    //   if (!isMainnet) {
    //     return
    //   }

    //   const param = {
    //     wallet_address: walletAddress,
    //   }
    //   // 계정 조회
    //   this.$axios.get('/api/user/selectUserByWalletAddress', { params: { ...param }})
    //     .then((result) => {
    //       // console.log(JSON.stringify(result.data))
    //       if (result.data) {
    //         // 회원정보가 존재하는 경우
    //         // console.log(result.data)
    //         this.$store.dispatch('setUid', result.data.uid)
    //         this.$store.dispatch('setAdcd', result.data.adcd)
    //         this.$store.dispatch('setName', result.data.name)
    //         this.$store.dispatch('setNickname', result.data.nickname)
    //         this.$store.dispatch('setProfileImage', result.data.profile_image)
    //         // this.$store.dispatch('setWalletType', result.data.wallet_type)
    //         // this.$store.dispatch('setWalletAddress', result.data.wallet_address)
    //         this.$store.dispatch('setMobileNo', result.data.mobile_no)

    //         // 로그인 정보 쿠키에 저장
    //         this.$store.dispatch('setUid', result.data.uid)
    //         this.$store.dispatch('setAdcd', result.data.adcd)
    //         this.$cookie.set('UID', result.data.uid, 365)
    //         this.$cookie.set('AUTH_KEY', result.data.auth_key, 365)
    //         this.$cookie.set('ADCD', result.data.adcd, 365)
    //         localStorage.setItem('UID', result.data.uid, 365)
    //         localStorage.setItem('AUTH_KEY', result.data.auth_key, 365)
    //         localStorage.setItem('ADCD', result.data.adcd, 365)

    //         // console.log(this.$router.currentRoute.value)
    //         // 회원가입 화면에서 기존회원 지갑주소로 변경시 홈으로 이동
    //         if (this.$router.currentRoute.value.fullPath == '/join') {
    //           this.$router.push('/')
    //         }
    //       } else {
    //         // 회원정보가 존재하지 않는 경우 -> 회원가입 화면으로 이동
    //         // this.$noti(this.$q, this.$t('request_data_failed'))
    //         this.$router.push('/join')
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // },
    // 계정 조회
    // selectUser() {
    //   const param = {
    //     uid: this.getUid,
    //   }

    //   // 계정 조회
    //   this.$axios.get('/api/user/selectUser', { params: { ...param }})
    //     .then((result) => {
    //       // console.log(JSON.stringify(result.data))
    //       if (result.data) {
    //         // console.log(result.data)
    //         /*
    //         this.nickname = result.data.nickname
    //         this.profile_image = result.data.profile_image
    //         this.name = result.data.name
    //         this.mobile_no = result.data.mobile_no
    //         this.wallet_address = result.data.wallet_address
    //         this.id_card_image = result.data.id_card_image
    //         this.home_address = result.data.home_address
    //         this.home_address_image = result.data.home_address_image
    //         this.business_registration_no = result.data.business_registration_no
    //         this.business_license_image = result.data.business_license_image
    //         this.company_address = result.data.company_address
    //         this.company_address_image = result.data.company_address_image
    //         this.company_tel_no = result.data.company_tel_no
    //         */

    //         this.$store.dispatch('setAdcd', result.data.adcd)
    //         this.$store.dispatch('setName', result.data.name)
    //         this.$store.dispatch('setNickname', result.data.nickname)
    //         this.$store.dispatch('setProfileImage', result.data.profile_image)
    //         this.$store.dispatch('setWalletType', result.data.wallet_type)
    //         this.$store.dispatch('setWalletAddress', result.data.wallet_address)
    //         this.$store.dispatch('setMobileNo', result.data.mobile_no)
    //       } else {
    //         this.$noti(this.$q, this.$t('request_data_failed'))
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // },
    goEditUserInfo() {
      this.$router.push('/mypage')
    },
    // // 디바이스 설정 - P: 데스크탑, M: 모바일웹, android: 안드로이드 앱, ios: 아이폰 앱
    // setDevice() {
    //   if (this.$q.platform.is.cordova || this.$q.platform.is.name === 'webkit') {
    //     if (this.$q.platform.is.ios) {
    //       this.$device = 'ios'
    //     } else {
    //       this.$device = 'android'
    //     }
    //   } else if (this.$q.platform.is.mobile) {
    //     this.$device = 'M'
    //   } else {
    //     this.$device = 'P'
    //   }
    // },
    // CORDOVA APP에서 이동한 경우 로그인 처리
    async doLogin () {
      const userVo = {
        uid: this.$route.query.uid,
        auth_key: this.$route.query.authKey,
      }
      // 로그인 처리
      // alert(JSON.stringify(userVo))
      const result = await this.$axios.post('/api/login/doLogin', userVo)
      // alert(JSON.stringify(result))
      if (result.data && result.data.resultCd === 'SUCCESS') {
        // this.doLogin(result.data)
        // console.log(result.data)
        // this.$noti(this.$q, this.$t('로그인 성공'))

        // 로그인 정보 쿠키에 저장
        this.$store.dispatch('setUid', result.data.uid)
        this.$store.dispatch('setAdcd', result.data.adcd)
        this.$cookie.set('UID', result.data.uid, 365)
        this.$cookie.set('AUTH_KEY', result.data.auth_key, 365)
        this.$cookie.set('ADCD', result.data.adcd, 365)
        localStorage.setItem('UID', result.data.uid, 365)
        localStorage.setItem('AUTH_KEY', result.data.auth_key, 365)
        localStorage.setItem('ADCD', result.data.adcd, 365)
      } else {
        this.$noti(this.$q, this.$t('로그인 실패'))
      }
    },
    changeLocale(selectedLocale) {
      this.locale = selectedLocale

      this.onChangeLocale()
    },
    // locale 쿠키에 설정 - APP에서 WEB의 카카오 로그인시 redirect에서 필요
    onChangeLocale() {
      this.$cookie.set('LOCALE', this.locale)
      localStorage.setItem('LOCALE', this.locale, 365) // APP용
    },
    showLoginModal() {
      this.$refs.refLoginModal.show()
    },
    showWalletModal() {
      this.$refs.refWalletModal.show()
    },
    logout() {
      // const userVo = {
      //   uid: localStorage.getItem('UID') ? localStorage.getItem('UID') : this.$cookie.get('UID'),
      //   auth_key: localStorage.getItem('AUTH_KEY') ? localStorage.getItem('AUTH_KEY') : this.$cookie.get('AUTH_KEY'),
      // }
      // const result = await this.$axios.post('/api/login/doLogout', userVo)
      // if (result.data && result.data.resultCd === 'SUCCESS') {
      //   // console.log(result.data)
      //   this.$noti(this.$q, this.$t('logout_completed'))
        this.disconnectMetamaskWallet()
        this.disconnectPhantomWallet()

        // 로그인 정보 쿠키에서 삭제
        // this.$store.dispatch('setUid', '')
        // this.$store.dispatch('setAdcd', '')
        // this.$store.dispatch('setName', '')
        // this.$store.dispatch('setNickname', '')
        // this.$store.dispatch('setProfileImage', '')
        this.$store.dispatch('setWalletType', '')
        this.$store.dispatch('setWalletAddress', '')
        // this.$store.dispatch('setMobileNo', '')
        // this.$cookie.set('UID', '')
        // this.$cookie.set('AUTH_KEY', '')
        // this.$cookie.set('ADCD', '')
        // localStorage.setItem('UID', '')
        // localStorage.setItem('AUTH_KEY', '')
        // localStorage.setItem('ADCD', '')
        localStorage.setItem('WALLETTYPE', '')
        localStorage.setItem('WALLETADDRESS', '')

        const cookieWalletAddressBefor = this.$cookie.set('walletAddress', '')
        const cookieWalletTypBefor = this.$cookie.set('walletType', '')
        console.log('cookieWalletAddressBefor : ' + cookieWalletAddressBefor)
        console.log('cookieWalletTypBefor : ' + cookieWalletTypBefor)
        this.userWalletAddress = null


        // this.$router.push('/')
      // } else {
      //   this.$noti(this.$q, this.$t('logout_failed'))
      // }
    },
    callbackLogin(userVo) {
      // console.log('callbackLogin!!!')
      this.$store.dispatch('setUid', userVo.uid)
      this.$store.dispatch('setAdcd', userVo.adcd)
      this.$store.dispatch('setName', userVo.name)
      this.$store.dispatch('setNickname', userVo.nickname)
      this.$store.dispatch('setProfileImage', userVo.profile_image)
      this.$store.dispatch('setWalletType', userVo.wallet_type)
      this.$store.dispatch('setWalletAddress', userVo.wallet_address)
      this.$store.dispatch('setMobileNo', userVo.mobile_no)

      // 계정 정보 조회
      // this.selectUser()
    },
    callbackWallet(walletVo) {
      // console.log('callbackWallet in MainLayout')
      // this.$store.dispatch('setWalletAddress', walletVo.wallet_address)
    },
    openUrl(url) {
      // openURL(url)
      window.open(url, '_system')

      // // cordova인 경우 IframeModal 표시
      // if (this.$q.platform.is.cordova || this.$q.platform.is.name === 'webkit') {
      //   this.$refs.refIframeModal.url = url
      //   this.$refs.refIframeModal.show()
      // } else {
      //   window.open(url, '_system')
      // }
    },
    goHome() {
      this.$router.push('/')
    },
    goMypage() {
      this.$router.push('/mypage')
    },
    // connect wallet
    connectWallet(walletType) {
      if (walletType === 'beastar') {
        this.showLoginModal()
      } else if (walletType === 'kaikas') {
        this.$noti(this.$q, this.$t('wallet_kaikas'))
      } else if (walletType === 'metamask') {
        this.$noti(this.$q, this.$t('wallet_metamask'))
      } else if (walletType === 'klip') {
        this.$noti(this.$q, this.$t('wallet_klip'))
      }

      // this.msgBox = true

      // // this.$axios.get(this.$store.state.apiServerIp + '/api/rank/selectRewardRankList',
      // this.$axios.get('/api/user/selectUser',
      //   {params: {uid: 1}})
      //   .then((result) => {
      //     console.log(JSON.stringify(result.data))
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //     done()
      //   })
    },
    copyValue(value) {
      if (!value) {
        this.$noti(this.$q, 'Value is Empty')
        return
      }
      // 클립보드로 복사하기
      this.$copyText(String(value)).then(this.copyValueSuccess, this.copyValueFail)
      },
    copyValueSuccess(e) {
      // console.log(e)
      this.$noti(this.$q, this.$t('copy_success'))
    },
    copyValueFail(e) {
      // console.log(e)
      this.$noti(this.$q, this.$t('copy_failed'))
    },
    //////////////////////////////////////////////////////////////////////////
    // async connectMetaMaskWallet() {
    //   // this.$noti(this.$q, this.$t('wallet_metamask'))
    //   if (typeof window.ethereum !== 'undefined') {
    //     try {

    //       const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    //       const walletAddress = accounts[0]
    //       // alert(walletAddress)

    //       // this.$store.dispatch('setWalletType', 'metamask')
    //       // this.$store.dispatch('setWalletAddress', walletAddress)

    //       this.$cookie.set('walletAddress', walletAddress)
    //       this.$cookie.set('walletType', 'metamask')
    //       this.$store.dispatch('setWalletAddress', walletAddress)
    //       this.$store.dispatch('setWalletType', 'metamask')
    //       localStorage.setItem('WALLETADDRESS', walletAddress)
    //       localStorage.setItem('WALLETTYPE', 'metamask')

    //       // // ■■■ 회원정보 체크, 존재하지 않으면 가입화면으로 이동
    //       // this.checkUser(walletAddress)
    //     } catch (error) {
    //       console.log(error)
    //       this.$noti(this.$q, error.message)
    //     }
    //   } else {
    //     this.$noti(this.$q, this.$t('MetaMask is not installed.'))
    //     window.open('https://metamask.app.link/dapp/https://mint.bumiband.com')
    //     // window.open('https://metamask.app.link/dapp/https://')
    //   }
    // },
    async connectMetaMaskWallet() {
      // this.$noti(this.$q, this.$t('wallet_metamask'))
      console.log("connectMetaMaskWallet")
      if (typeof window.ethereum !== 'undefined') {
        try {
          // MetaMask 네트워크를 Ethereum 메인넷으로 전환 또는 추가
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: '0x1', // Ethereum 메인넷 (1 in decimal)
              chainName: 'Ethereum Mainnet',
              nativeCurrency: {
                name: 'Ether',
                symbol: 'ETH',
                decimals: 18
              },
              rpcUrls: ['https://eth.llamarpc.com'],
              blockExplorerUrls: ['https://etherscan.io/']
            }]
          })

          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
          const walletAddress = accounts[0]
          // alert(walletAddress)

          // this.$store.dispatch('setWalletType', 'metamask')
          // this.$store.dispatch('setWalletAddress', walletAddress)

          this.$cookie.set('walletAddress', walletAddress)
          this.$cookie.set('walletType', 'metamask')
          this.$store.dispatch('setWalletAddress', walletAddress)
          this.$store.dispatch('setWalletType', 'metamask')
          localStorage.setItem('WALLETADDRESS', walletAddress)
          localStorage.setItem('WALLETTYPE', 'metamask')

          // ■■■ 회원정보 체크, 존재하지 않으면 insert
          try {
            this.checkAndRegisterUser(walletAddress)
          } catch (e) {
            console.log(e)
          }
        } catch (error) {
          console.log(error)
          this.$noti(this.$q, error.message)
        }
      } else {
        this.$noti(this.$q, this.$t('MetaMask is not installed.'))
        window.open('https://metamask.app.link/dapp/https://mint.bumiband.com')
        // window.open('https://metamask.app.link/dapp/https://')
      }
    },
    disconnectMetamaskWallet() {
      // console.log('들어옴!!!!!!!!!')
      // this.phantomDisconnecting()

      this.$store.dispatch('setWalletAddress', '')
      this.$store.dispatch('setWalletType', '')
      localStorage.setItem('WALLETADDRESS', '')
      localStorage.setItem('WALLETTYPE', '')
      this.$cookie.set('walletAddress', '')
      this.$cookie.set('walletType', '')
    },
  }
})
</script>

<!-- <style lang="sass">
@supports (backdrop-filter: none)
  .header
    background-color: rgba(229,229,229,.7)
    backdrop-filter: blur(3px)
@supports not (backdrop-filter: none)
  .header
    background-color: black
</style> -->
<style scoped>
:deep(.material-icons) {
  font-family: 'Material Icons' !important;
}
</style>
