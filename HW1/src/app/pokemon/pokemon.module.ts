import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonSearchComponent} from './pokemon-search/pokemon-search.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PokemonSearchComponent
  ],
  declarations: [PokemonSearchComponent]
})
export class PokemonModule {
}
