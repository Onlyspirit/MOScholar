import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Signup } from './signup/signup';
import { Login } from './login/login';
import { Pagenotfound } from './pagenotfound/pagenotfound';

export const routes: Routes = [
  { path: 'signup', component: Signup },
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: '404page', component: Pagenotfound },
  { path: 'home', component: Home },
  { path: '**', redirectTo: '404page' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];
