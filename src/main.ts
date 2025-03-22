import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/products">All Products</a> |
      <a routerLink="/filtered">Filtered Products</a> |
      <a routerLink="/apple">Apple Products</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  imports: [RouterModule],
  standalone: true,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideHttpClient(), provideRouter(routes)],
});
