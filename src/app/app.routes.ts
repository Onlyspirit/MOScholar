import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Signup } from './signup/signup';
import { Login } from './login/login';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Landing } from './landingpage/landingpage';
import { Instructors } from './instructors/instructors';
import { Students } from './students/students';
// import { AuthGuard } from './auth-guard';
export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' }, // ✅ default route
  { path: 'landing', component: Landing },
  { path: 'home', component: Home },
  { path: 'signup', component: Signup },
  { path: 'login', component: Login },
  { path: 'instructor', component: Instructors, },
  { path: 'student', component: Students,  },
  { path: '404page', component: Pagenotfound },
  { path: '**', redirectTo: '404page' } // ✅ wildcard last
];
