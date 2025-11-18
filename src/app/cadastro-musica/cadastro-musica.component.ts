import { HttpClient } from '@angular/common/http';
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

  nomeMusica = '';
  duracao = '';
  mensagemSucesso = '';

  constructor(private router: Router, private http: HttpClient) {}
  cadastrarMusica(event: Event) {
  event.preventDefault();

  const form = event.target as HTMLFormElement;

  const nome = (form.querySelector('[name="nomeMusica"]') as HTMLInputElement).value;
  const duracao = (form.querySelector('[name="duracao"]') as HTMLInputElement).value;

  const novaMusica = { nome, duracao };

  this.http.post('http://localhost:5214/musicas', novaMusica).subscribe({
    next: () => {
      this.mensagemSucesso = 'Música cadastrada com sucesso!';
      
      form.reset();

      setTimeout(() => this.router.navigate(['/home']), 500);
    },
    error: (erro) => {
      console.error('Erro ao cadastrar música:', erro);
      alert('Erro ao cadastrar música');
    }
  });
}
  /*cadastrarMusica(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const nome = (form.querySelector('[name="nomeMusica"]') as HTMLInputElement).value;
    const duracao = (form.querySelector('[name="duracao"]') as HTMLInputElement).value;
    //const albumId = Number((form.querySelector('[name="albumId"]') as HTMLInputElement).value);
    //const artistaId = Number((form.querySelector('[name="artistaId"]') as HTMLInputElement).value);

    const novaMusica = { nome, duracao /*, albumId, artistaId */ };
    /*console.log('Música cadastrada:', novaMusica);


    this.mensagemSucesso = 'Música cadastrada com sucesso!';
    form.reset();

    this.router.navigate(['/home']);
  }
}*/