import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeItem') recipe: {name: string, description: string, imagePath: string};
  @Output() displayEventOne = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  displayItem() {
    this.displayEventOne.emit();
  }
}
