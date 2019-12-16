import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { PokemonsService } from './pokemons.service';
import { EditPokemonComponent } from './edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form.component';
import { PokemonSearchComponent } from './search-pokemon.component';
import { LoaderComponent } from '../loader.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
        PokemonRoutingModule
	],
	declarations: [
		ListPokemonComponent,
		DetailPokemonComponent,
		BorderCardDirective,
		PokemonTypeColorPipe,
		EditPokemonComponent,
		PokemonFormComponent,
		PokemonSearchComponent,
		LoaderComponent
	],
	providers: [PokemonsService]
})
export class PokemonsModule { }