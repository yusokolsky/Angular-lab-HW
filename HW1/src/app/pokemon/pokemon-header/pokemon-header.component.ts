import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.css']
})
export class PokemonHeaderComponent implements OnInit {

  @Input() style: string;

  @Output() styleChange = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
