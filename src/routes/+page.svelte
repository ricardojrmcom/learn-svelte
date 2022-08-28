<script lang="ts">
	import Nav from '$lib/components/Nav/index.svelte';
	import { pokemon } from '$lib/stores/pokestore';
	import PokeCard from '$lib/components/PokeCard/index.svelte';
	import type { Pokemon } from '$lib/stores/pokestore';

	let searchTerm = '';
	let filteredPokemon: Pokemon[] = [];
	let displayPokemon: Pokemon[] = [];

	pokemon.subscribe((data) => {
		displayPokemon = [...data];
	});

	$: {
		console.log({ searchTerm, pokemon });
		if (searchTerm) {
			filteredPokemon = displayPokemon.filter((poke) => poke.name.includes(searchTerm));
		} else {
			filteredPokemon = [...displayPokemon];
		}
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home" />
</svelte:head>

<section>
	<div class="p-8 max-w-6xl mx-auto">
		<div class="mb-6">
			<Nav />
		</div>
		<h1 class="text-3xl font-bold text-center">SVELTE KIT POKEDEX</h1>

		<input
			type="text"
			placeholder="Search Pokemon"
			class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
			bind:value={searchTerm}
		/>

		<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
			{#each filteredPokemon as poke}
				<PokeCard {poke} />
			{/each}
		</div>
	</div>
</section>

<style>
</style>
