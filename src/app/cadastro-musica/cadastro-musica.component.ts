import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-musica',
  standalone: true,
  imports: [],
  templateUrl: './cadastro-musica.component.html',
  styleUrl: './cadastro-musica.component.css'
})
export class CadastroMusicaComponent {
  mensagemSucesso = '';

  constructor(private router: Router) {}

  cadastrarMusica(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const nome = (form.querySelector('[name="nomeMusica"]') as HTMLInputElement).value;
    const artista = (form.querySelector('[name="artista"]') as HTMLInputElement).value;
    const genero = (form.querySelector('[name="genero"]') as HTMLInputElement).value;
    const link = (form.querySelector('[name="link"]') as HTMLInputElement).value;

    console.log('Música cadastrada:', { nome, artista, genero, link });

    this.mensagemSucesso = 'Música cadastrada com sucesso!';
    form.reset();

    this.router.navigate(['/home']);
  }
}
