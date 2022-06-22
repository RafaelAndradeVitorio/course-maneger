import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = []

  constructor() { }

  ngOnInit(): void {
    this.courses = [{
      id: 1,
      name: 'curso 1',
      duration: 2,
      rating: 5.4,
      imgUrl: '/assets/images/forms.png',
      price: 99.99,
      code: 'D1an-nna',
      releaseDate: "02/03/1998"
    },
    {
      id: 2,
      name: 'curso 2',
      duration: 80,
      rating: 4,
      imgUrl: '/assets/images/http.png',
      price: 96.99,
      code: 'Ga-el',
      releaseDate: "02/09/2000"
    }
  ]

  }

}
