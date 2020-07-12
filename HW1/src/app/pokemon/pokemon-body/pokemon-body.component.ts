import {Component, Input, OnInit} from '@angular/core';

import {PokemonService} from '../services/pokemon/pokemon.service';
import {Pokemon} from '../../interfaces';

@Component({
  selector: 'app-pokemon-body',
  templateUrl: './pokemon-body.component.html',
  styleUrls: ['./pokemon-body.component.css']
})
export class PokemonBodyComponent implements OnInit {

  @Input() style: string;

  count = 100;

  pokemons: Pokemon[] = [];

  constructor(
    private pokemonService: PokemonService,
  ) {
  }

  onAction(pokemonId: number): void {
    this.pokemonService.action(pokemonId);
  }

  countChange(count): void {
    this.count = count;
    this.getPokemons();
    this.pokemons = this.pokemonService.filter();
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  private getPokemons() {
    this.pokemonService.getAll(this.count).subscribe(pokemons => this.pokemons = pokemons);


  }

}
