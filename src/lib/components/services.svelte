<script lang="ts">
	import { reveal } from '$lib/reveal.js';
	import type { Service } from '$lib/types.js';
	import raw from '$lib/data/services.json';
	const services = raw as Service[];

	let active = $state(0);
	let cur = $derived(services[active]);
</script>

<section id="services" class="services">
	<div class="container">
		<div class="head" use:reveal>
			<div>
				<div class="lab">Our Services</div>
				<h2>What we <em>treat</em>.</h2>
			</div>
			<p>From routine care to complex restorative work — all under one roof, by specialists who know you.</p>
		</div>

		<div class="layout">
			<div class="list">
				{#each services as svc, i}
				<button
					class="row"
					class:active={active === i}
					onmouseenter={() => active = i}
					onclick={() => active = i}
				>
					<span class="num">{String(i + 1).padStart(2, '0')}</span>
					<span class="name">{svc.title}</span>
					<span class="arrow">→</span>
				</button>
				{/each}
			</div>

			<div class="detail" use:reveal>
				<div class="visual"><span>{cur.visual}</span></div>
				<h3>{cur.title}</h3>
				<p>{cur.description}</p>
				<ul class="points">
					{#each cur.points as pt}<li>{pt}</li>{/each}
				</ul>
				<div class="meta">
					<div>
						<div class="k">Sittings</div>
						<div class="v">{cur.sittings}</div>
					</div>
					<div>
						<div class="k">Done by</div>
						<div class="v">{cur.doctor}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.services { background: #f6f3ed; padding: 80px 0; }
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

	.layout { display: grid; grid-template-columns: 1fr 1.4fr; gap: 48px; align-items: stretch; }

	.list { border-top: 1px solid #d8d2c4; border-bottom: 1px solid #d8d2c4; }
	.row {
		width: 100%; text-align: left; background: transparent; border: 0;
		border-bottom: 1px solid #d8d2c4; padding: 24px 0;
		display: grid; grid-template-columns: 48px 1fr auto;
		gap: 20px; align-items: center; cursor: pointer; color: #15201a;
		font-family: inherit; transition: padding-left .3s, color .25s;
	}
	.row:last-child { border-bottom: 0; }
	.row:hover { padding-left: 12px; }
	.row.active { padding-left: 12px; color: #1f3d2c; }
	.num {
		font-family: 'Instrument Serif', serif; font-style: italic;
		color: #6b736e; font-size: 18px; transition: color .25s;
	}
	.row.active .num, .row:hover .num { color: #1f3d2c; }
	.name { font-family: 'Instrument Serif', serif; font-size: 28px; line-height: 1.1; letter-spacing: -0.01em; }
	.arrow {
		font-family: 'Instrument Serif', serif; color: #6b736e; font-size: 22px;
		transform: translateX(-8px); opacity: 0; transition: all .3s;
	}
	.row:hover .arrow, .row.active .arrow { opacity: 1; transform: translateX(0); color: #1f3d2c; }

	.detail {
		position: sticky; top: 92px; align-self: start;
		background: #fbf9f4; border: 1px solid #e6e1d4;
		padding: 28px; display: flex; flex-direction: column; gap: 20px;
	}
	.visual {
		aspect-ratio: 16 / 9;
		background: repeating-linear-gradient(135deg, rgba(31,61,44,0.06) 0 1px, transparent 1px 14px), #efeae0;
		border: 1px solid #d8d2c4; display: flex; align-items: center; justify-content: center;
		color: #6b736e; font-family: ui-monospace, monospace; font-size: 11px;
		letter-spacing: 0.1em; text-transform: uppercase;
	}
	.visual span { background: #fbf9f4; padding: 6px 10px; border: 1px solid #e6e1d4; }
	.detail h3 {
		font-family: 'Instrument Serif', serif; font-weight: 400;
		font-size: 40px; line-height: 1.05; letter-spacing: -0.01em; margin: 0;
	}
	.detail p { margin: 0; color: #2a3530; font-size: 16px; line-height: 1.6; }
	.points { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; }
	.points li { font-size: 14px; color: #2a3530; padding-left: 18px; position: relative; }
	.points li::before {
		content: ""; position: absolute; left: 0; top: 9px;
		width: 8px; height: 1px; background: #1f3d2c;
	}
	.meta {
		display: flex; justify-content: space-between;
		border-top: 1px solid #e6e1d4; padding-top: 20px; font-size: 13px;
	}
	.k { color: #6b736e; letter-spacing: 0.08em; text-transform: uppercase; font-size: 11px; }
	.v { color: #15201a; font-family: 'Instrument Serif', serif; font-size: 18px; }

	@media (max-width: 860px) {
		.services { padding: 80px 0; }
		.head { grid-template-columns: 1fr; gap: 20px; margin-bottom: 48px; }
		.layout { grid-template-columns: 1fr; gap: 32px; }
		.detail { position: static; min-height: 0; }
		.detail h3 { font-size: 32px; }
		.row { grid-template-columns: 36px 1fr; padding: 20px 0; }
		.name { font-size: 22px; }
		.arrow { display: none; }
	}
</style>
