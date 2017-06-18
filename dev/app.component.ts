import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {ShortCourseComponent} from './shortCourses.component';
import {RatingComponent} from './03_bindings/rating.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>SLIIT</h1>
        <courses></courses>
        <short-course></short-course>
        <star></star>
    `,
    directives: [CoursesComponent,ShortCourseComponent,RatingComponent]
})
export class AppComponent {

}