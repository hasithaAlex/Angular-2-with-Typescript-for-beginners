import { Component } from 'angular2/core';
import { CourseService } from './services/course.servece';
import { AutoGrowDirective} from './directive/auto-grow.directive';

@Component({
    selector: 'courses',
    template: `
    <h1>Courses</h1>
    <input type="text" autoGrow/>
    - {{title}}
    <ul *ngFor="#course of courses">
        <li>{{course}}</li>
    </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective] 

})

export class CoursesComponent{
    title: string = "Software Engineering";
    courses: string[] = [];

    constructor(courseService: CourseService){
        debugger;
        let courses =  courseService.getCourses();

        for (var index = 0; index < courses.length; index++) {
            this.courses.push(courses[index]);
        }
    }
}