import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path:'register',
    loadChildren:()=>import('./register/register.module').then(r=>r.RegisterModule)
  },
  {
    path:'login',
    loadChildren:()=>import('./login/login.module').then(l=>l.LoginModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
