import {Component} from 'angular2/core';

@Component({
    selector: 'short-course',
    template: `
        <h1>Short Course</h1>
        <ul *ngFor="#course of courses">
            <li>{{course}}</li>        
        </ul>
    `
})

export class ShortCourseComponent{
    title = "MS-Office"
    courses = ["WORD","EXEL"]
}