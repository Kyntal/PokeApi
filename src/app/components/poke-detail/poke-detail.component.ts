import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit {

  pokemon: any = '';
  pokemonType = [];
  pokemonImg = '';
  constructor(private pokemonService: PokemonService,
              private activatedRouter: ActivatedRoute) { 
                this.activatedRouter.params.subscribe(
                  params => {
                    this.getPokemon(params['id']);
                  }
                )
              }

  ngOnInit() {
  }

  getPokemon(id) {
    this.pokemonService.getPokemon(id).subscribe(
      res => {
        console.log(res);
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;
      },
      err => {
        console.log(err);
      }
    );
  }
}
