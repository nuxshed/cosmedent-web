<script lang="ts">
	import { getmodal } from '$lib/context.js';

	const modal = getmodal();

	const slides = [{}, {}, {}, {}];

	let slide = $state(0);

	let timer: ReturnType<typeof setInterval>;
	function restart() {
		clearInterval(timer);
		timer = setInterval(() => { slide = (slide + 1) % slides.length; }, 5500);
	}
	$effect(() => { restart(); return () => clearInterval(timer); });
</script>

<section class="hero" id="hero">
	<div class="slides">
		{#each slides as _, i}
		<div class="slide slide-{i}" class:active={slide === i}>
			<div class="bg"></div>
		</div>
		{/each}
	</div>

	<div class="content">
		<div class="content-inner">
			<h1>Cosmedent.</h1>
			<p class="tagline">Specialty Dental Clinic</p>
			<p class="desc">Expert dental care in Hyderabad — cosmetic, restorative and periodontal treatments by specialists who know you.</p>
		</div>
	</div>

	<div class="footer">
		<div class="dots">
			{#each slides as _, i}
			<button class="dot" class:active={slide === i} onclick={() => { slide = i; restart(); }} aria-label="Slide {i+1}"></button>
			{/each}
		</div>
	</div>

	<div class="actions">
		<button class="btn-light" onclick={() => modal.open()}>Book an Appointment</button>
		<a href="#services" class="btn-outline">Explore Services</a>
	</div>
</section>

<style>
	.hero {
		position: relative; height: 100vh; min-height: 640px;
		width: 100%; overflow: hidden; background: #0c1410;
	}
	.slides { position: absolute; inset: 0; }
	.slide { position: absolute; inset: 0; opacity: 0; transition: opacity 1.4s ease; }
	.slide.active { opacity: 1; }
	.bg {
		position: absolute; inset: 0;
		background-size: cover; background-position: center;
		transform: scale(1.05); transition: transform 8s ease;
	}
	.slide.active .bg { transform: scale(1); }
	.slide::after {
		content: ""; position: absolute; inset: 0;
		background: linear-gradient(180deg, rgba(12,20,16,0.55) 0%, rgba(12,20,16,0.35) 40%, rgba(12,20,16,0.7) 100%);
	}
	.slide-0 .bg {
		background:
			radial-gradient(ellipse at 30% 40%, rgba(207,229,211,0.14), transparent 60%),
			repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 18px),
			linear-gradient(135deg, #1a2c22, #0c1410);
	}
	.slide-1 .bg {
		background:
			radial-gradient(ellipse at 70% 30%, rgba(207,229,211,0.18), transparent 60%),
			repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 22px),
			linear-gradient(135deg, #2c4133, #11231a);
	}
	.slide-2 .bg {
		background:
			radial-gradient(ellipse at 50% 70%, rgba(255,255,255,0.1), transparent 60%),
			repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 16px),
			linear-gradient(180deg, #0c1410, #1f3d2c);
	}
	.slide-3 .bg {
		background:
			radial-gradient(ellipse at 40% 60%, rgba(207,229,211,0.12), transparent 55%),
			repeating-linear-gradient(165deg, rgba(255,255,255,0.022) 0 1px, transparent 1px 20px),
			linear-gradient(135deg, #15291f, #0c1410);
	}
	.content {
		position: absolute; inset: 0; z-index: 3;
		display: flex; flex-direction: column; justify-content: center; padding: 0 32px;
	}
	.content-inner { width: 100%; max-width: 1240px; margin: 0 auto; }
	h1 {
		font-family: 'Instrument Serif', serif; font-weight: 400;
		font-size: clamp(80px, 14vw, 220px); line-height: 0.92;
		letter-spacing: -0.025em; color: #fbf9f4; margin: 0 0 10px;
	}
	.tagline {
		font-size: 11px; letter-spacing: 0.42em; text-transform: uppercase;
		color: rgba(251,249,244,0.38); margin: 0 0 28px; font-weight: 400;
	}
	.desc {
		font-size: 16px; color: rgba(251,249,244,0.7); line-height: 1.6;
		margin: 0; max-width: 42ch;
	}
	.footer {
		position: absolute; left: 0; right: 0; bottom: 32px; z-index: 4;
		display: flex; justify-content: center;
	}
	.dots { display: flex; gap: 12px; align-items: center; }
	.dot {
		background: none; border: 0; padding: 8px 0; cursor: pointer;
		display: flex; align-items: center;
		font-size: 0; transition: color .25s;
	}
	.dot::before {
		content: ""; width: 24px; height: 1px;
		background: rgba(251,249,244,0.3); transition: width .35s, background .25s;
	}
	.dot.active::before { width: 56px; background: #cfe5d3; }
	.actions {
		position: absolute; right: 32px; bottom: 32px; z-index: 4;
		display: flex; gap: 14px; align-items: center;
	}
	.btn-light, .btn-outline {
		display: inline-flex; align-items: center; gap: 10px;
		padding: 14px 24px; border-radius: 999px; font-size: 15px;
		font-weight: 500; cursor: pointer; font-family: inherit;
		transition: all .2s; border: 1px solid transparent;
	}
	.btn-light { background: #fbf9f4; color: #15201a; border-color: #fbf9f4; }
	.btn-light:hover { background: #fff; }
	.btn-outline { border-color: rgba(255,255,255,0.4); color: #fbf9f4; background: transparent; }
	.btn-outline:hover { border-color: #fbf9f4; background: rgba(255,255,255,0.08); }
	@media (max-width: 720px) {
		.hero { min-height: 560px; }
		.actions { right: 16px; bottom: 80px; gap: 10px; }
		.btn-light, .btn-outline { padding: 12px 18px; font-size: 14px; }
	}
</style>
