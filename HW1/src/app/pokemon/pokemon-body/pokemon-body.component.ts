import {Component, Input, OnInit} from '@angular/core';

import {PokemonService} from '../services/pokemon/pokemon.service';
import {Pokemon} from '../../interfaces';
import {ActivatedRoute} from "@angular/router";

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
    private route: ActivatedRoute,
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
    this.route.queryParams.subscribe(params => {
      const {pokemon} = params;
      if (pokemon)
        this.pokemonService.findByName(pokemon);
    });
    this.getPokemons();
  }

  getStyle(): string {
    return this.pokemonService.style;
  }

  private getPokemons() {
    this.pokemons = this.pokemonService.getAll(this.count);
    this.pokemonService.getPokemonsObservable().subscribe(pokemons => {
      this.pokemons = pokemons;
      console.log(pokemons)
    });

  }
}
