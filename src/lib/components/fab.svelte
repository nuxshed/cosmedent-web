<script lang="ts">
	import { getmodal } from '$lib/context.js';
	import raw from '$lib/data/contact.json';
	const modal = getmodal();
	const contact = raw as { phoneraw: string; whatsapp: string };
</script>

<div class="fab">
	<button class="btn primary" onclick={() => modal.open()} aria-label="Book Appointment">
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
			<rect x="3" y="5" width="18" height="16" rx="1.5" />
			<path d="M3 9 H21" /><path d="M8 3 V7" /><path d="M16 3 V7" />
			<path d="M8 13 H10" /><path d="M14 13 H16" /><path d="M8 17 H10" /><path d="M14 17 H16" />
		</svg>
		<span class="tip">Book a Slot</span>
	</button>
	<a class="btn whatsapp" href={contact.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp">
		<svg viewBox="0 0 24 24" fill="currentColor">
			<path d="M17.6 14.3c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.9-2.1-.2-.5-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 22c-1.7 0-3.3-.5-4.7-1.3L3 22l1.3-4.1C3.4 16.5 3 14.8 3 13 3 7.5 7.5 3 13 3s10 4.5 10 10-4.5 10-10 10h-1z"/>
		</svg>
		<span class="tip">WhatsApp</span>
	</a>
	<a class="btn" href="tel:{contact.phoneraw}" aria-label="Call">
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
			<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
		</svg>
		<span class="tip">Call Clinic</span>
	</a>
</div>

<style>
	.fab {
		position: fixed; left: 24px; bottom: 24px; z-index: 60;
		display: flex; flex-direction: column-reverse; gap: 12px; align-items: flex-start;
	}
	.btn {
		width: 52px; height: 52px; border-radius: 50%;
		border: 1px solid #d8d2c4; background: #fbf9f4; color: #15201a;
		display: flex; align-items: center; justify-content: center;
		cursor: pointer; box-shadow: 0 8px 24px -10px rgba(20,32,26,0.35);
		transition: all .25s; position: relative; font-family: inherit; text-decoration: none;
	}
	.btn svg { width: 22px; height: 22px; }
	.btn:hover { transform: translateY(-2px); border-color: #1f3d2c; color: #1f3d2c; }
	.btn.primary {
		background: #1f3d2c; color: #fbf9f4; border-color: #1f3d2c;
		width: 60px; height: 60px;
	}
	.btn.primary:hover { background: #2c5a40; border-color: #2c5a40; transform: translateY(-2px); }
	.btn.whatsapp:hover { color: #25D366; border-color: #25D366; }
	.tip {
		position: absolute; left: 68px; top: 50%;
		transform: translateY(-50%) translateX(-6px);
		background: #15201a; color: #fbf9f4;
		font-size: 12px; padding: 6px 12px; border-radius: 999px;
		white-space: nowrap; opacity: 0; pointer-events: none;
		transition: all .2s; letter-spacing: 0.04em; font-family: inherit;
	}
	.btn:hover .tip { opacity: 1; transform: translateY(-50%) translateX(0); }

	@media (max-width: 720px) { .fab { left: 16px; bottom: 16px; } }
</style>
