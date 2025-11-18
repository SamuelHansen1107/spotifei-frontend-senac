import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CadastroMusicaComponent } from './cadastro-musica/cadastro-musica.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path:"cadastro",
        component: CadastroComponent
    },
    {
        path: "cadastro-musica",
        component: CadastroMusicaComponent
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    }
];
