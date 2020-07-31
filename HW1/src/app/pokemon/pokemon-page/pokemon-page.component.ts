import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pokemon} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {PokemonService} from "../services/pokemon/pokemon.service";

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  pokemon: Pokemon;
  @Output() action = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {
  }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const pokemonId: number = +this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokemonService.getById(pokemonId);
    if (!this.pokemon) {
      this.router.navigate(['/']);
    }
  }

  onClickButton(): void {
    this.pokemonService.action(this.pokemon.id);
  }
}
