import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {ShortCourseComponent} from './shortCourses.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>SLIIT</h1>
        <courses></courses>
        <short-course></short-course>
    `,
    directives: [CoursesComponent,ShortCourseComponent]
})
export class AppComponent {

}