import {Component, Input, OnInit} from '@angular/core';

import {Pokemon} from '../../interfaces';
import {pokemons} from '../../../pokemonsLits';

@Component({
  selector: 'app-pokemon-body',
  templateUrl: './pokemon-body.component.html',
  styleUrls: ['./pokemon-body.component.css']
})
export class PokemonBodyComponent implements OnInit {

  @Input() style: string;

  count = 100;

  pokemons: Pokemon[] = [];

  constructor() {
  }

  onAction(event): void {
    const pokemonIndex: number = this.pokemons.findIndex(el => el.id === event.id);
    const action: string = event.action ? 'caught' : 'released';
    alert(`Pokemon ${this.pokemons[pokemonIndex].name} was ${action}`);
    console.log(`Pokemon ${this.pokemons[pokemonIndex].name} was ${action}`);
  }

  countChange(count): void {
    this.count = count;
    this.getPokemons();
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  private getPokemons() {
    pokemons.forEach((pokemon, index) => {
      pokemon.damage = this.getRandomDamage(20, 100);
    });
    this.pokemons = pokemons.slice(0, this.count);

  }

  private getRandomDamage(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
