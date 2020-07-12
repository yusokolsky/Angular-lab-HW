import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {pokemons} from '../../../../pokemonsLits';
import {Pokemon} from "../../../interfaces";

@Injectable({
  providedIn: 'root',
})

export class PokemonService {

  private pokemons: Pokemon[] = pokemons;

  action(pokemonID: number) {
    const pokemonIndex: number = this.pokemons.findIndex(el => el.id === pokemonID);
    const action: string = this.pokemons[pokemonIndex].caught ? 'released' : 'caught';
    this.pokemons[pokemonIndex].caught = !this.pokemons[pokemonIndex].caught;
    alert(`Pokemon ${this.pokemons[pokemonIndex].name} was ${action}`);
    console.log(`Pokemon ${this.pokemons[pokemonIndex].name} was ${action}`);
  }

  getAll(count: number): Observable<Pokemon[]> {
    pokemons.forEach((pokemon) => {
      pokemon.damage = this.getRandomDamage(20, 100);
      pokemon.caught = false;
    });
    this.pokemons = pokemons.slice(0, count);
    return of(this.pokemons);
  }

  getById(id: number): Pokemon | number {
    const pokemonIndex = this.pokemons.findIndex(el => el.id === id);
    return pokemonIndex > -1 ? this.pokemons[pokemonIndex] : pokemonIndex;
  }

  filter(): Pokemon[] {
    return [...this.pokemons].sort((a, b) => a.name.localeCompare(b.name));
  }

  private getRandomDamage(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }


}
