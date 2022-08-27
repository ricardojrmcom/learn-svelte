<script lang="ts">
	import Nav from '$lib/components/Nav/index.svelte';
	import { pokemon } from '$lib/stores/pokestore';

	console.log($pokemon);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home" />
</svelte:head>

<section>
	<div>
		<Nav />
	</div>
	<h1>Home</h1>
	<div>
		{#each $pokemon as poke}
			<p>{poke.name}</p>
		{/each}
	</div>
</section>

<style>
</style>
