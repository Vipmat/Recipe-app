import { Ingredient } from '../shared/ingredient.model';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Mangoes', 4),
    new Ingredient('Potatoes', 15),
  ],
};

export function shoppingListReducer(state = initialState, action) {}
