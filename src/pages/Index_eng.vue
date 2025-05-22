<template>
<div class="page_main">
  <div id="Wrap">

	<!-- 메인 비주얼 -->
	<div id="main_visual" :key="resetKey">

		<div class="visual_step1">
			<!-- <video id="mv_video" autoplay loop muted playsinline ><source src="_img/main/mv_video1.mp4" type="video/mp4"></video> -->
			<img src="_img/main/mv_video1.webp" alt="" />
		</div>

		<div class="visual_step2">
			<div class="visual_contents">
				<h2>
					<p class="sym"><img class="img_sym" src="_img/comm/symbol.png" alt="" /></p>
					<img class="img_text" src="_img/main/mv_text.png" alt="">
				</h2>
				<p class="desc">Adventurers resisting an unjust society.</p>
				<div class="sns">
					<a href="https://blog.naver.com/punkvism" target="_blank"><img src="_img/comm/icon_blog.png" alt="blog go" /></a>
					<a href="https://punkvism.medium.com/" target="_blank"><img src="_img/comm/icon_medium.png" alt="medium go" /></a>
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
					<p class="title">The World of Kongz: The Fading Light and Silence</p>
				</div>
				<div class="page2">
					<p class="bar"><span></span></p>
					<p class="title">Fantastic vegetation and Magical Land</p>
				</div>
			</div>

			<div class="story_info story_info1">
				<dl class="story_info">
					<dt>
						A tale of a journey braving rough seas and hardships to finally reach paradise, embarking on an adventure toward a new era and a new land.
					</dt>
					<dd>
						<div class="story_box">
							<p class="title"><i class="xi-check-min"></i>Chapter.1 The world of Kongz, losing its light.</p>
							<p class="desc">
								The once free-spirited and lively world of Kongz gradually lost its light. Bound by unfair rules and an imposed reality, the Kongz began to lose their laughter and dreams.
								<br class="pc_only_lg"/>What remained was a silent world where everyone conformed, no longer daring to dream of something better. It was no longer the world of Kongz.
							</p>

							<p class="title mt30"><i class="xi-check-min"></i>Chapter.2 The Beginning of Change: A Single Adventurer</p>
							<p class="desc">
								Every change begins with a single act of courage. One Kongz refused to accept an unjust system,
								<br class="pc_only_lg" />and embarked on a turbulent and challenging journey in search of a freer, new world.
								<br class="pc_only_lg" />Undeterred by the uncertainty ahead, they ultimately reached a lush green paradise beyond anyone’s imagination—
								<br class="pc_only_lg" />a place filled with freedom and hope, untouched by unfair systems.
							</p>

							<p class="title mt30"><i class="xi-check-min"></i>Chapter.3 A New Hope for All   </p>
							<p class="desc">
								Returning from the paradise, he called out to the Kongz, "The world we dreamed of exists. We can reach it too!"
								<br class="pc_only_lg" />But the weary and disheartened Kongz hesitated.
								<br class="pc_only_lg" />Amid their fear and exhaustion, he spoke firmly, "We must rise again for the values we believe in. It is up to us to change the world."
								<br class="pc_only_lg" />His words reignited suppressed hope and courage, and the Kongz united once more, embarking on a journey toward a new world.
							</p>

							<p class="title mt30"><i class="xi-check-min"></i>Chapter.4 The Journey in Search of Freedom</p>
								<p class="desc">
									The journey of the Kongz was not merely an adventure; it was a monumental step toward freedom and solidarity against an unjust world. Together, they moved forward, not just to reclaim their laughter but also to rediscover the spirit of freedom and resistance they had lost. And this journey would not end with the discovery of paradise—it would become the first step in building a new world.
								</p>
						</div>
					</dd>
				</dl>
				<div class="more_view">
					<button type="button"><span>Open</span></button>
				</div>
			</div>

			<div class="story_info story_info2">
				<dl class="story_info">
					<dt>
						The Tree of Life, which governs the harmony of all things in the world, undergoes a cycle of death and rebirth every 1,000 years, leaving behind a new seed.
					</dt>
					<dd>
						<div class="story_box">
							<p class="title"><i class="xi-check-min"></i>Chapter.1 The Tree of Life and the Secret of Paradise  </p>
							<p class="desc">
								The Tree of Life, which maintains the balance of the world, leaves behind a new seed every 1,000 years before fading away, and this seed becomes the foundation that sustains the world once more.
								<br class="pc_only_lg" />Currently, the seed is hidden deep within a place called Tormia, the heart of paradise.
								<br class="pc_only_lg" />This is why Tormia is known as a paradise and why its secret must remain undiscovered. The secret was known only to Tormia's highest elder, Briton.
								<br class="pc_only_lg" />Guarding the sanctity of the Tree of Life and the peace of paradise, this secret served as the final line of defense for Tormia.
							</p>

							<p class="title mt30"><i class="xi-check-min"></i>Chapter.2 Threats and Infiltration from Outside Paradise</p>
							<p class="desc">
								Every change begins with a single act of defiance. One Kongz rejected an unjust system.
								<br class="pc_only_lg" />However, no secret lasts forever. When the secret of paradise was exposed to the desolate kingdoms beyond, Tormia became a target.
								<br class="pc_only_lg" />On a pitch-black night, the Tormia Expedition Force, comprised of elite agents from each kingdom, was formed under the leadership of Lycan from the Kingdom of Rex.
								<br class="pc_only_lg" />Under the cover of darkness, they infiltrated deep into Tormia, successfully carrying out their mission. For the first time, the once-peaceful paradise began to waver under the threat of the outside world.
							</p>

							<p class="title mt30"><i class="xi-check-min"></i>Chapter.3 The Collapse of Paradise and Internal Turmoil </p>
							<p class="desc">
								After the expedition’s infiltration, paradise descended into chaos. For the first time, disease spread in the once-untouched land, and the once-abundant nature began to wither.
								<br class="pc_only_lg" />The 12 tribes of Tormia turned on each other, blaming one another for the calamity. In particular, the magical Komodo Dragon tribe became the primary target of accusations,
								<br class="pc_only_lg" />and internal conflict escalated to the brink of explosion. The golden Komodo Dragon, fitri, tried to reverse the situation using their magic,
								<br class="pc_only_lg" />but the sudden appearance of the brilliant monkey, Alya, only heightened tensions, pushing the conflict in paradise to its peak.
							</p>

							<p class="title mt30"><i class="xi-check-min"></i>Chapter.4 Elder Briton’s Council and Countermeasures</p>
							<p class="desc">
								The Supreme Elder, Briton the Rat, convened an emergency meeting with the representatives of all tribes. He shared evidence of the intrusion into paradise and the missing treasure,
								<br class="pc_only_lg" />but carefully withheld the secret of the Tree of Life's seed.
								<br class="pc_only_lg" />The council concluded with a resolution to establish departments dedicated to defending paradise from external threats and organizing efforts to quell internal unrest.
								<br class="pc_only_lg" />Additionally, a team was assembled to recover the lost treasure, aiming to restore stability and peace to paradise.
							</p>

							<p class="title mt30"><i class="xi-check-min"></i>Chapter.5 fitri and Alya’s New Journey</p>
							<p class="desc">
								Pietri and Allya, who stood out amidst the internal chaos, were each entrusted with critical missions. Pietri was tasked with restoring order and stabilizing paradise internally,
								<br  class="pc_only_lg" />while Allya ventured beyond its borders to recover the lost treasure. Their journeys are more than mere problem-solving endeavors—they mark pivotal steps that will determine the fate of Tormia.
							</p>
						</div>
					</dd>
				</dl>
				<div class="more_view">
					<button type="button"><span>Open</span></button>
				</div>
			</div>

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
						<dt><p data-aos class="text-motion"><span>Adventurers resisting an unjust society.</span></p></dt>
						<dd><p data-aos class="text-motion"><span>A mission inspired by the “cypherpunk" spirit of Bitcoin's creator, Satoshi Nakamoto.</span></p></dd>
					</dl>
				</div>
				<div class="col-lg-6" >
					<div class="thumb" data-aos="fade-up">
					<div><p data-aos class="text-motion2"><span>Punkyvist</span></p></div>
					<p><img src="_img/main/sec01_img5.png" class="wp100" alt="" /></p>
				</div>
				<dl>
					<dt><p data-aos class="text-motion"><span>Those who carry out the vision of Punkvism.</span></p></dt>
					<dd><p data-aos class="text-motion"><span>It refers to an adventurer who resists an unreasonable society and a person who strives for victory and endless progress.</span></p></dd>
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
				<div><strong>Virtual Game Token Ecosystem</strong></div>
				<div class="dot"><span></span><span></span><span></span></div>
				<div data-aos="fade-down"><p>Metaverse<br /> Job Creation</p></div>
			</li>
			<li data-aos="flip-down">
				<div><strong>Membership</strong></div>
				<div class="dot"><span></span><span></span><span></span></div>
				<div data-aos="fade-down"><p>Platform<br /> Business</p></div>
			</li>
			<li data-aos="flip-down">
				<div><strong>RWA</strong></div>
				<div class="dot"><span></span><span></span><span></span></div>
				<div data-aos="fade-down"><p>RWA <br>Launchpad</p></div>
			</li>
			<li data-aos="flip-down">
				<div><strong>IP Story</strong></div>
				<div class="dot"><span></span><span></span><span></span></div>
				<div data-aos="fade-down"><p>Comics<br /> Universe</p></div>
			</li>
		</ul>

		<ul class="list-unstyled list_b">
			<li>
				<div data-aos="flip-left" data-aos-delay="200"><strong>Gaming Token Ecosystem</strong></div>
				<div data-aos="fade-right" data-aos-delay="300">
					<div class="arrow arrow1"><p><i class="xi-arrow-right"></i></p></div>
						<p>NFT games, casual games, SnowChat, 3D NFTs</p>
					<div class="arrow arrow2"><p><i class="xi-arrow-right"></i></p></div>
				</div>
				<div data-aos="fade-right" data-aos-delay="400"><p>Metaverse Job Creation</p></div>
			</li>
			<li>
				<div data-aos="flip-left" data-aos-delay="200"><strong>Membership</strong></div>
				<div data-aos="fade-right" data-aos-delay="300">
					<div class="arrow arrow1"><p><i class="xi-arrow-right"></i></p></div>
					<p>Information services, discounts, holder business partnerships</p>
					<div class="arrow arrow2"><p><i class="xi-arrow-right"></i></p></div>
				</div>
				<div data-aos="fade-right" data-aos-delay="400"><p>Platform Business</p></div>
			</li>
			<li>
				<div data-aos="flip-left" data-aos-delay="200"><strong>RWA </strong></div>
				<div data-aos="fade-right" data-aos-delay="300">
					<div class="arrow arrow1"><p><i class="xi-arrow-right"></i></p></div>
					<p>Hospitals, resorts, Sun Hall new city development, resource mining, Movie</p>
					<div class="arrow arrow2"><p><i class="xi-arrow-right"></i></p></div>
				</div>
				<div data-aos="fade-right" data-aos-delay="400"><p>RWA Launchpad</p></div>
			</li>
			<li>
				<div data-aos="flip-left" data-aos-delay="200"><strong>Story <br>(Tormia, Punkvism)</strong></div>
				<div data-aos="fade-right" data-aos-delay="300">
					<div class="arrow arrow1"><p><i class="xi-arrow-right"></i></p></div>
					<p>Novel, Webtoon, IP Business</p>
					<div class="arrow arrow2"><p><i class="xi-arrow-right"></i></p></div>
				</div>
				<div data-aos="fade-right" data-aos-delay="400"><p>Snowseed Comics</p></div>
			</li>
		</ul>

		<div class="multiple_holder_benefits mt40">
			<a href="#." data-toggle="modal" data-target="#multiple_holder_benefits" class="more_magic on">Multiple holder benefits<img src="_img/main/sec03_arrow.png" alt=""></a>
		</div>
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
				<p class="tit">Punkykongz Ecosystem <img src="_img/main/sec03_ci.png" alt=""></p>

				<ul class="list-unstyled list1">
					<li>The 99 Genesis NFTs are set to be revealed later as the <strong>"Gods" (tentatively named Super Punky) of the Punky Kongz universe.</strong></li>
					<li>
						Holders of Punkykongz NFTs, representing the <strong>Punkvism Universe,</strong> will receive prioritized benefits.
						<p>
							<span>mining</span>
							<span>NFT games</span>
							<span>memberships</span>
							and more!
						</p>
					</li>
				</ul>
			</div>

			<div class="qbox">
				<div>
					<span>?</span>
					<p>“The tiger is coming down!!<br /> And it's huge!”</p>
				</div>
				<div>
					<span>??</span>
					<p>“Whatever you're imagining,<br /> it's beyond that!!" ”</p>
				</div>
				<div>
					<span>???</span>
					<p>“This is just the beginning...<br /> something big is coming."</p>
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
				<p class="txt1">Common Denominators of the Ecosystems</p>
				<p class="txt2">Membership · Story · Gaming Tokens</p>
				<p class="txt3">
					The collaboration between the two ecosystems will go beyond mere revenue sharing, contributing to content development and ecosystem expansion.
				</p>
			</div>

			<div class="right">
				<p class="tit1">Common Denominators Between the Punkykongz Ecosystem and the SnowSeed Tormia Ecosystem</p>

				<ul class="list-unstyled">
					<li>
						<span class="eng">01</span>
						<div>
							<p class="tit2">Virtual Gaming Token Ecosystem</p>

							<div class="tag">
								<span>Token mining</span>
								<span>Utilization of NFT games</span>
								<span>Integration with SnowChat</span>
								<span>Use of 3D virtual rooms</span>
								<span>Integration with casual games </span>
							</div>
						</div>
					</li>

					<li>
						<span class="eng">02</span>
						<p class="tit2">Membership</p>
					</li>

					<li>
						<span class="eng">03</span>
						<div>
							<p class="tit2">
								Story and IP Business
								<span>(The stories of the Punkykongz and Tormia ecosystems will be shared.)</span>
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<div class="box3">
			<p class="tit">Snowseed's Tormia Ecosystem (RWA)<img src="_img/main/sec03_ci2.png" alt=""></p>
			<ul class="list-unstyled list1">
				<li>
					The NFTs within Snowseed's Tormia ecosystem will consist exclusively of <strong>RWA NFTs,</strong> renowned for their exceptional profitability and business potential.</li>
				<li>Snowseed is a legally established corporation in Indonesia, operating in full compliance with local regulations.</li>
				<li>Our goal is to become a global leader in RWA NFTs.</li>
			</ul>
			<div class="mt20 pl0-md" style="margin: 0 auto; padding-left:420px;">
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

					<p>RWA Consortium Banten New City Development</p>
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
				<dt>Genesis: Super Punky, 'RWA' Ecosystem Punky Kongz</dt>
				<dd>
					Snowseed's Genesis NFT is a rare item with only 99 copies, and is the god of the Punky Kongz ecosystem.
					<br />With Genesis, you can enjoy the most benefits of all the platform's benefits and get a chance to ride the wave of growth.
					<br />Maximum rarity! With Genesis, you become the hero of the ecosystem in your own right.
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
							<p class="name"><small>CEO</small>Hwang Hyun Ki</p>
							<p class="desc">"We aim to become the leading company that realizes the shared values of WEB 3.0 with a spirit of coexistence."</p>
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
							<p class="desc">"With a spirit of coexistence, I aspire to lead the global market in RWA-based NFTs."</p>
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
								"As a founding member who has led the NFT community, creating a sensation at the forefront, I want to show how RWA NFTs will become the mainstream in the global market."
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
								"In the currently booming STO market, I aim to build a successful IT business based on integrated technologies and services that encompass both online and offline spaces."
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
							<p class="name"><small>CFO</small>Kim Jeong Joo</p>
							<p class="desc">
								"I intend to actively leverage my success stories and experiences in the corporate M&amp;A market to revitalize the stagnant NFT market."
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
							<p class="name"><small>CIO/CRO</small>Cho Kyu Min </p>
							<p class="desc">
								"Beyond the journey that started at the heart of NFT innovation, I will now prove the potential of NFTs on the global stage."
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
							<p class="name"><small>CBO/RWA TF manager</small>Park Jeong Ho</p>
							<p class="desc">
								"We will break down the boundaries between digital assets and real-world assets, becoming a leading platform that creates new value in the global market."
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
						<img src="_img/main/sec04_img9.png" alt="">
						<div>
							<p class="name">Adrien Philippe Antoine Paul Long</p>
							<p class="desc">
								"I carry the values of decentralization and liberty. Our Web3 journey is the road for freedom. This is our revolution!"
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
						<img src="_img/main/sec04_img10.png" alt="">
						<div>
							<p class="name"><small>CPO</small>Katrina Park</p>
							<p class="desc">
								"Based on the PunkyKongz of RWA NFT, we aim to create innovative value for digital assets and lead the new standard of the global digital economy."
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
						<img src="_img/main/sec04_img11.png" alt="">
						<div>
							<p class="name"><small>CSO</small>Choi Chun</p>
							<p class="desc">
								He is a producer with 10 years of experience in Korean drama, a financial management expert, and has blockchain experience, including roadshows, multi-wallets, P2E games, and NFT launches.
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
						<img src="_img/main/sec04_img12.png" alt="">
						<div>
							<p class="name"><small>ADVISOR</small>Akshay</p>
							<p class="desc">
								He has built extensive experience by collaborating with global companies in various fields, including business development, process mining, and blockchain.
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
						<img src="_img/main/sec04_img13.png" alt="">
						<div>
							<p class="name"><small>Chief Engineer </small>Ahn Youngdae</p>
							<p class="desc">
								After majoring in computer engineering, he carried out IT and blockchain projects in Japan and Korea, and has been involved in various blockchain ventures, including launchpads, metagalleries, and games.
							</p>
						</div>
					</div>
				</div>
			</div>
		</li>
		<!-- li>
			<div class="business_card">
				<div class="inner">
					<div class="front"></div>
					<div class="back">
						<img src="_img/main/sec04_img8.png" alt="">
						<div>
							<p class="name"><small>Blockchain Consultant</small>David HP Lee</p>
							<p class="desc">
								"Looking forward to what the PK team will do next. WAGMI!"
							</p>
							<a class="more_magic" data-target="#team_profile_8" data-toggle="modal">View Profile <img src="_img/main/sec03_arrow.png" alt=""></a>
						</div>
					</div>
				</div>
			</div>
		</li -->
	</ul>

	<!-- <div class="img"><img src="_img/main/sec04_motion.png" alt=""></div> -->
</section>
<!-- //sec04 --> 

<!-- sec06 -->
<section id="sec06" class="sec06 ">
	<div class="container">
		<h3 class="section_title" data-aos><span></span><strong>Partner</strong><span></span></h3>

		<h4>RWA Consortium Partner </h4>
		<ul class="rwa_partner">
			<li>
				<div class="box">
					<h5>Securities</h5>
					<div>
						<p><img src="_img/main/sec06_tobereleased.png" /></p>
						<p><img src="_img/main/sec06_tobereleased.png" /></p>
					</div>
				</div>
			</li>
			<li>
				<div class="box">
					<h5>Asset Management</h5>
					<div>
						<p><img src="_img/main/sec06_tobereleased.png" /></p>
						<p><img src="_img/main/sec06_tobereleased.png" /></p>
					</div>
				</div>
			</li>
			<li>
				<div class="box">
					<h5>Blockchain</h5>
					<div>
						<p><img src="_img/main/sec06_RWA_logo3_1.png" class="partner" /></p>
						<p><img src="_img/main/sec06_RWA_logo3_2.png" class="partner" /></p>
					</div>
				</div>
			</li>
			<li>
				<div class="box">
					<h5>Accounting Firm</h5>
					<div>
						<p><img src="_img/main/sec06_RWA_logo2.png" class="partner" /></p>
						<p><img src="_img/main/sec06_RWA_logo3.png" class="partner" /></p>
						<p><img src="_img/main/sec06_RWA_logo5.png" class="partner" /></p>
					</div>
				</div>
			</li>
			<li>
				<div class="box">
					<h5>Trust Company</h5>
					<div>
						<p><img src="_img/main/sec06_tobereleased.png" /></p>
						<p><img src="_img/main/sec06_tobereleased.png" /></p>
					</div>
				</div>
			</li>
			<li>
				<div class="box">
					<h5>Capital</h5>
					<div>
						<p><img src="_img/main/sec06_RWA_logo4.png" class="partner" /></p>
						<p><img src="_img/main/sec06_tobereleased.png" /></p>
					</div>
				</div>
			</li>
			<li>
				<div class="box">
					<h5>Corporation</h5>
					<div>
						<p><img src="_img/main/sec06_RWA_logo1.png" class="partner" /></p>
						<p><img src="_img/main/sec06_tobereleased.png" /></p>
						<p><img src="_img/main/sec06_tobereleased.png" /></p>
					</div>
				</div>
			</li>
			<li>
				<div class="box">
					<h5>Branding</h5>
					<div>
						<p><img src="_img/main/sec06_RWA_logo8_1.png" class="partner" /></p>
						<p><img src="_img/main/sec06_RWA_logo8_2.png" class="partner" /></p>
					</div>
				</div>
			</li>
		</ul>

		<div class="law_box full_bg">
			<h4>RWA Law Firm </h4>
			<p>
				The RWA of Punkbism is issued after thorough review and professional legal consultation with a top-tier law firm.
				<br />To ensure the highest level of security and reliability based on clear legal grounds, the best legal experts are involved in the process.
			</p>
			<ul>
				<li><img src="_img/main/sec06_law_logo1.png" alt=""></li>
				<li><img src="_img/main/sec06_law_logo2.png" alt=""></li>
			</ul>	
		</div>

		<h4 class="mt80">Business Partner </h4>
		<ul class="busniess_partner">
			<!-- <li><p class="box"><img src="_img/main/sec06_logo1.png" alt=""></p></li> -->
			<li><p class="box"><img src="_img/main/sec06_logo2.png" alt=""></p></li>
			<li><p class="box"><img src="_img/main/sec06_logo3.png" alt=""></p></li>
			<li><p class="box"><img src="_img/main/sec06_logo4.png" alt=""></p></li>
			<!-- <li><p class="box"><img src="_img/main/sec06_logo5.png" alt=""></p></li> -->
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
			<li><p class="box"><img src="_img/main/sec06_logo16.png" alt=""></p></li>
			<li><p class="box"><img src="_img/main/sec06_logo17.png" alt=""></p></li>
			<li><p class="box"><img src="_img/main/sec06_logo18.png" alt=""></p></li>
			<li><p class="box"><img src="_img/main/sec06_logo19.png" alt=""></p></li>
			<li><p class="box"><img src="_img/main/sec06_logo20.png" alt=""></p></li>
			<li><p class="box"><img src="_img/main/sec06_logo21.png" alt=""></p></li>
			<li><p class="box"><img src="_img/main/sec06_logo22.png" alt=""></p></li>
			<li><p class="box"><img src="_img/main/sec06_logo23.png" alt=""></p></li>
			<li><p class="box"><img src="_img/main/sec06_logo24.png" alt=""></p></li>
			<li><p class="box"><img src="_img/main/sec06_logo25.png" alt=""></p></li>
			<li><p class="box"><img src="_img/main/sec06_logo26.png" alt=""></p></li>
			<li><p class="box"><img src="_img/main/sec06_logo27.png" alt=""></p></li>
			<li><p class="box"><img src="_img/main/sec06_logo28.png" alt=""></p></li>
			<li><p class="box"><img src="_img/main/sec06_logo29.png" alt=""></p></li>
			<!-- <li><p class="box"><img src="_img/main/sec06_tobereleased2.png" alt=""></p></li>
			<li><p class="box"><img src="_img/main/sec06_tobereleased2.png" alt=""></p></li>
			<li><p class="box"><img src="_img/main/sec06_tobereleased2.png" alt=""></p></li>
			<li><p class="box"><img src="_img/main/sec06_tobereleased2.png" alt=""></p></li>
			<li><p class="box"><img src="_img/main/sec06_tobereleased2.png" alt=""></p></li> -->
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
						<p>What is Punkykongz (NFT)?</p>
					</a>
				</li>
				<li data-num="faq_2">
					<a href="#." data-toggle="modal" data-target="#faq_Modal">
						<span class="num">02</span>
						<p>What is the philosophy of Punkykongz and Punkvism?</p>
					</a>
				</li>
				<li data-num="faq_3">
					<a href="#." data-toggle="modal" data-target="#faq_Modal">
						<span class="num">03</span>
						<p>How Can I Purchase Punkykongz NFT?</p>
					</a>
				</li>
				<li data-num="faq_4">
					<a href="#." data-toggle="modal" data-target="#faq_Modal">
						<span class="num">04</span>
						<p>What Are the Benefits of Owning a Punkykongz NFT?</p>
					</a>
				</li>
				<li data-num="faq_5">
					<a href="#." data-toggle="modal" data-target="#faq_Modal">
						<span class="num">05</span>
						<p>How Does the Punkykongz Gaming Ecosystem Operate?</p>
					</a>
				</li>
			</ul>

			<div class="answer_list answer_list-pc">
				<div data-num="faq_1">
					<div class="list_q">
						<span>Q</span>
						<p>What is Punkykongz (NFT)?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>Punkykongz is an innovative NFT project launched on the Solana chain by the Punkvism team. It embodies the spirit of Web3 and serves as a versatile digital asset that can be utilized across various games and digital ecosystems. Created as a second project by a co-founder of Metakongz, Punkykongz offers numerous benefits and participation opportunities to its holders.</p>
					</div>
				</div>

				<div data-num="faq_2">
					<div class="list_q">
						<span>Q</span>
						<p>What is the philosophy of Punkykongz and Punkvism?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>
							Punkvism is driven by the mission of being "adventurers resisting an unjust society," which reflects the spirit of the PunkyVist community. The co-founders of Punkvism drew inspiration from the cypherpunk ethos of Bitcoin's creator, Satoshi Nakamoto, to initiate their Web3.0 journey. Punkvism strives to carry on this ethos, aiming to create a more transparent and equitable digital world.
						</p>
					</div>
				</div>

				<div data-num="faq_3">
					<div class="list_q">
						<span>Q</span>
						<p>How Can I Purchase Punkykongz NFT?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>
							All Punky Kongz NFTs were airdropped for free and can be purchased on MagicEden, the world's largest Solana exchange.
						</p>
					</div>
				</div>

				<div data-num="faq_4">
					<div class="list_q">
						<span>Q</span>
						<p>What Are the Benefits of Owning a Punkykongz NFT?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<div>
							<p>As a Punkykongz NFT holder, you can enjoy the following benefits :</p>
							<ul class="list-unstyled">
								<li>
									<b>Game Token Mining</b>
									<p> Earn daily game tokens within the Punkykongz ecosystem, which can be utilized in various games and ecosystem activities.</p>
								</li>
								<li>
									<b>Membership Benefits</b>
									<p>Enjoy discounts and exclusive perks, with expanded domestic and international membership benefits offering even more opportunities.</p>
								</li>
								<li>
									<b>RWA Project Participation</b>
									<p>Gain access to participate in global RWA NFT projects, including Indonesia-based initiatives, through the Snowseed RWA platform.</p>
								</li>
								<li>
									<b>Story-Based Content</b>
									<p>Enjoy priority access and exclusive benefits for upcoming IP-based content such as novels, webtoons, and more.</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div data-num="faq_5">
					<div class="list_q">
						<span>Q</span>
						<p>How Does the Punkykongz Gaming Ecosystem Operate?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<div>
							<p>Punkykongz collaborates with various games to build a gaming ecosystem centered on NFTs. To address the instability of traditional P2E games, the project plans to launch games focused on NFTs instead of coins.</p>
							<ul class="list-unstyled">
								<li>
									<b>Role of Tokens :</b>
									<p>The game tokens within the Punkykongz ecosystem can be cashed out but are primarily used for purchasing NFTs. Players can acquire additional NFTs with tokens mined in-game, providing access to a wider variety of games and content.</p>
								</li>
								<li>
									<b>Game Development and Collaboration :</b>
									<p>Various genres, including RPGs in the style of Lineage and casual games, will be added to the Punkykongz ecosystem.</p>
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
						<p>What Is the Roadmap for the Punkykongz Project?</p>
					</a>
				</li>
				<li data-num="faq_7">
					<a href="#." data-toggle="modal" data-target="#faq_Modal">
						<span class="num">07</span>
						<p>Why Use Punkykongz NFTs on the Solana Chain?</p>
					</a>
				</li>
				<li data-num="faq_8">
					<a href="#." data-toggle="modal" data-target="#faq_Modal">
						<span class="num">08</span>
						<p>Are There Any Precautions When Purchasing NFTs? </p>
					</a>
				</li>
				<li data-num="faq_9">
					<a href="#." data-toggle="modal" data-target="#faq_Modal">
						<span class="num">09</span>
						<p>What Is the Relationship Between the Punkykongz Project and Punkvism? </p>
					</a>
				</li>
				<li data-num="faq_10">
					<a href="#." data-toggle="modal" data-target="#faq_Modal">
						<span class="num">10</span>
						<p>How Can I Join the Punkykongz Community? </p>
					</a>
				</li>
			</ul>

			<div class="answer_list answer_list-pc mt45">
				<div data-num="faq_6">
					<div class="list_q">
						<span>Q</span>
						<p>What Is the Roadmap for the Punkykongz Project?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<div>
							<p>The key roadmap milestones for the Punkykongz project are as follows :</p>
							<ul class="list-unstyled">
								<li>
									<b>Expansion of the Gaming Token Ecosystem :</b>
									<p>Attract new users through platforms like SnowChat and 3D virtual rooms while maximizing token scalability through various games.</p>
								</li>
								<li>
									<b>Strengthening the Membership Program :</b>
									<p>Enhance domestic and international membership benefits, providing holders with diverse discounts and perks.</p>
								</li>
								<li>
									<b>Progress in RWA Projects :</b>
									<p>We are building a powerful RWA consortium and, starting with Indonesia, will revolutionize the world through the fusion of RWA and NFTs</p>
								</li>
								<li>
									<b>IP and Story Development :</b>
									<p>Extend the Punkykongz universe through various media such as novels and webtoons, increasing the value of its intellectual property.</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div data-num="faq_7">
					<div class="list_q">
						<span>Q</span>
						<p>Why Use Punkykongz NFTs on the Solana Chain?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>
							The Solana chain is ideal for trading digital assets like NFTs due to its fast transaction speeds and low fees. Additionally, the Phantom wallet, which operates on the Solana chain, is user-friendly, making it easy for Punkykongz holders to manage their NFTs.
						</p>
					</div>
				</div>

				<div data-num="faq_8">
					<div class="list_q">
						<span>Q</span>
						<p>Are There Any Precautions When Purchasing NFTs?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>
							When purchasing Punky Kongz NFTs, please make sure to transact on the official marketplace or a certified exchange such as Magic Eden. Always check the official social media channels for the latest information to avoid fraudulent sites or fake NFT transactions.
						</p>
					</div>
				</div>

				<div data-num="faq_9">
					<div class="list_q">
						<span>Q</span>
						<p>What Is the Relationship Between the Punkykongz Project and Punkvism?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>
							The Punkykongz project is a Web3-based NFT initiative led by Punkvism. Inspired by the cypherpunk spirit of Bitcoin, Punkvism aims to maximize the potential of the Web3 ecosystem and provide users worldwide with new experiences through transparent and innovative blockchain projects.
						</p>
					</div>
				</div>

				<div data-num="faq_10">
					<div class="list_q">
						<span>Q</span>
						<p>How Can I Join the Punkykongz Community?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>
							To join the Punkykongz community, simply follow the official Discord server, Twitter, or Telegram channels. These platforms will allow you to stay updated on the latest news and connect with other Punkykongz holders. You can easily access these resources through the "Community" link at the bottom of the website.
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
						<p>What is Punkykongz (NFT)?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>Punkykongz is an innovative NFT project launched on the Solana chain by the Punkvism team. It embodies the spirit of Web3 and serves as a versatile digital asset that can be utilized across various games and digital ecosystems. Created as a second project by a co-founder of Metakongz, Punkykongz offers numerous benefits and participation opportunities to its holders.</p>
					</div>
				</div>

				<div data-num="faq_2">
					<div class="list_q">
						<span>Q</span>
						<p>What is the philosophy of Punkykongz and Punkvism?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>
							Punkvism is driven by the mission of being "adventurers resisting an unjust society," which reflects the spirit of the PunkyVist community. The co-founders of Punkvism drew inspiration from the cypherpunk ethos of Bitcoin's creator, Satoshi Nakamoto, to initiate their Web3.0 journey. Punkvism strives to carry on this ethos, aiming to create a more transparent and equitable digital world.
						</p>
					</div>
				</div>

				<div data-num="faq_3">
					<div class="list_q">
						<span>Q</span>
						<p>How Can I Purchase Punkykongz NFT?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>
							All Punky Kongz NFTs were airdropped for free and can be purchased on MagicEden, the world's largest Solana exchange.
						</p>
					</div>
				</div>

				<div data-num="faq_4">
					<div class="list_q">
						<span>Q</span>
						<p>What Are the Benefits of Owning a Punkykongz NFT?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<div>
							<p>As a Punkykongz NFT holder, you can enjoy the following benefits:</p>
							<ul class="list-unstyled">
								<li>
									<b>Game Token Mining</b>
									<p> Earn daily game tokens within the Punkykongz ecosystem, which can be utilized in various games and ecosystem activities.</p>
								</li>
								<li>
									<b>Membership Benefits</b>
									<p>Enjoy discounts and exclusive perks, with expanded domestic and international membership benefits offering even more opportunities.</p>
								</li>
								<li>
									<b>RWA Project Participation</b>
									<p>He participates in both Asian and global RWA projects, offering opportunities to share profits.</p>
								</li>
								<li>
									<b>Story-Based Content</b>
									<p>Enjoy priority access and exclusive benefits for upcoming IP-based content such as novels, webtoons, and more.</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div data-num="faq_5">
					<div class="list_q">
						<span>Q</span>
						<p>How Does the Punkykongz Gaming Ecosystem Operate?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<div>
							<p>Punkykongz collaborates with various games to build a gaming ecosystem centered on NFTs. To address the instability of traditional P2E games, the project plans to launch games focused on NFTs instead of coins.</p>
							<ul class="list-unstyled">
								<li>
									<b>Role of Tokens :</b>
									<p>The game tokens within the Punkykongz ecosystem can be cashed out but are primarily used for purchasing NFTs. Players can acquire additional NFTs with tokens mined in-game, providing access to a wider variety of games and content.</p>
								</li>
								<li>
									<b>Game Development and Collaboration :</b>
									<p>Various genres, including RPGs in the style of Lineage and casual games, will be added to the Punkykongz ecosystem.</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div data-num="faq_6">
					<div class="list_q">
						<span>Q</span>
						<p>What Is the Roadmap for the Punkykongz Project?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<div>
							<p>The key roadmap milestones for the Punkykongz project are as follows :</p>
							<ul class="list-unstyled">
								<li>
									<b>Expansion of the Gaming Token Ecosystem :</b>
									<p>Attract new users through platforms like SnowChat and 3D virtual rooms while maximizing token scalability through various games.</p>
								</li>
								<li>
									<b>Strengthening the Membership Program :</b>
									<p>Enhance domestic and international membership benefits, providing holders with diverse discounts and perks.</p>
								</li>
								<li>
									<b>Progress in RWA Projects :</b>
									<p>We are building a powerful RWA consortium and, starting with Indonesia, will revolutionize the world through the fusion of RWA and NFTs</p>
								</li>
								<li>
									<b>IP and Story Development :</b>
									<p>Extend the Punkykongz universe through various media such as novels and webtoons, increasing the value of its intellectual property.</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div data-num="faq_7">
					<div class="list_q">
						<span>Q</span>
						<p>Why Use Punkykongz NFTs on the Solana Chain?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>
							The Solana chain is ideal for trading digital assets like NFTs due to its fast transaction speeds and low fees. Additionally, the Phantom wallet, which operates on the Solana chain, is user-friendly, making it easy for Punkykongz holders to manage their NFTs.
						</p>
					</div>
				</div>

				<div data-num="faq_8">
					<div class="list_q">
						<span>Q</span>
						<p>Are There Any Precautions When Purchasing NFTs?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>
							When purchasing Punky Kongz NFTs, please make sure to transact on the official marketplace or a certified exchange such as Magic Eden. Always check the official social media channels for the latest information to avoid fraudulent sites or fake NFT transactions.
						</p>
					</div>
				</div>

				<div data-num="faq_9">
					<div class="list_q">
						<span>Q</span>
						<p>What Is the Relationship Between the Punkykongz Project and Punkvism?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>
							The Punkykongz project is a Web3-based NFT initiative led by Punkvism. Inspired by the cypherpunk spirit of Bitcoin, Punkvism aims to maximize the potential of the Web3 ecosystem and provide users worldwide with new experiences through transparent and innovative blockchain projects.
						</p>
					</div>
				</div>

				<div data-num="faq_10">
					<div class="list_q">
						<span>Q</span>
						<p>How Can I Join the Punkykongz Community?</p>
						<button data-dismiss="modal"><i class="xi-close-thin"></i></button>
					</div>
					<div class="list_a">
						<span>A</span>
						<p>
							To join the Punkykongz community, simply follow the official Discord server, Twitter, or Telegram channels. These platforms will allow you to stay updated on the latest news and connect with other Punkykongz holders. You can easily access these resources through the "Community" link at the bottom of the website.
						</p>
					</div>
				</div>
			</div>
    </div>
  </div>
</div>


  </div>
</div>

	<!-- 다수홀더혜택 Modal -->
	<div class="modal modal-style1  inner fade" id="multiple_holder_benefits">
	<div class="modal-dialog modal-dialog-centered modal-lg">
		<div class="modal-content">
			<div class="modal-body">
				<h3 class="modal_title2">Multiple holder benefits <button data-dismiss="modal" class="modal_close"><i class="xi-close-min"></i></button></h3>
				<div class="modal_cont">
					<div class="pc_only">
						<table>
							<colgroup>
								<col style="width:20%">
								<col style="width:20%">
								<col style="width:20%">
								<col style="width:20%">
								<col style="width:20%">
							</colgroup>
							<thead>
								<tr>
									<th>Benefits</th>
									<th>Benefits for holders of 15</th>
									<th>Benefits for holders of 30</th>
									<th>Benefits for holders of 50</th>
									<th>Benefits for holders of 100</th>
								</tr>
							</thead>
							<tbody>
								<tr>
								<td>RWA Coin Presale Ticket <small>Conditions may vary for each project.</small></td>
								<td>O</td>
								<td>O</td>
								<td>O</td>
								<td>O</td>
								</tr>
								<tr>
								<td>NFT white-list <small>Conditions may vary for each project.</small></td>
								<td>O</td>
								<td>O</td>
								<td>O</td>
								<td>O</td>
								</tr>
								<tr>
								<td>Membership<small>Announcement when new membership products are released</small></td>
								<td>Additional discount applies (1st level)</td>
								<td>Additional discount applies (2st level)</td>
								<td>Additional discount applies (3st level)</td>
								<td>Additional discounts and special goods provided (4th grade)</td>
								</tr>
								<tr>
								<td>Goods discount<small>Conditions may vary depending on the goods.</small></td>
								<td>10% off </td>
								<td>12% off </td>
								<td>15% off </td>
								<td>20% off </td>
								</tr>
								<tr>
								<td>RWA Field Invitation</td>
								<td>Possible with your own money</td>
								<td>Possible with your own money</td>
								<td>Possible with your own money</td>
								<td>Flight and hotel provided</td>
								</tr>
								<tr>
								<td>Punky Kongs Party Invitation</td>
								<td>drawing</td>
								<td>100% winning</td>
								<td>100% winning</td>
								<td>100% confirmed and goods provided</td>
								</tr>
								<tr>
								<td>RWA ongoing business, additional profit sharing</td>
								<td>X</td>
								<td>X</td>
								<td>O</td>
								<td>O<br />(Higher returns than the benefits for holders of 50 or more)</td>
								</tr>
								<tr>
								<td>PDT Cancer Hospital VIP Reservation</td>
								<td>O</td>
								<td>O</td>
								<td>O</td>
								<td>O</td>
								</tr>
								<tr>
								<td>Additional quarterly and annual benefits</td>
								<td>Coming Soon</td>
								<td>Coming Soon</td>
								<td>Coming Soon</td>
								<td>Coming Soon</td>
								</tr>
								<tr>
								<td>Multi-holder goods</td>
								<td>Coming Soon</td>
								<td>Coming Soon</td>
								<td>Coming Soon</td>
								<td>Coming Soon</td>
								</tr>
								<tr>
								<td>Coming Soon</td>
								<td><strong>???</strong></td>
								<td><strong>???</strong></td>
								<td><strong>???</strong></td>
								<td><strong>???</strong></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="mo_only">
						<table>
							<colgroup>
								<col style="width:50%">
								<col style="width:50%">
							</colgroup>
							<thead>
								<tr>
									<th>Benefits</th>
									<th>Benefits for holders of 15</th>
								</tr>
							</thead>
							<tbody>
								<tr>
								<td>RWA Coin Presale Ticket <small>Conditions may vary for each project.</small></td>
								<td>O</td>
								</tr>
								<tr>
								<td>NFT white-list <small>Conditions may vary for each project.</small></td>
								<td>O</td>
								</tr>
								<tr>
								<td>Membership<small>Announcement when new membership products are released</small></td>
								<td>Additional discount applies (1st level)</td>
								</tr>
								<tr>
								<td>Goods discount<small>Conditions may vary depending on the goods.</small></td>
								<td>10% off </td>
								</tr>
								<tr>
								<td>RWA Field Invitation</td>
								<td>Possible with your own money</td>
								</tr>
								<tr>
								<td>Punky Kongs Party Invitation</td>
								<td>drawing</td>
								</tr>
								<tr>
								<td>RWA ongoing business, additional profit sharing</td>
								<td>X</td>
								</tr>
								<tr>
								<td>PDT Cancer Hospital VIP Reservation</td>
								<td>O</td>
								</tr>
								<tr>
								<td>Additional quarterly and annual benefits</td>
								<td>Coming Soon</td>
								</tr>
								<tr>
								<td>Multi-holder goods</td>
								<td>Coming Soon</td>
								</tr>
								<tr>
								<td>Coming Soon</td>
								<td><strong>???</strong></td>
								</tr>
							</tbody>
						</table>

						<table class="mt20">
							<colgroup>
								<col style="width:50%">
								<col style="width:50%">
							</colgroup>
							<thead>
								<tr>
									<th>Benefits</th>
									<th>Benefits for holders of 30</th>
								</tr>
							</thead>
							<tbody>
								<tr>
								<td>RWA Coin Presale Ticket <small>Conditions may vary for each project.</small></td>
								<td>O</td>
								</tr>
								<tr>
								<td>NFT white-list <small>Conditions may vary for each project.</small></td>
								<td>O</td>
								</tr>
								<tr>
								<td>Membership<small>Announcement when new membership products are released</small></td>
								<td>Additional discount applies (2st level)</td>
								</tr>
								<tr>
								<td>Goods discount<small>Conditions may vary depending on the goods.</small></td>
								<td>12% off </td>
								</tr>
								<tr>
								<td>RWA Field Invitation</td>
								<td>Possible with your own money</td>
								</tr>
								<tr>
								<td>Punky Kongs Party Invitation</td>
								<td>100% winning</td>
								</tr>
								<tr>
								<td>RWA ongoing business, additional profit sharing</td>
								<td>X</td>
								</tr>
								<tr>
								<td>PDT Cancer Hospital VIP Reservation</td>
								<td>O</td>
								</tr>
								<tr>
								<td>Additional quarterly and annual benefits</td>
								<td>Coming Soon</td>
								</tr>
								<tr>
								<td>Multi-holder goods</td>
										<td>Coming Soon</td>
								</tr>
								<tr>
								<td>Coming Soon</td>
								<td><strong>???</strong></td>
								</tr>
							</tbody>
						</table>

						<table class="mt20">
							<colgroup>
								<col style="width:50%">
								<col style="width:50%">
							</colgroup>
							<thead>
								<tr>
									<th>Benefits</th>
									<th>Benefits for holders of 50</th>
								</tr>
							</thead>
							<tbody>
								<tr>
								<td>RWA Coin Presale Ticket <small>Conditions may vary for each project.</small></td>
								<td>O</td>
								</tr>
								<tr>
								<td>NFT white-list <small>Conditions may vary for each project.</small></td>
								<td>O</td>
								</tr>
								<tr>
								<td>Membership<small>Announcement when new membership products are released</small></td>
								<td>Additional discount applies (3st level)</td>
								</tr>
								<tr>
								<td>Goods discount<small>Conditions may vary depending on the goods.</small></td>
								<td>15% off </td>
								</tr>
								<tr>
								<td>RWA Field Invitation</td>
								<td>Possible with your own money</td>
								</tr>
								<tr>
								<td>Punky Kongs Party Invitation</td>
								<td>100% winning</td>
								</tr>
								<tr>
								<td>RWA ongoing business, additional profit sharing</td>
								<td>O</td>
								</tr>
								<tr>
								<td>PDT Cancer Hospital VIP Reservation</td>
								<td>O</td>
								</tr>
								<tr>
								<td>Additional quarterly and annual benefits</td>
								<td>Coming Soon</td>
								</tr>
								<tr>
								<td>Multi-holder goods</td>
								<td>Coming Soon</td>
								</tr>
								<tr>
								<td>Coming Soon</td>
								<td><strong>???</strong></td>
								</tr>
							</tbody>
						</table>
						<table class="mt20">
							<colgroup>
								<col style="width:50%">
								<col style="width:50%">
							</colgroup>
							<thead>
								<tr>
									<th>Benefits</th>
									<th>Benefits for holders of 100</th>
								</tr>
							</thead>
							<tbody>
								<tr>
								<td>RWA Coin Presale Ticket <small>Conditions may vary for each project.</small></td>
								<td>O</td>
								</tr>
								<tr>
								<td>NFT white-list <small>Conditions may vary for each project.</small></td>
								<td>O</td>
								</tr>
								<tr>
								<td>Membership<small>Announcement when new membership products are released</small></td>
								<td>Additional discounts and special goods provided (4th grade)</td>
								</tr>
								<tr>
								<td>Goods discount<small>Conditions may vary depending on the goods.</small></td>
								<td>20% off </td>
								</tr>
								<tr>
								<td>RWA Field Invitation</td>
								<td>Flight and hotel provided</td>
								</tr>
								<tr>
								<td>Punky Kongs Party Invitation</td>
								<td>100% confirmed and goods provided</td>
								</tr>
								<tr>
								<td>RWA ongoing business, additional profit sharing</td>
								<td>O<br />(Higher returns than the benefits for holders of 50 or more)</td>
								</tr>
								<tr>
								<td>PDT Cancer Hospital VIP Reservation</td>
								<td>O</td>
								</tr>
								<tr>
								<td>Additional quarterly and annual benefits</td>
								<td>Coming Soon</td>
								</tr>
								<tr>
								<td>Multi-holder goods</td>
								<td>Coming Soon</td>
								</tr>
								<tr>
								<td>Coming Soon</td>
								<td><strong>???</strong></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="modal_btn_group">
					<a href="#." class="btn btn-black-o w140" data-dismiss="modal">Close</a>
				</div>
			</div>
		</div>
	</div>
	</div>

	<!-- 팀소개 상세이력 : David HP Lee -->
	<div class="modal modal-style1 profile  inner fade" id="team_profile_8">
		<div class="modal-dialog modal-dialog-centered modal-md">
			<div class="modal-content">
				<div class="modal-body">
					<h3 class="modal_title2">View Profile <button data-dismiss="modal" class="modal_close"><i class="xi-close-min"></i></button></h3>
					<div class="modal_cont">
						<h4>David HP Lee</h4>
						<p>Blockchain Consultant</p>

						<h4 class="mt30">Education</h4>
						<ul>
							<li>Seoul National University, College of Law (2005)</li>
							<li>University of Michigan Law School, J.D. (2013)</li>
						</ul>

						<h4 class="mt30">Experience</h4>
						<ul>
							<li>KDB Bank</li>
							<li>Law Clerk, Judge Evan J. Wallach, U.S. Court of International Trade</li>
							<li>Attorney at Law, New York State Bar (2015–Present)</li>
							<li>EM Hwang IP Firm (2015–2019)</li>
							<li>Legal Director, Ace Entertainment (Me2on Group) (2019–2020)</li>
							<li>CLO, Supertree (PlayDapp Project) (2022–2024) : NFTs, cryptocurrency exchanges (Coinbase, Binance, etc.), and blockchain international business development.</li>
							<li>Keilah Strategy Consulting (2019–Present) : Blockchain, international transactions consulting.</li>
						</ul>

						<div class="my_char">
							<img src="_img/main/sec04_img8.png">
						</div>
					</div>
					<div class="modal_btn_group">
						<a href="#." class="btn btn-black-o w140" data-dismiss="modal">Close</a>
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
        navigation: {
          nextEl: ".story-next",
          prevEl: ".story-prev",
        },
        lazy: {
          loadPrevNext: true, // 이전/다음 이미지를 미리 로드
        },
        on: {
          slideChange: function () {
            updateActiveClass(this.realIndex)
          },
        },
      });


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
			$('.sec01 .story_info1').fadeIn();
			$('.sec01 .story_info2').hide();
          },50)
          
        } else if (index === 1) {
          $swiperPage.removeClass('active_item1');
          $swiperPage.addClass('active_item2');
		  	$('.sec01 .story_info2').fadeIn();
			$('.sec01 .story_info1').hide();
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
		
		$('.sec01 .inner .more_view button').on('click' , function(){
			$(this).parents('.story_info').toggleClass('is-open');
			if($(this).parents('.story_info').hasClass('is-open')){
				$(this).parents('.story_info').find('.story_box').animate({'max-height' : '250rem'},800);
				$('.sec01 .inner .more_view button span').text('Close');
			} else {
				$(this).parents('.story_info').find('.story_box').animate({'max-height' : '30rem'},800);
				$('.sec01 .inner .more_view button span').text('Open');
			}
			
		});

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
