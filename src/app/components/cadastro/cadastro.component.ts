import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [NgIf, FormsModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  nome = '';
  email = '';
  senha = '';
  confirmarSenha = '';
  mensagemSucesso = '';

  constructor(private http: HttpClient, private router: Router) {}

  cadastrarUsuario() {
    if (!this.nome || !this.email || !this.senha || !this.confirmarSenha) {
    alert('Preencha todos os campos obrigatórios');
    return;
  }

    if (this.senha !== this.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    const novoUsuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };

    this.http.post('/api/usuarios', novoUsuario).subscribe({
      next: () => {
        this.mensagemSucesso = 'Usuário cadastrado com sucesso!';
        this.nome = '';
        this.email = '';
        this.senha = '';
        this.confirmarSenha = '';
        setTimeout(() => this.router.navigate(['/login']), 500);
      },
      error: (erro) => {
        console.error('Erro ao cadastrar usuário:', erro);
        alert('Erro ao cadastrar usuário');
      }
    });
  }
}

