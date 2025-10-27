import { Component, Input } from '@angular/core';
import { Musica } from './musica';

@Component({
  selector: 'app-card-musica',
  standalone: true,
  imports: [],
  templateUrl: './card-musica.component.html',
  styleUrl: './card-musica.component.css'
})
export class CardMusicaComponent
{
  @Input()
  musica : Musica = 
  {
    titulo: "",
    artista: "",
  }
}
