<script lang="ts">
	import { reveal } from '$lib/reveal.js';
	import type { Step } from '$lib/types.js';
	import raw from '$lib/data/process.json';
	const steps = raw as Step[];
</script>

<section id="process" class="process">
	<div class="container">
		<div class="head" use:reveal>
			<div>
				<div class="lab">Your Visit</div>
				<h2>How it <em>works</em>.</h2>
			</div>
			<p>A calm, considered process — from your first message to your last follow-up.</p>
		</div>
		<div class="grid" use:reveal>
			{#each steps as step}
			<div class="step">
				<div class="n">Step {step.number}</div>
				<h4>{step.title}</h4>
				<p>{step.body}</p>
			</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.process { background: #1f3d2c; color: #fbf9f4; padding: 120px 0; }
	.container { width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 32px; }
	.head {
		display: grid; grid-template-columns: 1fr 1.5fr;
		gap: 48px; margin-bottom: 72px; align-items: end;
	}
	.lab {
		font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase;
		color: color-mix(in oklab, #fbf9f4 70%, transparent);
	}
	.head h2 {
		font-family: 'Instrument Serif', serif; font-weight: 400; color: #fbf9f4;
		font-size: clamp(36px, 4.5vw, 64px); line-height: 1.02;
		letter-spacing: -0.02em; margin: 12px 0 0;
	}
	.head h2 em { font-style: italic; color: #cfe5d3; }
	.head p {
		font-size: 17px; line-height: 1.55; max-width: 56ch; margin: 0;
		color: color-mix(in oklab, #fbf9f4 80%, transparent);
	}

	.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
	.step { border-top: 1px solid color-mix(in oklab, #fbf9f4 25%, transparent); padding-top: 24px; }
	.n {
		font-family: 'Instrument Serif', serif; font-style: italic; font-size: 14px;
		color: color-mix(in oklab, #fbf9f4 70%, transparent); margin-bottom: 56px;
	}
	.step h4 {
		font-family: 'Instrument Serif', serif; font-weight: 400;
		font-size: 26px; line-height: 1.1; margin: 0 0 10px;
	}
	.step p {
		font-size: 14px; line-height: 1.55; margin: 0;
		color: color-mix(in oklab, #fbf9f4 78%, transparent);
	}

	@media (max-width: 860px) {
		.process { padding: 80px 0; }
		.head { grid-template-columns: 1fr; gap: 20px; margin-bottom: 48px; }
		.grid { grid-template-columns: 1fr 1fr; }
	}
</style>
