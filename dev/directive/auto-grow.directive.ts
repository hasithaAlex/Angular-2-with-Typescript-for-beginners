import { Directive ,ElementRef, Renderer } from 'angular2/core';

@Directive({
    selector: '[autoGrow]',
    host:{
        '(focus)':'onfocus()',
        '(blur)': 'onblur()'
    }
})

export class AutoGrowDirective{
    constructor(private el: ElementRef,private renderer: Renderer){} 
    onfocus(){
        this.renderer.setElementStyle(this.el,'width','200');
    }
    onblur(){
        this.renderer.setElementStyle(this.el,'width','120');
    }
}