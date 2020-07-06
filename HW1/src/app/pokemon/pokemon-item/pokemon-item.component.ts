import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pokemon, PokemonAction} from "../../interfaces";


@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})

export class PokemonItemComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Input() style: string;

  @Output() action = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickButtons(event): void {
    const action: boolean = event.target.dataset.action === 'catch';

    const pokemonAction: PokemonAction = {
      id: this.pokemon.id,
      action: action
    };
    this.action.emit(pokemonAction);
  }

  isPowerful(): boolean {
    return this.pokemon.damage > 50;
  }

}
