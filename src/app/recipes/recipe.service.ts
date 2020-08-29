import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://p0.pikist.com/photos/267/533/flat-kitchen-meals-food-delicious-gastronomy-eat-recipe-bio.jpg',
      [new Ingredient('Biscuits', 11), new Ingredient('Nuts', 20)]
    ),
    new Recipe(
      'Burger',
      'Fast Food Bites',
      'https://www.maxpixel.net/static/photo/1x/Food-Fries-Burger-Tasty-Fat-Delicious-Hamburger-4333831.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
