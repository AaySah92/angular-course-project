import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() displayEventTwo = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'First Recipe', 
      'First Recipe Description', 
      'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

  displayItem(recipe: Recipe) {
    this.displayEventTwo.emit(recipe);
  }
}
