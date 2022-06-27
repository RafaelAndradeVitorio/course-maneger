import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  filteredCourse: Course[] = []

  _courses: Course[] = []

  _filterBy: string = "";

  constructor(private courseService: CourseService) {

   }

  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll()
    this.filteredCourse = this._courses

  }

  set filter (value: string){
    this._filterBy = value

    this.filteredCourse = this._courses.filter((c: Course) =>c.price.toString().indexOf(this._filterBy) > -1 || c.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1)
  }

  get filter (){
    return this._filterBy
  }

}
