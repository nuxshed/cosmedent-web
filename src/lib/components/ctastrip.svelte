<script lang="ts">
	import { getmodal } from '$lib/context.js';
	import raw from '$lib/data/contact.json';
	const modal = getmodal();
	const contact = raw as { phoneraw: string };
</script>

<section class="strip">
	<div class="inner">
		<h3>Better dentistry, <em>in your neighbourhood</em> — book a quiet consultation today.</h3>
		<div class="actions">
			<button class="btn-primary" onclick={() => modal.open()}>Book a Visit <span>→</span></button>
			<a href="tel:{contact.phoneraw}" class="btn-ghost">Call the Clinic <span>→</span></a>
		</div>
	</div>
</section>

<style>
	.strip { padding: 80px 0; background: #f6f3ed; border-top: 1px solid #e6e1d4; }
	.inner {
		width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 32px;
		display: grid; grid-template-columns: 1.4fr 1fr; gap: 40px; align-items: center;
	}
	h3 {
		font-family: 'Instrument Serif', serif; font-weight: 400;
		font-size: clamp(32px, 4vw, 56px); line-height: 1.05;
		letter-spacing: -0.02em; margin: 0;
	}
	h3 em { font-style: italic; color: #1f3d2c; }
	.actions { display: flex; gap: 12px; justify-content: flex-end; flex-wrap: wrap; }
	.btn-primary, .btn-ghost {
		display: inline-flex; align-items: center; gap: 8px;
		padding: 14px 24px; border-radius: 999px; font-size: 15px; font-weight: 500;
		cursor: pointer; font-family: inherit; transition: all .2s;
	}
	.btn-primary { background: #1f3d2c; color: #fbf9f4; border: none; }
	.btn-primary:hover { background: #2c5a40; transform: translateY(-1px); }
	.btn-ghost { border: 1px solid #d8d2c4; color: #15201a; background: transparent; }
	.btn-ghost:hover { border-color: #1f3d2c; color: #1f3d2c; }
	.btn-primary span, .btn-ghost span { font-family: 'Instrument Serif', serif; font-size: 18px; }

	@media (max-width: 860px) {
		.inner { grid-template-columns: 1fr; }
		.actions { justify-content: flex-start; }
	}
</style>
