import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: '/welcome' },
  //{ path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'register', loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule) },
  { path: 'project', loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
