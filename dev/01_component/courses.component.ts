import { Component } from 'angular2/core';
import { CourseService } from './course.servece';

@Component({
    selector: 'courses',
    template: `
    <h1>Courses</h1>
    - {{title}}
    <ul *ngFor="#course of courses">
        <li>{{course}}</li>
    </ul>
    `,
    providers: [CourseService]

})

export class CoursesComponent{
    title: string = "Software Engineering";
    courses: string[] = [];

    constructor(courseService: CourseService){
        let courses =  courseService.getCourses();

        for (var index = 0; index < courses.length; index++) {
            this.courses.push(courses[index]);
        }
    }
}