import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CardMusicaComponent } from './card-musica/card-musica.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CardMusicaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
