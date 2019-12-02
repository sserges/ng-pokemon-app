import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BorderCardDirective } from './pokemons/border-card.directive';
import { PokemonTypeColorPipe } from './pokemons/pokemon-type-color.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ListPokemonComponent } from './pokemons/list-pokemon.component';
import { DetailPokemonComponent } from './pokemons/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ 
    AppComponent, 
    BorderCardDirective, 
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PageNotFoundComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
