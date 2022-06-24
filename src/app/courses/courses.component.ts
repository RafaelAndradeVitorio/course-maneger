import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = []

  constructor(private courseService: CourseService) {

   }

  ngOnInit(): void {
    this.courses = this.courseService.retrieveAll()

  }

}
