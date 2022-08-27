import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export interface Pokemon {
	name: string;
	id: number;
	image: string;
}

export const pokemon: Writable<Pokemon[]> = writable([]);

export const fetchPokemon = async (num: number) => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`;
	const res = await fetch(url);
	const data = await res.json();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const loadedPokemon: Pokemon[] = data.results.map((data: any, index: number) => ({
		name: data.name,
		id: index + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			index + 1
		}.png`
	}));
	pokemon.set(loadedPokemon);
};

fetchPokemon(151);
