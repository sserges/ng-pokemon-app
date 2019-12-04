import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemons";
import { PokemonsService } from "./pokemons.service";

@Component({
  selector: "list-pokemon",
  templateUrl: `./app/pokemons/list-pokemon.component.html`,
  providers: [PokemonsService]
})
export class ListPokemonComponent implements OnInit {

  private pokemons: Pokemon[];
  private title: string = "Liste des pokémons";

  constructor(private router: Router, private pokemonsService: PokemonsService) {

  }


  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    console.log("Vous avez cliqué sur " + pokemon.name);
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}
