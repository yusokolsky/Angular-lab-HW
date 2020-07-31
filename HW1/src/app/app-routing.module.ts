import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonBodyComponent} from './pokemon/pokemon-body/pokemon-body.component';
import {PokemonPageComponent} from './pokemon/pokemon-page/pokemon-page.component';

const routes: Routes = [
  {path: '', component: PokemonBodyComponent},
  {path: 'pokemon/:id', component: PokemonPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
