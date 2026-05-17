<script lang="ts">
	import { getmodal } from '$lib/context.js';
	import raw from '$lib/data/contact.json';
	const modal = getmodal();
	const contact = raw as { phone: string; phoneraw: string; whatsapp: string; hours: { day: string; time: string }[] };
	const year = new Date().getFullYear();
</script>

<footer>
	<div class="container">
		<div class="grid">
			<div>
				<div class="mark">Cosmedent<span class="dot">.</span></div>
				<span class="sub">Specialty Dental Clinic</span>
				<p class="tag">A small, careful practice for cosmetic, restorative and family dentistry.</p>
			</div>
			<div class="col">
				<h5>Practice</h5>
				<ul>
					<li><a href="#services">Services</a></li>
					<li><a href="#doctors">Our Doctors</a></li>
					<li><a href="#process">Your Visit</a></li>
					<li><a href="#reviews">Reviews</a></li>
				</ul>
			</div>
			<div class="col">
				<h5>Visit</h5>
				<ul>
					<li><a href="#visit">Address &amp; Hours</a></li>
					<li><button onclick={() => modal.open()}>Book Appointment</button></li>
					<li><a href="tel:{contact.phoneraw}">{contact.phone}</a></li>
					<li><a href={contact.whatsapp} target="_blank" rel="noopener">WhatsApp</a></li>
				</ul>
			</div>
			<div class="col">
				<h5>Hours</h5>
				<ul>
					{#each contact.hours as h}
					<li>{h.day.replace('–', '–')} · {h.time}</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="bottom">
			<div>© {year} Cosmedent Dental Clinic. All rights reserved.</div>
			<div>Designed with care · Hyderabad</div>
		</div>
	</div>
</footer>

<style>
	footer { background: #15201a; color: rgba(251,249,244,0.8); padding: 80px 0 32px; }
	.container { width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 32px; }
	.grid {
		display: grid; grid-template-columns: 1.2fr 1fr 1fr 1fr;
		gap: 40px; padding-bottom: 56px;
		border-bottom: 1px solid rgba(251,249,244,0.14);
	}
	.mark { font-family: 'Instrument Serif', serif; font-size: 36px; color: #fbf9f4; line-height: 1; }
	.dot { color: #9ec5a8; }
	.sub { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(251,249,244,0.6); margin-top: 8px; display: block; }
	.tag {
		margin-top: 20px; font-family: 'Instrument Serif', serif; font-style: italic;
		font-size: 18px; color: rgba(251,249,244,0.7); max-width: 28ch; line-height: 1.4;
	}
	.col h5 {
		font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
		color: rgba(251,249,244,0.55); margin: 0 0 18px; font-weight: 500;
	}
	.col ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
	.col a, .col button {
		color: rgba(251,249,244,0.88); font-size: 14px;
		background: none; border: none; cursor: pointer; font-family: inherit;
		padding: 0; text-align: left;
	}
	.col a:hover, .col button:hover { color: #fbf9f4; }
	.bottom {
		display: flex; justify-content: space-between; align-items: center;
		padding-top: 28px; font-size: 12px; color: rgba(251,249,244,0.5);
		flex-wrap: wrap; gap: 16px;
	}

	@media (max-width: 860px) { .grid { grid-template-columns: 1fr 1fr; } }
</style>
