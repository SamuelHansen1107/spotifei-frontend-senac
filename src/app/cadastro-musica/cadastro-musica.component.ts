import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-musica',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './cadastro-musica.component.html',
  styleUrl: './cadastro-musica.component.css'
})
export class CadastroMusicaComponent {

  nomeMusica = '';
  duracao = '';
  albumId = '';
  artistaId = '';
  mensagemSucesso = '';


  constructor(private router: Router, private http: HttpClient) { }


  cadastrarMusica() {
    const novaMusica = {
      titulo: this.nomeMusica,
      duracao: this.duracao,
      albumId: this.albumId,
      artistaId: this.artistaId
    };

    this.http.post('/api/musicas', novaMusica).subscribe({
      next: () => {
        this.mensagemSucesso = 'Música cadastrada com sucesso!';
        this.nomeMusica = '';
        this.duracao = '';
        setTimeout(() => this.router.navigate(['/home']), 500);
      },
      error: (erro) => {
        console.error('Erro ao cadastrar música:', erro);
        alert('Erro ao cadastrar música');
      }
    });
  }
}
  /*cadastrarMusica(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const nome = (form.querySelector('[name="nomeMusica"]') as HTMLInputElement).value;
    const duracao = (form.querySelector('[name="duracao"]') as HTMLInputElement).value;
    //const albumId = Number((form.querySelector('[name="albumId"]') as HTMLInputElement).value);
    //const artistaId = Number((form.querySelector('[name="artistaId"]') as HTMLInputElement).value);

    const novaMusica = { nome, duracao /*, albumId, artistaId */ ;
/*console.log('Música cadastrada:', novaMusica);


this.mensagemSucesso = 'Música cadastrada com sucesso!';
form.reset();

this.router.navigate(['/home']);
}
}*/