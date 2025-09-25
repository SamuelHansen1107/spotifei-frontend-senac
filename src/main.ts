import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/cadastro.config';
import { AppComponent } from './app/cadastro.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
