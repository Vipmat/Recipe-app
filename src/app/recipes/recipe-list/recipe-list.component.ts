import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();  // The recipeWasSelected event can be listened from its parent
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://p0.pikist.com/photos/267/533/flat-kitchen-meals-food-delicious-gastronomy-eat-recipe-bio.jpg'),
    new Recipe('Another Test Recipe', 'This is a test', 'https://p0.pikist.com/photos/267/533/flat-kitchen-meals-food-delicious-gastronomy-eat-recipe-bio.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
