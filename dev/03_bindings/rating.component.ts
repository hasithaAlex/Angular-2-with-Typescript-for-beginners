import{ Component } from 'angular2/core';

@Component({
    selector: 'star',
    template: `
       <i class="glyphicon"
       [class.glyphicon-star-empty]="!isFavorite"
       [class.glyphicon-star]="isFavorite"
       (click)=onClick()>Hi {{isFavorite}}</i>     
    `
})

export class RatingComponent{
    isFavorite = false;

    onClick(){
        this.isFavorite = !this.isFavorite;
    }
}