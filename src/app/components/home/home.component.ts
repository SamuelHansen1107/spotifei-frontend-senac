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
  musicasEmAlta : Musica[] =
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
  musicasTopSenac : Musica[] =
  [
    {
      titulo: "Última Saudade",
      artista: "Enrique e Juliano",
    },
    {
      titulo: "Imaturo",
      artista: "Jão",
    },
    {
      titulo: "Mesmice",
      artista: "Simone Mendes",
    },
    {
      titulo: "Billie Jean",
      artista: "Michael Jackson",
    },
    {
      titulo: "Quarto 67",
      artista: "Guilherme e Benuto",
    },
  ];
  musicasOuvidasRecentemente : Musica[] =
  [
    {
      titulo: "Escondendo o Ouro",
      artista: "Zé Neto e Cristiano",
    },
    {
      titulo: "Desocupa",
      artista: "Matheus Vargas",
    },
    {
      titulo: "Tubarões",
      artista: "Diego e Victor Hugo",
    },
    {
      titulo: "Coração Partido",
      artista: "Grupo Menos é Mais",
    },
    {
      titulo: "Baqueado",
      artista: "Panda, Ícaro e Gilmar",
    },
  ]
}
