import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PokemonService} from "../services/pokemon/pokemon.service";

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {
  name = new FormControl('');

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(({pokemon}) => this.name.setValue(pokemon));
  }

  onClickSearch() {
    this.router.navigate(['/'], {queryParams: {pokemon: this.name.value}});
    this.pokemonService.findByName(this.name.value);
  }
}
