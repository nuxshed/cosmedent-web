<script lang="ts">
	import { reveal } from '$lib/reveal.js';
	import { getmodal } from '$lib/context.js';
	import type { Contact } from '$lib/types.js';
	import raw from '$lib/data/contact.json';
	const contact = raw as Contact;
	const modal = getmodal();
</script>

<section id="visit" class="visit">
	<div class="container">
		<div class="info" use:reveal>
			<div class="lab">Visit Us</div>
			<h2>Find the <em>clinic</em>.</h2>

			<div class="row">
				<div class="k">Address</div>
				<div class="v">
					{contact.address}<br/>
					<span class="lm">{contact.landmark}</span>
				</div>
			</div>
			<div class="row">
				<div class="k">Phone</div>
				<div class="v"><a href="tel:{contact.phoneraw}">{contact.phone}</a></div>
			</div>
			<div class="row">
				<div class="k">WhatsApp</div>
				<div class="v"><a href={contact.whatsapp} target="_blank" rel="noopener">Message us on WhatsApp</a></div>
			</div>
			<div class="row">
				<div class="k">Hours</div>
				<div class="v">
					<div class="hours">
						{#each contact.hours as h}
						<div class="day">{h.day}</div>
						<div class="time">{h.time}</div>
						{/each}
					</div>
				</div>
			</div>

			<div class="ctas">
				<button class="btn-primary" onclick={() => modal.open()}>Book Appointment</button>
				<a href="https://maps.app.goo.gl/DQvGgipQruBYNqwK7" target="_blank" rel="noopener" class="btn-ghost">Get Directions</a>
			</div>
		</div>

		<div class="map" use:reveal aria-label="Map showing Cosmedent location">
			<iframe
				src="https://maps.google.com/maps?q=Cosmedent+Specialty+Dental+Clinic,+Nagarjuna+Homes,+Nizampet+Road,+Hyderabad&output=embed"
				title="Cosmedent location"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	</div>
</section>

<style>
	.visit { background: #f6f3ed; border-top: 1px solid #e6e1d4; padding: 120px 0; }
	.container {
		width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 32px;
		display: grid; grid-template-columns: 1fr 1fr; gap: 64px;
	}
	.lab { font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: #1f3d2c; margin-bottom: 4px; }
	.info h2 {
		font-family: 'Instrument Serif', serif; font-weight: 400;
		font-size: clamp(40px, 5vw, 72px); line-height: 1; letter-spacing: -0.02em; margin: 12px 0 32px;
	}
	.info h2 em { font-style: italic; color: #1f3d2c; }
	.row {
		display: grid; grid-template-columns: 130px 1fr; gap: 20px;
		padding: 22px 0; border-bottom: 1px solid #e6e1d4;
	}
	.row:first-of-type { border-top: 1px solid #e6e1d4; }
	.k { font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #6b736e; padding-top: 4px; }
	.v { font-size: 16px; color: #15201a; line-height: 1.5; }
	.v a:hover { color: #1f3d2c; }
	.lm { color: #6b736e; font-size: 14px; }
	.hours { display: grid; grid-template-columns: 1fr auto; gap: 4px 16px; font-size: 14px; }
	.day { color: #2a3530; }
	.time { color: #6b736e; font-variant-numeric: tabular-nums; }
	.ctas { margin-top: 36px; display: flex; gap: 12px; flex-wrap: wrap; }
	.btn-primary {
		display: inline-flex; align-items: center; gap: 10px;
		padding: 14px 24px; border-radius: 999px; font-size: 15px; font-weight: 500;
		cursor: pointer; font-family: inherit; transition: all .2s; border: none;
		background: #1f3d2c; color: #fbf9f4;
	}
	.btn-primary:hover { background: #2c5a40; transform: translateY(-1px); }
	.btn-ghost {
		display: inline-flex; align-items: center; gap: 10px;
		padding: 14px 24px; border-radius: 999px; font-size: 15px; font-weight: 500;
		cursor: pointer; font-family: inherit; transition: all .2s;
		border: 1px solid #d8d2c4; color: #15201a; background: transparent;
	}
	.btn-ghost:hover { border-color: #1f3d2c; color: #1f3d2c; }

	.map {
		position: relative; overflow: hidden; min-height: 480px;
		border: 1px solid #d8d2c4;
	}
	.map iframe {
		position: absolute; inset: 0; width: 100%; height: 100%; border: 0;
	}

	@media (max-width: 860px) {
		.visit { padding: 80px 0; }
		.container { grid-template-columns: 1fr; gap: 40px; }
		.row { grid-template-columns: 1fr; gap: 6px; }
		.map { min-height: 360px; }
	}
</style>
