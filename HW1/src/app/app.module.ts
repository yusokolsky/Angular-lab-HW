import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonHeaderComponent } from './pokemon/pokemon-header/pokemon-header.component';
import { PokemonBodyComponent } from './pokemon/pokemon-body/pokemon-body.component';
import { PokemonFooterComponent } from './pokemon/pokemon-footer/pokemon-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonHeaderComponent,
    PokemonBodyComponent,
    PokemonFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
