import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

import {pokemons} from '../../../../pokemonsLits';
import {Pokemon} from "../../../interfaces";

@Injectable({
  providedIn: 'root',
})

export class PokemonService {

  public style = 'cards'
  private pokemons: Pokemon[] = pokemons;
  private stream = new Subject<any>();
  private storePokemons: Pokemon[];
  private count: number;

  onStyleChange() {
    this.style = this.style === 'cards' ? 'lines' : 'cards';
  }

  init() {
    pokemons.forEach((pokemon) => {
      pokemon.damage = this.getRandomDamage(20, 100);
      pokemon.caught = false;
      let date = new Date(new Date(2016, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2012, 0, 1).getTime()));
      let dateArray = date.toString().split('');
      dateArray.splice(date.toString().indexOf('GMT') - 4);
      pokemon.dateOfCreate = dateArray.join('');

    });

    this.storePokemons = this.pokemons;
  }

  action(pokemonID: number) {
    const pokemonIndex: number = this.pokemons.findIndex(el => el.id === pokemonID);
    const action: string = this.pokemons[pokemonIndex].caught ? 'released' : 'caught';
    this.pokemons[pokemonIndex].caught = !this.pokemons[pokemonIndex].caught;
    alert(`Pokemon ${this.pokemons[pokemonIndex].name} was ${action}`);
    console.log(`Pokemon ${this.pokemons[pokemonIndex].name} was ${action}`);
    this.stream.next(this.pokemons);
  }

  getAll(count: number): Pokemon[] {
    this.pokemons = pokemons.slice(0, count);
    this.count = count;
    this.stream.next(this.pokemons);
    return this.pokemons;
  }

  getPokemonsObservable(): Observable<any> {
    return this.stream.asObservable();
  }

  getById(id: number): Pokemon {
    const pokemonIndex = this.pokemons.findIndex(el => el.id === id);
    if (pokemonIndex >= 0) return this.pokemons[pokemonIndex];
  }

  filter(): Pokemon[] {
    return [...this.pokemons].sort((a, b) => a.name.localeCompare(b.name));
  }

  findByName(name: string): void {
    this.pokemons = [...this.storePokemons.slice(0, this.count).filter(o =>
      o.name.toLowerCase().includes(name.toLowerCase()))]
    this.stream.next(this.pokemons);
  }

  private getRandomDamage(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }


}
