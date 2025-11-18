import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  senha = '';
  lembrarEmail = false;
  mensagemErro = '';

  constructor(private http: HttpClient, private router: Router) { }

  fazerLogin() {
    this.http.get<any[]>('/api/usuarios').subscribe({
      next: (usuarios) => {
        const usuarioEncontrado = usuarios.find(u => u.email === this.email && u.senha === this.senha);

        if (usuarioEncontrado) {
          this.router.navigate(['/home']);
        } else {
          this.mensagemErro = 'E-mail ou senha inválidos';
        }
      },
      error: (erro) => {
        console.error('Erro ao buscar usuários:', erro);
        alert('Erro ao conectar com o servidor');
      }
    });
  }


}
