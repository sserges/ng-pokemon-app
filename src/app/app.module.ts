import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { PokemonsModule } from './pokemons/pokemons.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpClientModule,
    PokemonsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    PageNotFoundComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
