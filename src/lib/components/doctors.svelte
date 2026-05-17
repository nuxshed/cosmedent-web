<script lang="ts">
	import { reveal } from '$lib/reveal.js';
	import type { Doctor } from '$lib/types.js';
	import raw from '$lib/data/doctors.json';
	const doctors = raw as Doctor[];
</script>

<section id="doctors" class="doctors">
	<div class="container">
		<div class="head" use:reveal>
			<div>
				<h2>The Team</h2>
			</div>
			<p>Cosmedent is led by a husband-and-wife team whose combined practice spans cosmetic, periodontal and family dentistry.</p>
		</div>

		<div class="grid">
			{#each doctors as doc}
			<article class="doc" use:reveal>
				<div class="portrait">
					<div class="ph"><span>Doctor portrait</span></div>
				</div>
				<div class="meta">
					<h3>{doc.name}</h3>
					<div class="qual">{doc.qual}</div>
					<p>{doc.bio}</p>
					<div class="tags">
						{#each doc.tags as tag}<span>{tag}</span>{/each}
					</div>
				</div>
			</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.doctors {
		background: #fbf9f4; padding: 120px 0;
		border-top: 1px solid #e6e1d4; border-bottom: 1px solid #e6e1d4;
	}
	.container { width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 32px; }
	.head {
		display: grid; grid-template-columns: 1fr 1.5fr;
		gap: 48px; margin-bottom: 72px; align-items: end;
	}
	.head h2 {
		font-family: 'Instrument Serif', serif; font-weight: 400;
		font-size: clamp(36px, 4.5vw, 64px); line-height: 1.02;
		letter-spacing: -0.02em; margin: 0;
	}
	.head p { font-size: 17px; color: #2a3530; line-height: 1.55; max-width: 56ch; margin: 0; }

	.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; }
	.doc { display: grid; gap: 24px; }

	.portrait { aspect-ratio: 4 / 3; position: relative; overflow: hidden; }
	.ph {
		position: absolute; inset: 0;
		background: repeating-linear-gradient(135deg, rgba(31,61,44,0.06) 0 1px, transparent 1px 14px), #efeae0;
		border: 1px solid #d8d2c4; display: flex; align-items: center;
		justify-content: center; color: #6b736e; font-family: ui-monospace, monospace;
		font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
	}
	.ph span { background: #fbf9f4; padding: 6px 10px; border: 1px solid #e6e1d4; }

	.meta { display: grid; gap: 0; }
	.meta h3 {
		font-family: 'Instrument Serif', serif; font-weight: 400;
		font-size: 38px; line-height: 1.05; letter-spacing: -0.01em; margin: 0 0 6px;
	}
	.qual { font-family: 'Instrument Serif', serif; font-style: italic; color: #1f3d2c; font-size: 18px; margin-bottom: 14px; }
	.meta p { font-size: 15px; color: #2a3530; line-height: 1.6; margin: 0; }
	.tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px; }
	.tags span { font-size: 12px; padding: 6px 12px; border: 1px solid #d8d2c4; border-radius: 999px; color: #2a3530; }

	@media (max-width: 860px) {
		.doctors { padding: 80px 0; }
		.head { grid-template-columns: 1fr; gap: 20px; margin-bottom: 48px; }
		.grid { grid-template-columns: 1fr; gap: 40px; }
	}
</style>
