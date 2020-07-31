import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonSearchComponent} from './pokemon-search/pokemon-search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PokemonPageComponent} from './pokemon-page/pokemon-page.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PokemonSearchComponent
  ],
  declarations: [PokemonSearchComponent, PokemonPageComponent]
})
export class PokemonModule {
}
