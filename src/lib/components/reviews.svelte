<script lang="ts">
	import { reveal } from '$lib/reveal.js';
	import type { Review } from '$lib/types.js';
	import raw from '$lib/data/reviews.json';
	const reviews = raw as Review[];
</script>

<section id="reviews" class="reviews">
	<div class="container">
		<div class="head" use:reveal>
			<div>
				<div class="lab">Patient Reviews</div>
				<h2>What patients <em>say</em>.</h2>
			</div>
			<p>Real feedback from real patients — unedited, unfiltered, from Google.</p>
		</div>
		<div class="grid" use:reveal>
			{#each reviews as rev}
			<article class="card">
				<div class="stars">★★★★★</div>
				<blockquote>{rev.quote}</blockquote>
				<div class="meta">
					<div class="avatar">{rev.initials}</div>
					<div>
						<div class="name">{rev.author}</div>
						<div class="src">{rev.source}</div>
					</div>
				</div>
			</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.reviews { background: #f6f3ed; padding: 120px 0; }
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

	.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
	.card {
		background: #fbf9f4; border: 1px solid #e6e1d4;
		padding: 32px 28px; display: flex; flex-direction: column; gap: 24px;
	}
	.stars { color: #1f3d2c; font-size: 14px; letter-spacing: 2px; }
	blockquote {
		font-family: 'Instrument Serif', serif; font-size: 22px; line-height: 1.3;
		margin: 0; color: #15201a; flex: 1;
	}
	blockquote::before { content: "\201C"; color: #1f3d2c; }
	blockquote::after { content: "\201D"; color: #1f3d2c; }
	.meta {
		display: flex; align-items: center; gap: 14px;
		padding-top: 20px; border-top: 1px solid #e6e1d4;
	}
	.avatar {
		width: 40px; height: 40px; border-radius: 50%; background: #efeae0;
		display: flex; align-items: center; justify-content: center;
		font-family: 'Instrument Serif', serif; font-size: 18px;
		color: #1f3d2c; border: 1px solid #d8d2c4; flex-shrink: 0;
	}
	.name { font-size: 14px; font-weight: 500; color: #15201a; }
	.src { font-size: 12px; color: #6b736e; margin-top: 2px; }

	@media (max-width: 860px) {
		.reviews { padding: 80px 0; }
		.head { grid-template-columns: 1fr; gap: 20px; margin-bottom: 48px; }
		.grid { grid-template-columns: 1fr; }
	}
</style>
