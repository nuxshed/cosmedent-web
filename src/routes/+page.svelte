<script lang="ts">
	import { setmodal } from '$lib/context.js';
	import Nav from '$lib/components/nav.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Services from '$lib/components/services.svelte';
	import Doctors from '$lib/components/doctors.svelte';
	import Process from '$lib/components/process.svelte';
	import Reviews from '$lib/components/reviews.svelte';
	import Visit from '$lib/components/visit.svelte';
	import Ctastrip from '$lib/components/ctastrip.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Fab from '$lib/components/fab.svelte';
	import Modal from '$lib/components/modal.svelte';

	let show = $state(false);
	setmodal({ open: () => { show = true; } });
</script>

<svelte:head>
	<title>Cosmedent — Specialty Dental Clinic</title>
	<meta name="description" content="Cosmedent Specialty Dental Clinic — cosmetic, restorative and family dentistry in Hyderabad." />
</svelte:head>

<Nav />
<main>
	<Hero />
	<Services />
	<Doctors />
	<Reviews />
	<Process />
	<Visit />
	<Ctastrip />
</main>
<Footer />
<Fab />
<Modal bind:open={show} />
