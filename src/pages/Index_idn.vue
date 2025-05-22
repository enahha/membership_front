<template>
<div class="page_main">
  <div id="Wrap">

	<!-- 메인 비주얼 -->
	<div id="main_visual" :key="resetKey">

		<div class="visual_step1">
			<video id="mv_video" autoplay loop muted playsinline ><source src="_img/main/mv_video1.mp4" type="video/mp4"></video>
			<!-- <img src="_img/main/mv_video1.webp" alt="" /> -->
		</div>

		<div class="visual_step2">
			<div class="visual_contents">
				<h2>
					<p class="sym"><img class="img_sym" src="_img/comm/symbol.png" alt="" /></p>
					<img class="img_text" src="_img/main/mv_text.png" alt="">
				</h2>
				<p class="desc">Periksa berita terbaru tentang Punkykongz dan Punkvism!</p>
				<div class="sns">
					<a href="#."><img src="_img/comm/icon_blog.png" alt="blog go" /></a>
					<a href="#."><img src="_img/comm/icon_medium.png" alt="medium go" /></a>
				</div>
			</div>

			<div class="ship_ani">
				<div class="ship">
					<p><img src="_img/main/mv_flame.gif" alt="" /></p>
					<img src="_img/main/mv_ship1.png" alt="" />
				</div>
				<div class="lightning lightning1"><img src="_img/main/mv_lightning1.png" alt=""></div>
				<div class="lightning lightning2"><img src="_img/main/mv_lightning2.png" alt=""></div>
				<div class="lightning lightning3"><img src="_img/main/mv_lightning3.png" alt=""></div>
			</div>
		</div>

	</div>
	<!-- //메인 비주얼 -->

	<!-- 본문 시작 -->
	<main role="main">
	<!-- main_container -->
	<div id="main_container" class="">

	<!-- sec01 -->
	<section class="sec01 container full_bg"   id="sec01">
		<div class="inner">
			<h3 class="section_title"  data-aos><span></span><strong>Opening Story</strong><span></span></h3>
			<div class="story_swiper"  data-aos="fade-up">
				<div class="swiper mySwiper">
					<div class="swiper-wrapper">
						<div class="swiper-slide item1">
							<div class="contents">
								<img src="_img/main/sec01_img1.png" class="wp100 kongz" alt="" />
								<p class="effect1"></p>
								<p class="effect2"></p>
							</div>
						</div>
						<div class="swiper-slide item2">
							<div class="contents">
								<div class="kongz"><img src="_img/main/sec01_img2.png" alt=""><img src="_img/main/sec01_img3.png" alt=""></div>
							</div>
						</div>
					</div>
				</div>
				<div class="story-arrow story-next"><p><img src="_img/main/sec01_arrow.png" alt="" /></p></div>
				<div class="story-arrow story-prev"><p><img src="_img/main/sec01_arrow.png" alt="" /></p></div>
			</div>
			<div class="swiper_page"  data-aos="fade-up">
				<div class="page1">
					<p class="bar"><span></span></p>
					<p class="title">Dunia Kongz: Cahaya yang Memudar dan Keheningan</p>
				</div>
				<div class="page2">
					<p class="bar"><span></span></p>
					<p class="title">Tanah Hijau yang Memikat dan Keajaiban Ajaib</p>
				</div>
			</div>

			<dl class="story_info">
				<dt>
					<p data-aos class="text-motion"><span>Kisah tentang perjalanan yang penuh tantangan melawan ombak besar dan kesulitan untuk akhirnya mencapai surga, memulai petualangan menuju era baru dan tanah baru.
					</span></p>
				</dt>
				<dd>
					<p data-aos class="text-motion"><span>
						Dunia Kongz yang dulu bersinar terang perlahan kehilangan cahayanya, dan jalanan yang dulu penuh tawa kini menjadi sunyi.Menolak untuk berpuas diri dengan kenyataan yang ada, salah satu Kongz yang pemberani memutuskan untuk mencari sesuatu yang lebih seru dan baru. Akhirnya, ia menemukan surga dan kembali membawa kabar gembira.
						<br />Namun, Kongz yang kehilangan semangatnya ragu untuk memulai perjalanan yang begitu jauh.Bisakah mereka semua bersama-sama pergi ke tanah itu, yang dipenuhi oleh tumbuhan hijau yang indah, sihir yang mempesona, dan benda-benda misterius
					</span></p>
				</dd>
			</dl>

		</div>

		<div id="sec011" class="vision_inner">
			<h3 class="section_title" data-aos><span></span><strong>Vision</strong><span></span></h3>

			<div class="row vision">
				<div class="col-lg-6" >
					<div class="thumb" data-aos="fade-up">
						<div><p data-aos class="text-motion2"><span>Punkvism</span></p></div>
						<p><img src="_img/main/sec01_img4.png" class="wp100" alt="" /></p>
					</div>
					<dl>
						<dt><p data-aos class="text-motion"><span>Petualang yang melawan ketidakadilan dalam masyarakat.</span></p></dt>
						<dd><p data-aos class="text-motion"><span>Sebuah misi yang terinspirasi oleh semangat "cypherpunk" dari pencipta Bitcoin, Satoshi Nakamoto.</span></p></dd>
					</dl>
				</div>
				<div class="col-lg-6" >
					<div class="thumb" data-aos="fade-up">
						<div><p data-aos class="text-motion2"><span>Punkyvist</span></p></div>
						<p><img src="_img/main/sec01_img5.png" class="wp100" alt="" /></p>
					</div>
					<dl>
						<dt><p data-aos class="text-motion"><span>Orang-orang yang menjalankan visi Punkvism.</span></p></dt>
						<dd><p data-aos class="text-motion"><span>Mengacu pada seorang petualang yang melawan masyarakat yang tidak masuk akal dan seseorang yang berjuang untuk kemenangan dan kemajuan tanpa akhir.</span></p></dd>
					</dl>
				</div>
			</div>
		</div>
	</section>
	<!-- //sec01 -->

	<!-- sec02 -->
	<section id="sec02" class="sec02">
		<div class="img">
			<img data-aos="fade-right" src="_img/main/sec02_img1.png" alt="">
			<img data-aos="fade-left" src="_img/main/sec02_img2.png" alt="">
		</div>

		<div class="container">
			<h3 class="section_title" data-aos><span></span><strong>Roadmap</strong><span></span></h3>

			<ul class="list-unstyled list_t mb50 mb40-lg mb30-md">
				<li data-aos="flip-down">
					<div><strong>Virtual Gaming Token Ecosystem</strong></div>
					<div class="dot"><span></span><span></span><span></span></div>
					<div data-aos="fade-down"><p>Penciptaan Lapangan Kerja di Metaverse</p></div>
				</li>
				<li data-aos="flip-down">
					<div><strong>Keanggotaan</strong></div>
					<div class="dot"><span></span><span></span><span></span></div>
					<div data-aos="fade-down"><p>Bisnis<br /> Platform</p></div>
				</li>
				<li data-aos="flip-down">
					<div><strong>RWA</strong></div>
					<div class="dot"><span></span><span></span><span></span></div>
					<div data-aos="fade-down"><p>RWA <br>Launchpad</p></div>
				</li>
				<li data-aos="flip-down">
					<div><strong>Kisah IP</strong></div>
					<div class="dot"><span></span><span></span><span></span></div>
					<div data-aos="fade-down"><p>Semesta<br /> Komik</p></div>
				</li>
			</ul>

			<ul class="list-unstyled list_b">
				<li>
					<div data-aos="flip-left" data-aos-delay="200"><strong>Ekosistem Token Permainan</strong></div>
					<div data-aos="fade-right" data-aos-delay="300">
						<div class="arrow arrow1"><p><i class="xi-arrow-right"></i></p></div>
							<p>Game NFT, game balap anjing, game kasual, SnowChat, NFT 3D</p>
						<div class="arrow arrow2"><p><i class="xi-arrow-right"></i></p></div>
					</div>
					<div data-aos="fade-right" data-aos-delay="400"><p>Penciptaan Lapangan Kerja di Metaverse</p></div>
				</li>
				<li>
					<div data-aos="flip-left" data-aos-delay="200"><strong>Keanggotaan</strong></div>
					<div data-aos="fade-right" data-aos-delay="300">
						<div class="arrow arrow1"><p><i class="xi-arrow-right"></i></p></div>
						<p>Layanan informasi, diskon, kemitraan bisnis pemegang</p>
						<div class="arrow arrow2"><p><i class="xi-arrow-right"></i></p></div>
					</div>
					<div data-aos="fade-right" data-aos-delay="400"><p>Bisnis Platform</p></div>
				</li>
				<li>
					<div data-aos="flip-left" data-aos-delay="200"><strong>RWA </strong></div>
					<div data-aos="fade-right" data-aos-delay="300">
						<div class="arrow arrow1"><p><i class="xi-arrow-right"></i></p></div>
						<p>Rumah sakit, resor, pengembangan kota baru Sun Hall, penambangan sumber daya</p>
						<div class="arrow arrow2"><p><i class="xi-arrow-right"></i></p></div>
					</div>
					<div data-aos="fade-right" data-aos-delay="400"><p>RWA Launchpad</p></div>
				</li>
				<li>
					<div data-aos="flip-left" data-aos-delay="200"><strong>스토리 <br>(토르미아, 펑크비즘)</strong></div>
					<div data-aos="fade-right" data-aos-delay="300">
						<div class="arrow arrow1"><p><i class="xi-arrow-right"></i></p></div>
						<p>소설,웹툰, IP사업</p>
						<div class="arrow arrow2"><p><i class="xi-arrow-right"></i></p></div>
					</div>
					<div data-aos="fade-right" data-aos-delay="400"><p>스노우시드 코믹스</p></div>
				</li>
			</ul>
		</div>
	</section>
	<!-- //sec02 -->

	<!-- sec03 -->
	<section  id="sec03" class="sec03 ">
		<div class="bg bg1"><video id="sec03_video1" autoplay loop muted playsinline ><source src="_img/main/sec03_bg_video.mp4" type="video/mp4"></video></div>
		<div class="bg bg2">
			<video id="sec03_video2" autoplay loop muted playsinline ><source src="_img/main/sec03_bg_video2.mp4" type="video/mp4"></video>
		</div>

		<div class="container">
			<h3 class="section_title" data-aos><span></span><strong>Universe</strong><span></span></h3>

			<div class="box1">
				<div class="txt">
					<p class="tit">Ekosistem Punkykongz <img src="_img/main/sec03_ci.png" alt=""></p>

					<ul class="list-unstyled list1">
						<li>100 Genesis NFT akan segera diungkap sebagai <strong>Punkykongz Legendary.</strong></li>
						<li>
							Pemegang Punkykongz NFT, yang mewakili <strong>Punkvism Universe,</strong> akan mendapatkan manfaat prioritas.
							<p>
								<span>penambangan</span>
								<span>NFT games</span>
								<span>keanggotaan</span>
								dan banyak lagi!
							</p>
						</li>
					</ul>
				</div>

				<div class="qbox">
					<div>
						<span>?</span>
						<p>“Harimau itu sedang turun!! Dan ukurannya besar sekali!”</p>
					</div>
					<div>
						<span>??</span>
						<p>“Apa pun yang Anda bayangkan, ini lebih dari itu!!”</p>
					</div>
					<div>
						<span>???</span>
						<p>“Ini baru permulaan... sesuatu yang besar sedang datang."</p>
					</div>
				</div>

				<div class="img"><img src="_img/main/sec03_img1.png" alt=""></div>

				<div class="mt30">
					<a href="https://magiceden.io/marketplace/punkykongz" target="_blank" class="more_magic">Punkykongz Magic Eden <img src="_img/main/sec03_arrow.png" alt=""></a>
				</div>
			</div>

			<div class="box2">
				<div class="dot dot1"><span></span><span></span><span></span></div>
				<div class="dot dot2"><span></span><span></span><span></span></div>

				<div class="left">
					<p class="txt1">Denominator Umum dari Ekosistem</p>
					<p class="txt2">Keanggotaan · Cerita · Token Permainan</p>
					<p class="txt3">
						Kolaborasi antara kedua ekosistem ini tidak hanya sebatas berbagi pendapatan, tetapi juga akan berkontribusi pada pengembangan konten dan perluasan ekosistem.
					</p>
				</div>

				<div class="right">
					<p class="tit1">Denominator Umum Antara Ekosistem Punkykongz dan Ekosistem SnowSeed Tormia</p>

					<ul class="list-unstyled">
						<li>
							<span class="eng">01</span>
							<div>
								<p class="tit2">Ekosistem Token Permainan Virtual</p>

								<div class="tag">
									<span>Penambangan token</span>
									<span>Pemanfaatan game NFT</span>
									<span>Integrasi dengan SnowChat</span>
									<span>Penggunaan ruangan virtual 3D</span>
									<span>Inklusi game balap anjing</span>
									<span>Integrasi dengan game kasual</span>
								</div>
							</div>
						</li>

						<li>
							<span class="eng">02</span>
							<p class="tit2">Keanggotaan</p>
						</li>

						<li>
							<span class="eng">03</span>
							<div>
								<p class="tit2">
									Cerita dan Bisnis IP
									<span>(Cerita dari ekosistem Punkykongz dan Tormia akan saling berbagi.)</span>
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>

			<div class="box3">
				<p class="tit">Ekosistem Tormia Snowseed (RWA)<img src="_img/main/sec03_ci2.png" alt=""></p>
				<ul class="list-unstyled list1">
					<li>
						NFT dalam ekosistem Tormia Snowseed akan terdiri dari RWA NFT yang dikenal dengan keuntungan tinggi dan potensi bisnisnya.</li>
					<li>Snowseed adalah perusahaan resmi yang berbasis di Indonesia dan beroperasi sesuai dengan peraturan hukum yang berlaku.</li>
					<li>Tujuan kami adalah menjadi pemimpin global dalam RWA NFT.</li>
				</ul>
				<div class="mt20 pl20 pl0-md">
					<a href="https://magiceden.io/marketplace/8cAepBVP6SkJ2PcZ7xDwkhio96fjwMDvPQkHPBf1uWg2" target="_blank" class="more_magic">ALYA Magic Eden <img src="_img/main/sec03_arrow.png" alt=""></a>
				</div>

				<div>
					<div class="swbox">
						<div class="swiper mySwiper">
							<div class="swiper-wrapper">
								<div class="swiper-slide"><img src="_img/main/sec03_sw_img1.jpg" alt=""></div>
								<div class="swiper-slide"><img src="_img/main/sec03_sw_img2.jpg" alt=""></div>
								<div class="swiper-slide"><img src="_img/main/sec03_sw_img3.jpg" alt=""></div>
								<div class="swiper-slide"><img src="_img/main/sec03_sw_img4.jpg" alt=""></div>
								<div class="swiper-slide"><img src="_img/main/sec03_sw_img5.jpg" alt=""></div>
								<div class="swiper-slide"><img src="_img/main/sec03_sw_img6.jpg" alt=""></div>
							</div>
							<div class="sw-btn sw-next"><div><img src="_img/main/sec01_arrow.png" alt=""></div></div>
							<div class="sw-btn sw-prev"><div><img src="_img/main/sec01_arrow.png" alt=""></div></div>
						</div>

						<p>Konsorsium RWA Pengembangan Kota Baru Banten</p>
					</div>

					<img src="_img/main/sec03_img2.png" alt="">
				</div>
			</div>

			<div class="box4">
				<div class="title">
					Gen <span></span> esis
					<img src="_img/main/sec03_img3.png" alt="">
				</div>

				<dl>
					<dt>Genesis: Kartu Keanggotaan VIP untuk Ekosistem Punkykongz</dt>
					<dd>
						Genesis NFT dari Snowseed adalah item langka yang hanya ada 100 eksemplar, dan merupakan dewa ekosistem Punky Kongz.
						<br />Dengan Genesis, Anda dapat menikmati manfaat terbesar dari semua manfaat platform dan memperoleh kesempatan untuk mengikuti gelombang pertumbuhan.
						<br />Kelangkaan maksimum! Dengan Genesis, Anda menjadi pahlawan ekosistem dengan hak Anda sendiri.
					</dd>
				</dl>

				<a href="https://magiceden.io/marketplace/snow_seed_genesis" target="_blank" class="more_magic">Genesis Magic Eden <img src="_img/main/sec03_arrow.png" alt=""></a>
			</div>
		</div>
	</section>
	<!-- //sec03 -->

	<!-- sec04 -->
	<section id="sec04" class="sec04 container full_bg">
		<h3 class="section_title" data-aos><span></span><strong>Team</strong><span></span></h3>
		
		<ul class="list-unstyled" data-aos>
			<li>
				<div class="business_card">
					<div class="inner">
						<div class="front"></div>
						<div class="back">
							<img src="_img/main/sec04_img1.png" alt="">
							<div>
								<p class="name"><small>CEO</small>Hwang Hyunki</p>
								<p class="desc">"Kami berkomitmen untuk menjadi perusahaan terkemuka yang mewujudkan nilai-nilai berbagi dari WEB 3.0 dengan semangat kebersamaan."</p>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="business_card">
					<div class="inner">
						<div class="front"></div>
						<div class="back">
							<img src="_img/main/sec04_img2.png" alt="">
							<div>
								<p class="name"><small>COO</small>Park Ji Won</p>
								<p class="desc">"Dengan semangat kebersamaan, saya bercita-cita untuk memimpin pasar global dalam NFT berbasis RWA."</p>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="business_card">
					<div class="inner">
						<div class="front"></div>
						<div class="back">
							<img src="_img/main/sec04_img3.png" alt="">
							<div>
								<p class="name"><small>CLO</small>Kim Jae Min</p>
								<p class="desc">
									선봉에서 센세이션을 일으키며 NFT 커뮤니티를 이끌어온 창업 멤버로서, RWA NFT가 세계 시장의 주류가 되는 모습을 보여드리고 싶습니다.
								</p>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="business_card">
					<div class="inner">
						<div class="front"></div>
						<div class="back">
							<img src="_img/main/sec04_img4.png" alt="">
							<div>
								<p class="name"><small>CTO</small>Jang Jin Jun</p>
								<p class="desc">
									"Di pasar STO yang sedang berkembang saat ini, saya bertujuan untuk membangun bisnis IT yang sukses berdasarkan teknologi dan layanan terpadu yang mencakup ruang online dan offline."
								</p>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="business_card">
					<div class="inner">
						<div class="front"></div>
						<div class="back">
							<img src="_img/main/sec04_img5.png" alt="">
							<div>
								<p class="name"><small>CFO</small>Kim Jung Ju</p>
								<p class="desc">
									Saya berencana untuk secara aktif memanfaatkan pengalaman dan kisah sukses saya di pasar M&A perusahaan untuk menghidupkan kembali pasar NFT yang sedang lesu.
								</p>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="business_card">
					<div class="inner">
						<div class="front"></div>
						<div class="back">
							<img src="_img/main/sec04_img6.png" alt="">
							<div>
								<p class="name"><small>CIO/CRO</small>조규민</p>
								<p class="desc">
									NFT 혁신의 중심에서 시작된 여정을 넘어, 이제는 NFT의 가능성을 세계 무대에서 입증하겠습니다.
								</p>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="business_card">
					<div class="inner">
						<div class="front"></div>
						<div class="back">
							<img src="_img/main/sec04_img7.png" alt="">
							<div>
								<p class="name"><small>CBO/RWA TF 팀장</small>박정호</p>
								<p class="desc">
									우리는 디지털 자산과 실물 자산의 경계를 허물고, 글로벌 시장에서 새로운 가치를 창출하는 선도적인 플랫폼이 될 것입니다.
								</p>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>

		<div class="img"><img src="_img/main/sec04_motion.png" alt=""></div>
	</section>
	<!-- //sec04 --> 

	<!-- sec06 -->
	<section id="sec06" class="sec06 ">
		<div class="container">
			<h3 class="section_title" data-aos><span></span><strong>PARTNER</strong><span></span></h3>
			<ul>
				<li><p class="box"><img src="_img/main/sec06_logo1.png" alt=""></p></li>
				<li><p class="box"><img src="_img/main/sec06_logo2.png" alt=""></p></li>
				<li><p class="box"><img src="_img/main/sec06_logo3.png" alt=""></p></li>
				<li><p class="box"><img src="_img/main/sec06_logo4.png" alt=""></p></li>
				<li><p class="box"><img src="_img/main/sec06_logo5.png" alt=""></p></li>
				<li><p class="box"><img src="_img/main/sec06_logo6.png" alt=""></p></li>
				<li><p class="box"><img src="_img/main/sec06_logo7.png" alt=""></p></li>
				<li><p class="box"><img src="_img/main/sec06_logo8.png" alt=""></p></li>
				<li><p class="box"><img src="_img/main/sec06_logo9.png" alt=""></p></li>
				<li><p class="box"><img src="_img/main/sec06_logo10.png" alt=""></p></li>
				<li><p class="box"><img src="_img/main/sec06_logo11.png" alt=""></p></li>
				<li><p class="box"><img src="_img/main/sec06_logo12.png" alt=""></p></li>
				<li><p class="box"><img src="_img/main/sec06_logo13.png" alt=""></p></li>
				<li><p class="box"><img src="_img/main/sec06_logo14.png" alt=""></p></li>
				<li><p class="box"><img src="_img/main/sec06_logo15.png" alt=""></p></li>
			</ul>
		</div>
		<div class="bg_video">
			<video id="mv_video" autoplay loop muted playsinline ><source src="_img/main/sec06_bg.mp4" type="video/mp4"></video>
		</div>
	</section>
	<!-- //sec06 -->

	<!-- sec05 -->
	<section id="sec05" class="sec05">
		<div class="container">
			<h3 class="section_title" data-aos><span></span><strong>FAQ</strong><span></span></h3>

			<div>
				<ul class="list-unstyled faq_list mb45 mb15-lg">
					<li data-num="faq_1">
						<a href="#." data-toggle="modal" data-target="#faq_Modal">
							<span class="num">01</span>
							<p>Apa itu Punkykongz (NFT)?</p>
						</a>
					</li>
					<li data-num="faq_2">
						<a href="#." data-toggle="modal" data-target="#faq_Modal">
							<span class="num">02</span>
							<p>2. Apa filosofi dari Punkykongz dan Punkvism?</p>
						</a>
					</li>
					<li data-num="faq_3">
						<a href="#." data-toggle="modal" data-target="#faq_Modal">
							<span class="num">03</span>
							<p>Bagaimana Cara Membeli Punkykongz NFT?</p>
						</a>
					</li>
					<li data-num="faq_4">
						<a href="#." data-toggle="modal" data-target="#faq_Modal">
							<span class="num">04</span>
							<p>Apa Manfaat dari Memiliki Punkykongz NFT?</p>
						</a>
					</li>
					<li data-num="faq_5">
						<a href="#." data-toggle="modal" data-target="#faq_Modal">
							<span class="num">05</span>
							<p>Bagaimana Ekosistem Permainan Punkykongz Beroperasi?</p>
						</a>
					</li>
				</ul>

				<div class="answer_list answer_list-pc">
					<div data-num="faq_1">
						<div class="list_q">
							<span>Q</span>
							<p>Apa itu Punkykongz (NFT)?</p>
							<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
						</div>
						<div class="list_a">
							<span>A</span>
							<p>Punkykongz adalah proyek NFT inovatif yang diluncurkan di blockchain Solana oleh tim Punkvism. Proyek ini mencerminkan semangat Web3 dan berfungsi sebagai aset digital serbaguna yang dapat digunakan di berbagai permainan dan ekosistem digital. Diciptakan sebagai proyek kedua oleh salah satu pendiri Metakongz, Punkykongz menawarkan berbagai manfaat dan peluang partisipasi kepada pemiliknya.</p>
						</div>
					</div>

					<div data-num="faq_2">
						<div class="list_q">
							<span>Q</span>
							<p>2. Apa filosofi dari Punkykongz dan Punkvism?</p>
							<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
						</div>
						<div class="list_a">
							<span>A</span>
							<p>
								Punkvism didorong oleh misi sebagai "petualang yang melawan ketidakadilan dalam masyarakat," yang mencerminkan semangat komunitas PunkyVist. Para pendiri Punkvism terinspirasi oleh semangat cypherpunk dari pencipta Bitcoin, Satoshi Nakamoto, untuk memulai perjalanan Web3.0 mereka. Punkvism berupaya melanjutkan semangat ini, dengan tujuan menciptakan dunia digital yang lebih transparan dan adil.
							</p>
						</div>
					</div>

					<div data-num="faq_3">
						<div class="list_q">
							<span>Q</span>
							<p>Bagaimana Cara Membeli Punkykongz NFT?</p>
							<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
						</div>
						<div class="list_a">
							<span>A</span>
							<p>
								Semua NFT Punky Kongz dikirimkan secara gratis dan dapat dibeli di Magic Eden, bursa Solana terbesar di dunia.
							</p>
						</div>
					</div>

					<div data-num="faq_4">
						<div class="list_q">
							<span>Q</span>
							<p>Apa Manfaat dari Memiliki Punkykongz NFT?</p>
							<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
						</div>
						<div class="list_a">
							<span>A</span>
							<div>
								<p>Sebagai pemilik Punkykongz NFT, Anda dapat menikmati manfaat berikut :</p>
								<ul class="list-unstyled">
									<li>
										<b>Penambangan Token Game</b>
										<p>Dapatkan token game harian dalam ekosistem Punkykongz, yang dapat digunakan di berbagai permainan dan aktivitas dalam ekosistem.</p>
									</li>
									<li>
										<b>Keuntungan Keanggotaan</b>
										<p>Nikmati diskon dan keuntungan eksklusif, dengan manfaat keanggotaan yang diperluas di dalam dan luar negeri untuk lebih banyak peluang.</p>
									</li>
									<li>
										<b>Partisipasi dalam Proyek RWA</b>
										<p>Dapatkan akses untuk berpartisipasi dalam proyek NFT RWA global, termasuk inisiatif berbasis di Indonesia, melalui platform RWA Snowseed.</p>
									</li>
									<li>
										<b>Konten Berbasis Cerita</b>
										<p>Nikmati akses prioritas dan manfaat eksklusif untuk konten berbasis IP yang akan datang seperti novel, webtoon, dan lainnya.</p>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div data-num="faq_5">
						<div class="list_q">
							<span>Q</span>
							<p>Bagaimana Ekosistem Permainan Punkykongz Beroperasi?</p>
							<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
						</div>
						<div class="list_a">
							<span>A</span>
							<div>
								<p>Punkykongz bekerja sama dengan berbagai game untuk membangun ekosistem permainan yang berpusat pada NFT. Untuk mengatasi ketidakstabilan yang dimiliki oleh game P2E tradisional, proyek ini berencana meluncurkan game yang berfokus pada NFT daripada koin.</p>
								<ul class="list-unstyled">
									<li>
										<b>Peran Token :</b>
										<p>Token permainan dalam ekosistem Punkykongz dapat diuangkan tetapi terutama digunakan untuk membeli NFT. Pemain dapat memperoleh NFT tambahan dengan token yang ditambang dalam permainan, memberikan akses ke lebih banyak game dan konten.</p>
									</li>
									<li>
										<b>Pengembangan dan Kolaborasi Game :</b>
										<p>Berbagai genre, termasuk RPG bergaya Lineage dan game kasual, akan ditambahkan ke dalam ekosistem Punkykongz.</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<ul class="list-unstyled faq_list mt30 mt0-lg">
					<li data-num="faq_6">
						<a href="#." data-toggle="modal" data-target="#faq_Modal">
							<span class="num">06</span>
							<p>Apa Roadmap untuk Proyek Punkykongz?</p>
						</a>
					</li>
					<li data-num="faq_7">
						<a href="#." data-toggle="modal" data-target="#faq_Modal">
							<span class="num">07</span>
							<p>Mengapa Menggunakan NFT Punkykongz di Solana Chain?</p>
						</a>
					</li>
					<li data-num="faq_8">
						<a href="#." data-toggle="modal" data-target="#faq_Modal">
							<span class="num">08</span>
							<p>Apakah Ada Hal yang Perlu Diperhatikan Saat Membeli NFT? </p>
						</a>
					</li>
					<li data-num="faq_9">
						<a href="#." data-toggle="modal" data-target="#faq_Modal">
							<span class="num">09</span>
							<p>Apa Hubungan antara Proyek Punkykongz dan Punkvism?</p>
						</a>
					</li>
					<li data-num="faq_10">
						<a href="#." data-toggle="modal" data-target="#faq_Modal">
							<span class="num">10</span>
							<p>Bagaimana Cara Bergabung dengan Komunitas Punkykongz?</p>
						</a>
					</li>
				</ul>

				<div class="answer_list answer_list-pc mt45">
					<div data-num="faq_6">
						<div class="list_q">
							<span>Q</span>
							<p>Apa Roadmap untuk Proyek Punkykongz?</p>
							<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
						</div>
						<div class="list_a">
							<span>A</span>
							<div>
								<p>Poin-poin utama dalam roadmap proyek Punkykongz adalah sebagai berikut :</p>
								<ul class="list-unstyled">
									<li>
										<b>Perluasan Ekosistem Token Permainan :</b>
										<p>Menarik pengguna baru melalui platform seperti SnowChat dan ruang virtual 3D, sekaligus memaksimalkan skalabilitas token melalui berbagai permainan.</p>
									</li>
									<li>
										<b>Penguatan Program Keanggotaan :</b>
										<p>Meningkatkan manfaat keanggotaan domestik dan internasional, memberikan pemegang NFT berbagai diskon dan keuntungan.</p>
									</li>
									<li>
										<b>Kemajuan Proyek RWA :</b>
										<p>Memperluas bisnis sebagai platform peluncuran RWA global, dimulai dengan platform RWA khusus di Indonesia.</p>
									</li>
									<li>
										<b>Pengembangan IP dan Cerita :</b>
										<p>Memperluas semesta Punkykongz melalui berbagai media seperti novel dan webtoon, meningkatkan nilai properti intelektualnya.</p>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div data-num="faq_7">
						<div class="list_q">
							<span>Q</span>
							<p>Mengapa Menggunakan NFT Punkykongz di Solana Chain?</p>
							<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
						</div>
						<div class="list_a">
							<span>A</span>
							<p>
								Solana chain sangat cocok untuk perdagangan aset digital seperti NFT karena kecepatan transaksinya yang tinggi dan biaya yang rendah. Selain itu, dompet Phantom yang beroperasi di Solana chain mudah digunakan, sehingga pemilik Punkykongz dapat dengan mudah mengelola NFT mereka.
							</p>
						</div>
					</div>

					<div data-num="faq_8">
						<div class="list_q">
							<span>Q</span>
							<p>Apakah Ada Hal yang Perlu Diperhatikan Saat Membeli NFT?</p>
							<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
						</div>
						<div class="list_a">
							<span>A</span>
							<p>
								Saat membeli Punky Kongz NFT, pastikan untuk melakukan transaksi di pasar resmi atau bursa bersertifikat seperti Magic Eden. Untuk menghindari situs penipuan atau transaksi NFT palsu, selalu periksa saluran media sosial resmi kami untuk mendapatkan informasi terkini.
							</p>
						</div>
					</div>

					<div data-num="faq_9">
						<div class="list_q">
							<span>Q</span>
							<p>Apa Hubungan antara Proyek Punkykongz dan Punkvism?</p>
							<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
						</div>
						<div class="list_a">
							<span>A</span>
							<p>
								Proyek Punkykongz adalah inisiatif NFT berbasis Web3 yang dipimpin oleh tim Punkvism. Punkvism, yang dipimpin oleh salah satu pendiri Metakongz, terinspirasi oleh semangat cypherpunk dari Bitcoin. Tim ini bertujuan untuk memaksimalkan potensi ekosistem Web3 dengan menghadirkan pengalaman baru kepada pengguna di seluruh dunia melalui proyek blockchain yang transparan dan inovatif.
							</p>
						</div>
					</div>

					<div data-num="faq_10">
						<div class="list_q">
							<span>Q</span>
							<p>Bagaimana Cara Bergabung dengan Komunitas Punkykongz?</p>
							<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
						</div>
						<div class="list_a">
							<span>A</span>
							<p>
								Untuk bergabung dengan komunitas Punkykongz, cukup ikuti server Discord resmi, Twitter, atau saluran Telegram mereka. Platform ini memungkinkan Anda untuk tetap mendapatkan berita terbaru dan terhubung dengan pemilik Punkykongz lainnya. Anda dapat dengan mudah mengakses sumber daya ini melalui tautan "Komunitas" di bagian bawah situs web.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- //sec05 -->


	</div>
	<!-- //main_container -->
	</main>
	<!-- //본문 끝 -->

<!-- faq 모달 -->
<div class="modal fade inner" id="faq_Modal">
  <div class="modal-dialog">
    <div class="modal-content">
			<div class="answer_list">
				<div data-num="faq_1">
					<div class="list_q">
						<span>Q</span>
						<p>펑키콩즈(NFT)란 무엇인가요?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>펑키콩즈는 펑크비즘 팀이 솔라나 체인에서 발행한 혁신적인 NFT 프로젝트로, Web3의 정신을 담아 다양한 게임과 디지털 생태계에서 활용할 수 있는 디지털 자산입니다. 메타콩즈의 공동창업자가 2차 창작한 프로젝트로, 펑키콩즈 소유자에게는 다양한 혜택과 참여 기회가 제공됩니다.</p>
					</div>
				</div>

				<div data-num="faq_2">
					<div class="list_q">
						<span>Q</span>
						<p>펑키콩즈와 펑크비즘의 철학은 무엇인가요?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>
							펑크비즘은 **'불합리한 사회에 저항하는 모험가들'**이라는 사명을 가지고 있으며, 이는 펑크비스트(PunkyVist)라는 커뮤니티의 정신을 반영합니다. 
							펑크비즘의 공동창업자들은 <b>비트코인 창시자 사토시 나카모토의 사이퍼펑크 정신</b>에서 영감을 받아 Web3.0을 시작하게 되었습니다. 
							펑크비즘은 그 정신을 계승하여 더 투명하고 공정한 디지털 세상을 만들어 나가고자 합니다.
						</p>
					</div>
				</div>

				<div data-num="faq_3">
					<div class="list_q">
						<span>Q</span>
						<p>펑키콩즈 NFT는 어떻게 구매할 수 있나요?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>
							펑키콩즈 NFT는 솔라나 체인 기반으로 발행되며, <b>팬텀 지갑</b>을 통해 구매할 수 있습니다. 
							NFT는 **매직에덴(Magic Eden)**과 **텐서(Tensor)**와 같은 2차 거래소에서 쉽게 거래할 수 있으며, 
							공식 마켓플레이스를 통해 추가 구매 정보와 지침을 확인할 수 있습니다.
						</p>
					</div>
				</div>

				<div data-num="faq_4">
					<div class="list_q">
						<span>Q</span>
						<p>펑키콩즈 NFT를 소유하면 어떤 혜택이 있나요?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<div>
							<p>펑키콩즈 NFT 소유자는 다음과 같은 혜택을 누릴 수 있습니다:</p>
							<ul class="list-unstyled">
								<li>
									<b>게임 토큰 채굴 :</b>
									<p> 펑키콩즈 생태계에서 매일 게임 토큰을 채굴할 수 있으며, 이 토큰은 다양한 게임과 생태계 내에서 활용 가능합니다.</p>
								</li>
								<li>
									<b>멤버십 혜택 :</b>
									<p>소유자에게는 할인 및 다양한 특별 혜택이 제공되며, 국내외 멤버십 혜택 확장을 통해 더 많은 기회를 제공합니다.</p>
								</li>
								<li>
									<b>RWA 프로젝트 참여 :</b>
									<p>스노우시드의 RWA 플랫폼을 통해 인도네시아와 세계적인 RWA NFT 프로젝트에 참여할 수 있는 기회를 얻게 됩니다.</p>
								</li>
								<li>
									<b>스토리 기반 콘텐츠 :</b>
									<p>펑키콩즈 소유자들은 앞으로 출시될 소설, 웹툰 등 다양한 IP 기반 콘텐츠에 대한 우선 접근 및 혜택을 누릴 수 있습니다.</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div data-num="faq_5">
					<div class="list_q">
						<span>Q</span>
						<p>펑키콩즈의 게임 생태계는 어떻게 운영되나요?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<div>
							<p>펑키콩즈는 다양한 게임과 협력하여 NFT가 중심이 되는 게임 생태계를 구축합니다. 특히, 기존의 P2E 게임이 가진 불안정성을 해결하기 위해, 코인이 아닌 NFT 중심의 게임을 론칭할 계획입니다.</p>
							<ul class="list-unstyled">
								<li>
									<b>토큰의 역할 :</b>
									<p>펑키콩즈 생태계의 게임 토큰은 현금화가 가능하지만, 주로 NFT 구매에 사용될 수 있습니다. 게임 내에서 채굴한 토큰으로 추가 NFT를 획득하거나, 이를 통해 더 다양한 게임과 콘텐츠에 접근할 수 있습니다.</p>
								</li>
								<li>
									<b>게임 개발 및 협업 :</b>
									<p>리니지 스타일의 RPG 게임, 캐주얼 게임 등 다양한 장르의 게임이 펑키콩즈 생태계에 추가될 예정입니다.</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div data-num="faq_6">
					<div class="list_q">
						<span>Q</span>
						<p>펑키콩즈 프로젝트의 로드맵은 어떻게 되나요?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<div>
							<p>펑키콩즈 프로젝트의 주요 로드맵은 다음과 같습니다:</p>
							<ul class="list-unstyled">
								<li>
									<b>게임 토큰 생태계 확장 :</b>
									<p>스노우챗 및 3D 가상 룸 생태계를 통해 신규 유입자를 확보하고, 다양한 게임을 통해 토큰의 확장성을 극대화합니다.</p>
								</li>
								<li>
									<b>멤버십 프로그램 강화 :</b>
									<p>국내외 멤버십 혜택을 강화하여 소유자에게 다양한 할인 및 혜택을 제공합니다.</p>
								</li>
								<li>
									<b>RWA 프로젝트 진행 :</b>
									<p>인도네시아를 시작으로 RWA 전문 플랫폼으로서 글로벌 RWA NFT 런치패드를 목표로 사업을 확장합니다.</p>
								</li>
								<li>
									<b>IP 및 스토리 개발 :</b>
									<p>소설, 웹툰 등 다양한 미디어를 통해 펑키콩즈 세계관을 확장하고, IP 가치를 높여갑니다.</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div data-num="faq_7">
					<div class="list_q">
						<span>Q</span>
						<p>솔라나 체인에서 펑키콩즈 NFT를 사용하는 이유는 무엇인가요?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>
							솔라나 체인은 빠른 거래 속도와 낮은 수수료로 인해 NFT와 같은 디지털 자산 거래에 적합합니다. 
							또한, 솔라나 체인 상에서 운영되는 <b>팬텀 지갑</b>은 사용하기 쉬워, 펑키콩즈 소유자들이 간편하게 NFT를 관리할 수 있습니다.
						</p>
					</div>
				</div>

				<div data-num="faq_8">
					<div class="list_q">
						<span>Q</span>
						<p>NFT를 구매할 때 주의해야 할 점이 있나요?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>
							펑키콩즈 NFT를 구매할 때는 반드시 <b>공식 마켓플레이스</b> 또는 <b>매직에덴(Magic Eden)</b>, **텐서(Tensor)**와 같은 인증된 거래소에서 거래를 진행하시기 바랍니다. 
							사기성 사이트나 가짜 NFT 거래를 방지하기 위해 항상 공식 소셜 미디어 채널에서 최신 정보를 확인해 주세요.
						</p>
					</div>
				</div>

				<div data-num="faq_9">
					<div class="list_q">
						<span>Q</span>
						<p>펑키콩즈 프로젝트와 펑크비즘의 관계는 무엇인가요?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>
							펑키콩즈 프로젝트는 펑크비즘 팀의 주도로 진행되는 Web3 기반 NFT 프로젝트입니다.
							펑크비즘은 메타콩즈의 공동창업자가 이끌고 있는 팀으로, <b>비트코인의 사이퍼펑크 정신</b>에서 영감을 받아 Web3 생태계의 가능성을 극대화하며, 
							투명하고 혁신적인 블록체인 프로젝트를 통해 전 세계 사용자들에게 새로운 경험을 제공하는 것을 목표로 하고 있습니다.
						</p>
					</div>
				</div>

				<div data-num="faq_10">
					<div class="list_q">
						<span>Q</span>
						<p>펑키콩즈 커뮤니티에 참여하려면 어떻게 해야 하나요?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>
							펑키콩즈 커뮤니티에 참여하려면 공식 디스코드 서버나 트위터, 텔레그램 등 소셜 미디어를 팔로우하시면 됩니다. 
							커뮤니티에서 최신 소식을 빠르게 확인하고, 다른 펑키콩즈 소유자들과 소통할 수 있습니다. 웹사이트 하단의 "커뮤니티" 링크를 통해 쉽게 접근하실 수 있습니다.
						</p>
					</div>
				</div>
			</div>
    </div>
  </div>
</div>


  </div>
</div>

</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import wait from 'waait'
import { QSpinnerGears } from 'quasar'
import bs58 from "bs58"
import { formatUnits, parseUnits } from 'ethers';
import ERC20 from '@openzeppelin/contracts/build/contracts/ERC20.json';
import BN from 'bn.js'; // BN 모듈 직접 import
import { route } from 'quasar/wrappers'
import Web3 from 'web3';
import {ethers} from 'ethers'
// import { createAppKit, useAppKit } from '@reown/appkit/vue'
// import { EthersAdapter } from '@reown/appkit-adapter-ethers'
// import { mainnet, arbitrum } from '@reown/appkit/networks'
import WalletConnect from "@dcentwallet/walletconnect-client";
import QRcodeModal from "@dcentwallet/qrcode-modal"
import DcentWebConnector from 'dcent-web-connector';
import { Alchemy, Network } from "alchemy-sdk";
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
import TransportWebHID from "@ledgerhq/hw-transport-webhid";
import AppEth from "@ledgerhq/hw-app-eth";  // 이더리움 앱 관련 라이브러리
import { listen } from "@ledgerhq/logs";
import Eth from "@ledgerhq/hw-app-eth"; // Ethereum app on Ledger

import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import { EffectFade, EffectCube, EffectCoverflow, EffectFlip } from 'swiper/modules';


import 'swiper/swiper-bundle.css';
import $ from 'jquery';

// Swiper에 모듈 등록
Swiper.use([Navigation, Autoplay,EffectFade, EffectCube, EffectCoverflow, EffectFlip]);

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      smallSize: false,
      showSnsLinks: false,
      showGlobal: false,
      mainVisualClass: [],
	  resetKey: 0, // 비디오 리플레이용

      ledgerGuidePc: false,
      ledgerGuideMobile: false,
      currentPage: 0, // 현재 페이지
      itemsPerPage: 12, // 한 페이지에 보여줄 항목 수
      projectSeq: 1,
      keyword: '',
      pageSize: 1000,
      noDataFlag: false,
      solanaWalletAddress: '',
      slide: 'first', // sec03에서 DR. ANANG swipe slide - carousel
      ownNftList: [],
      selectedNFT: [],
      airdropLogList:[],
      selectAll: false,
      modal: null,
      userAddress: '',
      message: '',
      signedMessage: '',

    }
  },
  components: {
  },
  watch: {
	// 헤더 로고 클릭시 영상 리플레이
    getReplayMainVideoCount(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
		// div의 resetKey가 달라지면 다시 표시됨
		this.resetKey++

		// 영상 재생 후 효과
		setTimeout(function(){ $('#main_visual').addClass('visual_next1') },2400)
		setTimeout(function(){ $('#main_visual').addClass('visual_next2') },3000)
		setTimeout(function(){ $('#main_visual').addClass('visual_next3') },5000)
      }
    },
  },
  computed: {
	getReplayMainVideoCount () {
      return this.$store.getters.getReplayMainVideoCount
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
        return address.substr(0, 7) + '...' + address.substr(address.length - 5, 5)
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
    getUuid () {
      return this.$store.getters.getUuid
    },

    // 현재 페이지에 보여줄 항목 리스트 계산
    paginatedList() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.ownNftList.slice(start, end)
    },
    // 총 페이지 수 계산
    totalPages() {
      return Math.ceil(this.ownNftList.length / this.itemsPerPage)
    }
  },
  created: function () {
    // // console.log(this.$q.platform.is.mobile)
    // const walletAddress = localStorage.getItem('WALLETADDRESS') ? localStorage.getItem('WALLETADDRESS') : this.$cookie.get('walletAddress')
    // const walletType = localStorage.getItem('WALLETTYPE') ? localStorage.getItem('WALLETTYPE') : this.$cookie.get('walletType')
    // if (walletAddress && walletType) {
    //   this.$store.dispatch('setWalletType', walletType)
    //   this.$store.dispatch('setWalletAddress', walletAddress)
    // }

    // const solanaWalletAddress = localStorage.getItem('SOLANAWALLETADDRESS') ? localStorage.getItem('SOLANAWALLETADDRESS') : this.$cookie.get('solanaWalletAddress')
    // const solanaWalletType = localStorage.getItem('SOLANAWALLETTYPE') ? localStorage.getItem('SOLANAWALLETTYPE') : this.$cookie.get('solanaWalletType')
    // if (solanaWalletAddress && solanaWalletType) {
    //   this.$store.dispatch('setSolanaWalletType', solanaWalletType)
    //   this.$store.dispatch('setSolanaWalletAddress', solanaWalletAddress)
    // }

    // 자동로그인 이슈로 쿠키를 세션으로 변경
    const walletAddress = sessionStorage.getItem('WALLETADDRESS')
    const walletType = sessionStorage.getItem('WALLETTYPE')
    if (walletAddress && walletType) {
      this.$store.dispatch('setWalletType', walletType)
      this.$store.dispatch('setWalletAddress', walletAddress)
    }

    const Uuid = sessionStorage.getItem('UUID')
    if (walletAddress && walletType) {
      this.$store.dispatch('setUuid', Uuid)
    }

    const solanaWalletAddress = sessionStorage.getItem('SOLANAWALLETADDRESS')
    const solanaWalletType = sessionStorage.getItem('SOLANAWALLETTYPE')
    if (solanaWalletAddress && solanaWalletType) {
      this.$store.dispatch('setSolanaWalletType', solanaWalletType)
      this.$store.dispatch('setSolanaWalletAddress', solanaWalletAddress)
    }

    // 화면 리사이즈 이벤트 핸들러
    window.addEventListener("resize", this.resizeEventHandler)
    if (document.body.offsetWidth < 1024) {
      this.smallSize = true
    }
  },
  destroy: function () {
    window.removeEventListener("resize", this.resizeEventHandler)
  },
  mounted: function () {
	// 개별 페이지에 맞는 css 로드
	this.$loadStyle('/_css/main_idn.css'),

    // "Go to Top" 버튼 클릭 시 페이지 상단으로 이동
    document.querySelector('#gotop').addEventListener('click', (event) => {
        event.preventDefault(); // 기본 동작(페이지 이동) 방지
        window.scrollTo({ top: 0, behavior: 'smooth' }); // 부드럽게 스크롤
    });

    AOS.init()

    this.$nextTick(() => {
      this.mv(); 
	  this.sec01();
      this.sec02();
      this.sec03();
      this.sec05();
    })

    this.animateVisual()
  },
  setup () {
    const { locale } = useI18n({ useScope: 'global' })

    return {
      locale,
    }
  },
  methods: {
    //////////////////////////////////////////////////////////////////////////////////
    //                                script code                                   //
    //////////////////////////////////////////////////////////////////////////////////

	mv(){
	setTimeout(function(){
		$('#main_visual').addClass('visual_next1');
	},2400);
	setTimeout(function(){
		$('#main_visual').addClass('visual_next2');
	},3000);
	setTimeout(function(){
		$('#main_visual').addClass('visual_next3');
	},5000);




	/*
	const video = document.getElementById('mv_video');
	video.playbackRate = 0.9;*/
	/*
	var mvtext = gsap.timeline({
		scrollTrigger: {
			trigger: "#main_visual",
			start: "top top",
			end: "250% center",
			pin: true,
			scrub: 2,
			//markers: true,
		},
	});
	mvtext.to("#main_visual .img_text", {
		scale: 1,
		y: 0,
		opacity:1,
		duration: 1,
	});
	mvtext.to("#main_visual .img_sym", {
		opacity:1,
		scale: 1,
		filter: "grayscale(0)",
		duration: 1,
	});*/
	},
    sec01() {
      // Swiper 초기화
      const swiper = new Swiper(".story_swiper .mySwiper", {
        spaceBetween: 0,
        speed: 1500,
        effect: "fade",
        loop: true,
        autoplay: {
          delay: 5050, // 자동 재생 간격 (5.05초)
          disableOnInteraction: false, // 사용자 조작 후에도 자동 재생 유지
        },
        navigation: {
          nextEl: ".story-next",
          prevEl: ".story-prev",
        },
        lazy: {
          loadPrevNext: true, // 이전/다음 이미지를 미리 로드
        },
        on: {
          init: function () {
            console.log('Swiper initialized');
            // autoplay 강제 시작
            if (this.autoplay) {
              this.autoplay.start();
            } else {
              console.error('Autoplay is undefined in init');
            }
          },
          slideChange: function () {
            updateActiveClass(this.realIndex)
          },
        },
      });

      if (swiper.autoplay) {
        swiper.autoplay.start();
      } else {
        console.error('Autoplay is undefined after initialization');
      }


      // 내비게이션 버튼 수동 테스트
      document.querySelector('.story-next').addEventListener('click', () => {
        swiper.slideNext();
      });
      document.querySelector('.story-prev').addEventListener('click', () => {

        swiper.slidePrev();
      });

      // 슬라이드 인덱스에 따라 클래스 변경
      function updateActiveClass(index) {
        var $swiperPage = $('.sec01 .swiper_page');
        if (!$swiperPage.length) return;
        if (index === 0) {
          $swiperPage.removeClass('active_item1 active_item2 swiper-slide-visible');
          setTimeout(function(){
            $swiperPage.addClass('active_item1');
          },50)
          
        } else if (index === 1) {
          $swiperPage.removeClass('active_item1');
          $swiperPage.addClass('active_item2');
        }

        $('.swiper_page .page1').on('click' , function(){
          swiper.slideToLoop(0)
        });
        $('.swiper_page .page2').on('click' , function(){
          swiper.slideToLoop(1)
        });
      }

      this.currentPage = swiper.realIndex
      console.log(swiper.realIndex)
      // 초기 슬라이드 설정
      updateActiveClass(swiper.realIndex);
    },
    sec02() {
      $(window).on('scroll', () => {
        const sec02 = $('.sec02');
        const img = $('.sec02 .img');

        const sec02Top = sec02.offset()?.top;
        const sec02Bottom = sec02Top + sec02.outerHeight() - 100;
        const scrollTop = $(window).scrollTop();

        if (scrollTop >= sec02Top && scrollTop <= sec02Bottom) {
          img.addClass('fixed');
        } else {
          img.removeClass('fixed');
        }
      });
    },

    sec03() {
      // GSAP ScrollTrigger 설정
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.sec03',
          start: "top top",
		  end: "65% 90%",
          scrub: 2,
          id: 'scrub-opacity',
          toggleClass: 'active',
        },
      });

      tl1.to('.sec03 .bg2', {
        opacity: 1,
        duration: 1,
      });

      $(window).scroll(() => {
        const top1 = $('.sec03').offset()?.top;
        const wst = $(window).scrollTop();
        const bg2 = $('.sec03 .bg.bg2');
        const st = wst - top1;
        const scale = 1 + st * 0.0003;
        if (wst > top1) {
          $('.sec03').addClass('bg_active');
          bg2.css('top', st).css('transform', `scale(${scale})`);
        } else {
          $('.sec03').removeClass('bg_active');
        }
      });

      $('.sec03 .qbox > div').click(function () {
        $(this).addClass('active');
        $(this).find('span').hide();
      });

      // Swiper 초기화
      new Swiper('.sec03 .mySwiper', {
        slidesPerView: 1,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.sw-next',
          prevEl: '.sw-prev',
        },
      });
    },

    sec05() {
      $('.sec05 .faq_list li').on('click', function () {
        $('.sec05 .faq_list li').removeClass('on');
        $(this).addClass('on');
        const num = $(this).attr('data-num');

        $('.answer_list').show();
        $('.answer_list > div').hide();
        $(`.answer_list > div[data-num="${num}"]`).show();
      });

      $('.sec05 .answer_list > div button').on('click', function () {
        $('.sec05 .faq_list li').removeClass('on');
        $('.sec05 .answer_list').hide();
      });

      $('#faq_Modal button').on('click', function () {
        $('.sec05 .faq_list li').removeClass('on');
      });
    },

    animateVisual() {
      setTimeout(() => {
        this.mainVisualClass.push('visual_next1')
      }, 2400);
      setTimeout(() => {
        this.mainVisualClass.push('visual_next2')
      }, 3000);
      setTimeout(() => {
        this.mainVisualClass.push('visual_next3')
      }, 5000);
    },

  },
})
</script>
