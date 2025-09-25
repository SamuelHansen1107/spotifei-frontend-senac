import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class AppComponent {
  title = 'Spotifei';
}
