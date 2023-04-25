import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    path: '', component: HeaderComponent, children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home', loadComponent: () => import('./components/home/home.component')
          .then(h => h.HomeComponent)
      },
      {
        path: 'add-anime', loadComponent: () => import('./components/add-anime/add-anime.component')
          .then(a => a.AddAnimeComponent)
      },
      {
        path: 'info-anime:idAnime', loadComponent: () => import('./components/info-anime/info-anime.component')
          .then(i => i.InfoAnimeComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
