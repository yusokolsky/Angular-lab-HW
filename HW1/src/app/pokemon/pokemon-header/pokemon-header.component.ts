import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PokemonService} from "../services/pokemon/pokemon.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.css']
})
export class PokemonHeaderComponent implements OnInit {

  @Input() style: string;

  @Output() styleChange = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {
  }

  ngOnInit(): void {
    this.pokemonService.init();
  }

  getStyle(): string {
    return this.pokemonService.style;
  }

  styleChanger(): void {
    this.pokemonService.onStyleChange();
  }

}
