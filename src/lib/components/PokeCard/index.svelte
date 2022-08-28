<script lang="ts">
	import type { Pokemon } from '$lib/stores/pokestore';

	export let poke: Pokemon;
</script>

<a
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={`/pokemon/${poke.id}`}
>
	<img class="h-40 w-40" src={poke.image} title={poke.name} alt={poke.name} />
	<h2 class="uppercase text-2xl">{poke.id}. {poke.name}</h2>
</a>
