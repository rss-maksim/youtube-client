import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './youtube/pages/not-found/not-found.component';
import { Auth2Guard } from './auth/guards/auth2.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule), canLoad: [Auth2Guard] },
  { path: '', redirectTo: 'home', pathMatch: 'full', canLoad: [Auth2Guard] },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
