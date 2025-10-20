import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './instructors.html',
  imports: [CommonModule],
  styleUrls: ['./instructors.css']
})
export class Instructors implements OnInit {
  sidebarOpen = false;
  courses: any[] = [];
  item = JSON.parse(localStorage.getItem('response') || '{}');
  role = this.item.Role;
  firstname = this.item.Firstname;
  http = inject(HttpClient);
  router = inject(Router);

  ngOnInit() {
    console.log(this.item);

    this.fetchCourses();
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  fetchCourses() {
    // Replace with actual HTTP call
    this.courses = [
      {id:1, title:'Angular 101', description:'Learn Angular basics', price:0, image:'https://via.placeholder.com/220x140'},
      {id:2, title:'React 101', description:'Learn React basics', price:1000, image:'https://via.placeholder.com/220x140'}
    ];
  }

  enroll(courseId:string) {
    alert(`Enrolled in course ${courseId}`);
  }

  createCourse() {
    // Navigate to create course page
  }

  logout() {
    setTimeout(() => {
      this.router.navigate(['/login']);
      localStorage.removeItem('response');
    }, 1000);
  }
}
