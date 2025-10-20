import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  imports: [],
  templateUrl: './pagenotfound.html',
  styleUrl: './pagenotfound.css'
})
export class Pagenotfound {
  constructor(private router: Router) { }
  login() {
    this.router.navigate(['./login'])
  }
}
