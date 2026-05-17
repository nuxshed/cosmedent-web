<script lang="ts">
	import { getmodal } from '$lib/context.js';

	const modal = getmodal();
	let transparent = $state(true);

	$effect(() => {
		const hero = document.getElementById('hero');
		if (!hero) return;
		const obs = new IntersectionObserver(
			([e]) => { transparent = e.isIntersecting && e.intersectionRatio > 0.3; },
			{ threshold: [0, 0.3, 0.6, 1] }
		);
		obs.observe(hero);
		return () => obs.disconnect();
	});
</script>

<header class="nav" class:transparent>
	<div class="inner">
		<a href="#" class="brand">
			<span class="mark">Cosmedent<span class="dot">.</span></span>
			<span class="sub">Specialty Dental</span>
		</a>
		<nav class="links">
			<a href="#services">Services</a>
			<a href="#doctors">Doctors</a>
			<a href="#reviews">Reviews</a>
			<a href="#process">Your Visit</a>
			<a href="#visit">Contact</a>
			<button class="cta" onclick={() => modal.open()}>Book a Visit <span>→</span></button>
		</nav>
	</div>
</header>

<style>
	.nav {
		position: fixed; top: 0; left: 0; right: 0; z-index: 50;
		background: color-mix(in oklab, #f6f3ed 70%, transparent);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
		border-bottom: 1px solid #e6e1d4;
		transition: background .3s, border-color .3s;
	}
	.nav.transparent { background: transparent; border-bottom-color: transparent; }
	.nav.transparent .mark,
	.nav.transparent .sub,
	.nav.transparent .links a { color: #fbf9f4; }
	.nav.transparent .dot { color: #cfe5d3; }
	.nav.transparent .cta { background: #fbf9f4; color: #1f3d2c; }
	.nav.transparent .cta:hover { background: #fff; }

	.inner {
		display: flex; align-items: center; justify-content: space-between;
		height: 72px; max-width: 1240px; margin: 0 auto; padding: 0 32px;
	}
	.brand { display: flex; align-items: baseline; gap: 12px; }
	.mark {
		font-family: 'Instrument Serif', serif; font-size: 28px;
		line-height: 1; letter-spacing: -0.01em; transition: color .3s;
	}
	.dot { color: #1f3d2c; transition: color .3s; }
	.sub {
		font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
		color: #6b736e; transition: color .3s;
	}
	.links { display: flex; gap: 32px; align-items: center; }
	.links a { font-size: 14px; color: #2a3530; transition: color .2s; }
	.links a:hover { color: #1f3d2c; }
	.cta {
		color: #fbf9f4; background: #1f3d2c;
		padding: 10px 20px; border-radius: 999px; border: none;
		display: inline-flex; align-items: center; gap: 8px;
		font-size: 14px; font-weight: 500; font-family: inherit;
		cursor: pointer; transition: background .2s, color .3s;
	}
	.cta span { font-family: 'Instrument Serif', serif; font-size: 16px; }
	.cta:hover { background: #2c5a40; }

	@media (max-width: 860px) {
		.links a:not(.cta) { display: none; }
	}
</style>
