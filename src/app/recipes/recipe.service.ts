import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor() { }

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://p0.pikist.com/photos/267/533/flat-kitchen-meals-food-delicious-gastronomy-eat-recipe-bio.jpg'),
    new Recipe('Another Test Recipe', 'This is a test', 'https://p0.pikist.com/photos/267/533/flat-kitchen-meals-food-delicious-gastronomy-eat-recipe-bio.jpg')
  ];

  getRecipes(){
    return this.recipes.slice();
  }

}
