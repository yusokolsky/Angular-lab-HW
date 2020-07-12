import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {Pokemon} from "../../interfaces";


@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PokemonItemComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Input() style: string;

  @Output() action = new EventEmitter();

  constructor(public cd: ChangeDetectorRef) {

  }

  ngOnChanges(): void {
    this.cd.detectChanges();
  }

  onClickButton(): void {
    this.action.emit(this.pokemon.id);
  }

  isPowerful(): boolean {
    return this.pokemon.damage > 50;
  }

  ngOnInit(): void {
  }

}
