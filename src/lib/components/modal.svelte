<script lang="ts">
	import { getmodal } from '$lib/context.js';

	let { open = $bindable(false) } = $props<{ open: boolean }>();

	let step = $state<'form' | 'confirm'>('form');
	let slot = $state('17:00');
	let name = $state('');
	let phone = $state('');
	let email = $state('');
	let service = $state('General Consultation');
	let date = $state('');
	let notes = $state('');

	const slots = ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

	function close() {
		open = false;
		setTimeout(() => (step = 'form'), 400);
	}

	$effect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
	});

	$effect(() => {
		if (!open) return;
		const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
		document.addEventListener('keydown', fn);
		return () => document.removeEventListener('keydown', fn);
	});

	$effect(() => {
		date = new Date().toISOString().split('T')[0];
	});
</script>

<div class="backdrop" class:open onclick={(e) => { if (e.target === e.currentTarget) close(); }} role="dialog" aria-modal="true" aria-hidden={!open}>
	<div class="modal">
		<aside class="side">
			<div>
				<div class="lab">Book a Visit</div>
				<h3>A quiet,<br/><em>considered</em> consultation.</h3>
				<p>30 minutes with one of our specialists. We'll listen, examine and walk you through what (if anything) needs doing.</p>
				<ul>
					<li>Digital X-rays included</li>
					<li>Itemised treatment plan</li>
					<li>No-pressure second opinions</li>
				</ul>
			</div>
			<div class="clinic">Shop 8, Nagarjuna Homes,<br/>Nizampet Road · Hyderabad</div>
		</aside>

		<div class="right">
			{#if step === 'form'}
			<form class="form" onsubmit={(e) => { e.preventDefault(); step = 'confirm'; }}>
				<div class="head">
					<h4>Tell us about your visit</h4>
					<button type="button" class="x" onclick={close} aria-label="Close">×</button>
				</div>

				<div class="row2">
					<div class="field"><label>Full Name</label><input type="text" bind:value={name} placeholder="Your name" required /></div>
					<div class="field"><label>Phone</label><input type="tel" bind:value={phone} placeholder="+91" required /></div>
				</div>

				<div class="field"><label>Email (optional)</label><input type="email" bind:value={email} placeholder="you@example.com" /></div>

				<div class="row2">
					<div class="field">
						<label>Service</label>
						<select bind:value={service}>
							<option>General Consultation</option>
							<option>Smile Makeovers &amp; Veneers</option>
							<option>Dental Implants</option>
							<option>Teeth Whitening</option>
							<option>Root Canal Therapy</option>
							<option>Orthodontics &amp; Aligners</option>
							<option>Crowns &amp; Bridges</option>
							<option>Periodontal &amp; Gum Care</option>
							<option>Pediatric Dentistry</option>
							<option>Oral Surgery</option>
						</select>
					</div>
					<div class="field"><label>Preferred Date</label><input type="date" bind:value={date} required /></div>
				</div>

				<div class="field">
					<label>Preferred Time</label>
					<div class="slots">
						{#each slots as t}
						<button type="button" class="slot" class:active={slot === t} onclick={() => slot = t}>{t}</button>
						{/each}
					</div>
				</div>

				<div class="field"><label>Anything we should know? (optional)</label><textarea bind:value={notes} placeholder="Tell us about any pain, prior treatment, or concerns…"></textarea></div>

				<button type="submit" class="submit">Request Appointment <span>→</span></button>
			</form>
			{:else}
			<div class="confirm">
				<div class="check">✓</div>
				<h4>Appointment requested.</h4>
				<p>Thank you — our team will confirm your slot on WhatsApp within a few hours.</p>
				<button type="button" class="ghost" onclick={close}>Close</button>
			</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.backdrop {
		position: fixed; inset: 0;
		background: rgba(12,20,16,0.5);
		backdrop-filter: blur(8px);
		z-index: 100;
		display: flex; align-items: center; justify-content: center;
		padding: 24px;
		opacity: 0; pointer-events: none;
		transition: opacity .35s;
	}
	.backdrop.open { opacity: 1; pointer-events: auto; }

	.modal {
		background: #fbf9f4;
		width: 100%; max-width: 920px;
		max-height: calc(100vh - 48px); overflow: hidden;
		display: grid; grid-template-columns: 0.8fr 1fr;
		transform: translateY(20px) scale(0.98);
		transition: transform .35s ease;
		border: 1px solid #d8d2c4;
	}
	.backdrop.open .modal { transform: translateY(0) scale(1); }

	.side {
		background: #1f3d2c; color: #fbf9f4;
		padding: 40px 36px;
		display: flex; flex-direction: column; justify-content: space-between;
		position: relative; overflow: hidden;
	}
	.side::before {
		content: ""; position: absolute; inset: 0; pointer-events: none;
		background:
			radial-gradient(ellipse at 30% 80%, rgba(207,229,211,0.16), transparent 60%),
			repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 18px);
	}
	.side > * { position: relative; }
	.lab {
		font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
		color: rgba(251,249,244,0.65); margin-bottom: 14px;
	}
	.side h3 {
		font-family: 'Instrument Serif', serif; font-weight: 400;
		font-size: 40px; line-height: 1.04; letter-spacing: -0.01em;
		margin: 0 0 14px;
	}
	.side h3 em { font-style: italic; color: #cfe5d3; }
	.side p { font-size: 14px; color: rgba(251,249,244,0.78); line-height: 1.55; margin: 0; max-width: 30ch; }
	.side ul {
		list-style: none; padding: 0; margin: 32px 0 0;
		display: grid; gap: 12px; font-size: 13px; color: rgba(251,249,244,0.85);
	}
	.side ul li { padding-left: 18px; position: relative; }
	.side ul li::before {
		content: ""; position: absolute; left: 0; top: 8px;
		width: 8px; height: 1px; background: #cfe5d3;
	}
	.clinic {
		font-family: 'Instrument Serif', serif; font-style: italic;
		font-size: 16px; color: rgba(251,249,244,0.7);
		border-top: 1px solid rgba(255,255,255,0.18);
		padding-top: 18px; margin-top: 24px;
	}

	.right { display: flex; flex-direction: column; }

	.form {
		padding: 36px; overflow-y: auto;
		display: flex; flex-direction: column; gap: 18px;
	}
	.head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px; }
	.head h4 {
		font-family: 'Instrument Serif', serif; font-weight: 400;
		font-size: 24px; margin: 0; letter-spacing: -0.01em;
	}
	.x {
		background: transparent; border: 1px solid #d8d2c4;
		width: 32px; height: 32px; border-radius: 50%;
		cursor: pointer; display: flex; align-items: center; justify-content: center;
		color: #6b736e; font-size: 18px; transition: all .2s;
	}
	.x:hover { color: #15201a; border-color: #15201a; }

	.field { display: grid; gap: 6px; }
	.field label { font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #6b736e; }
	.field input, .field select, .field textarea {
		padding: 12px 14px; border: 1px solid #d8d2c4; background: #efeae0;
		font-size: 15px; font-family: inherit; color: #15201a;
		border-radius: 2px; transition: border-color .2s, background .2s;
	}
	.field input:focus, .field select:focus, .field textarea:focus {
		outline: none; border-color: #1f3d2c; background: #fbf9f4;
	}
	.field textarea { resize: vertical; min-height: 72px; }
	.row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

	.slots { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
	.slot {
		border: 1px solid #d8d2c4; background: #efeae0;
		padding: 10px 8px; font-size: 13px; font-family: inherit;
		color: #15201a; cursor: pointer; border-radius: 2px;
		text-align: center; transition: all .2s;
	}
	.slot:hover { border-color: #1f3d2c; color: #1f3d2c; }
	.slot.active { background: #1f3d2c; color: #fbf9f4; border-color: #1f3d2c; }

	.submit {
		margin-top: 6px; background: #1f3d2c; color: #fbf9f4;
		padding: 14px 20px; border: 0; cursor: pointer;
		font-family: inherit; font-size: 15px; font-weight: 500;
		border-radius: 999px; display: inline-flex; align-items: center;
		justify-content: center; gap: 10px; transition: background .2s;
	}
	.submit:hover { background: #2c5a40; }
	.submit span { font-family: 'Instrument Serif', serif; font-size: 18px; }

	.confirm {
		padding: 60px 36px; display: flex; flex-direction: column;
		align-items: center; gap: 20px; text-align: center;
	}
	.check {
		width: 64px; height: 64px; border-radius: 50%;
		background: #d5dfd6; color: #1f3d2c;
		display: flex; align-items: center; justify-content: center;
		font-size: 28px; font-family: 'Instrument Serif', serif;
	}
	.confirm h4 {
		font-family: 'Instrument Serif', serif; font-weight: 400;
		font-size: 32px; margin: 0; letter-spacing: -0.01em;
	}
	.confirm p { color: #6b736e; margin: 0; max-width: 36ch; }
	.ghost {
		border: 1px solid #d8d2c4; background: transparent;
		padding: 12px 24px; border-radius: 999px; font-size: 15px;
		font-family: inherit; color: #15201a; cursor: pointer; transition: all .2s;
	}
	.ghost:hover { border-color: #1f3d2c; color: #1f3d2c; }

	@media (max-width: 720px) {
		.modal { grid-template-columns: 1fr; max-height: calc(100vh - 32px); overflow-y: auto; }
		.side { padding: 28px; }
		.side h3 { font-size: 30px; }
		.row2 { grid-template-columns: 1fr; }
		.slots { grid-template-columns: repeat(3, 1fr); }
	}
</style>
