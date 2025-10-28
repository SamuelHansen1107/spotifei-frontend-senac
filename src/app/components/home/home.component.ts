import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CardMusicaComponent } from './card-musica/card-musica.component';
import { Musica } from './card-musica/musica';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CardMusicaComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent 
{
  musicas : Musica[] =
  [
    {
      titulo: "Camisa 10",
      artista: "Turma do Pagode",
    },
    {
      titulo: "Faroeste Caboclo",
      artista: "Legião Urbana",
    },
    {
      titulo: "Black",
      artista: "Pearl Jam",
    },
    {
      titulo: "Segundo Sol",
      artista: "Cássia Eller",
    },
    {
      titulo: "Sozinho",
      artista: "Caetano Veloso",
    },
  ];
}
