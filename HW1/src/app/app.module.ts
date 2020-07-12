import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PokemonHeaderComponent} from './pokemon/pokemon-header/pokemon-header.component';
import {PokemonBodyComponent} from './pokemon/pokemon-body/pokemon-body.component';
import {PokemonItemComponent} from './pokemon/pokemon-item/pokemon-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonHeaderComponent,
    PokemonBodyComponent,
    PokemonItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
