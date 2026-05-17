<script lang="ts">
	import { reveal } from '$lib/reveal.js';
	import type { WhyItem } from '$lib/types.js';
	import raw from '$lib/data/why.json';
	const items = raw as WhyItem[];
</script>

<section class="why">
	<div class="container">
		<div class="head" use:reveal>
			<div>
				<div class="lab">Why Cosmedent</div>
				<h2>A practice built on <em>principle</em>.</h2>
			</div>
			<p>Small enough to know you by name. Equipped well enough to handle the complex.</p>
		</div>
		<div class="grid" use:reveal>
			{#each items as item}
			<div class="item">
				<div class="num">{item.numeral}</div>
				<h4>{item.title}</h4>
				<p>{item.body}</p>
			</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.why { background: #f6f3ed; padding: 120px 0; }
	.container { width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 32px; }
	.head {
		display: grid; grid-template-columns: 1fr 1.5fr;
		gap: 48px; margin-bottom: 72px; align-items: end;
	}
	.lab { font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: #1f3d2c; }
	.head h2 {
		font-family: 'Instrument Serif', serif; font-weight: 400;
		font-size: clamp(36px, 4.5vw, 64px); line-height: 1.02;
		letter-spacing: -0.02em; margin: 12px 0 0;
	}
	.head h2 em { font-style: italic; color: #1f3d2c; }
	.head p { font-size: 17px; color: #2a3530; line-height: 1.55; max-width: 56ch; margin: 0; }

	.grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid #d8d2c4; }
	.item { padding: 36px 24px 36px 0; border-bottom: 1px solid #d8d2c4; }
	.item:not(:last-child) { border-right: 1px solid #d8d2c4; padding-right: 24px; }
	.item:not(:first-child) { padding-left: 24px; }
	.num {
		font-family: 'Instrument Serif', serif; font-style: italic;
		font-size: 56px; line-height: 1; color: #1f3d2c; margin-bottom: 18px;
	}
	.item h4 {
		font-family: 'Instrument Serif', serif; font-weight: 400;
		font-size: 22px; line-height: 1.15; margin: 0 0 8px;
	}
	.item p { font-size: 14px; color: #6b736e; margin: 0; line-height: 1.6; }

	@media (max-width: 860px) {
		.why { padding: 80px 0; }
		.head { grid-template-columns: 1fr; gap: 20px; margin-bottom: 48px; }
		.grid { grid-template-columns: 1fr 1fr; }
		.item:nth-child(2n) { border-right: none; }
		.item:nth-child(odd) { border-right: 1px solid #d8d2c4; }
	}
</style>
