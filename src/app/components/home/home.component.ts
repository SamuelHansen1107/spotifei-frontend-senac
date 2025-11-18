import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CardMusicaComponent } from './card-musica/card-musica.component';
import { Musica } from './card-musica/musica';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CardMusicaComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent 
{
  musicas : Musica [] = [];
  constructor (private httpClient : HttpClient) {}
  ngOnInit(): void{
    this.httpClient.get<Musica[]>('/api/musicas').subscribe((musicas) => this.musicas = musicas);
  }
}
