// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { exhaustMap, map, take, tap } from 'rxjs/operators';
// import { Store } from '@ngrx/store';

// import { Recipe } from '../recipes/recipe.model';
// import { RecipeService } from '../recipes/recipe.service';
// import { AuthService } from '../auth/auth.service';
// import * as fromApp from '../store/app.reducer';
// import * as RecipesActions from '../recipes/store/recipe.actions';

// @Injectable({
//   providedIn: 'root',
// })
// export class DataStorageService {
//   constructor(
//     private http: HttpClient,
//     private recipesService: RecipeService,
//     // private authService: AuthService
//     private store: Store<fromApp.AppState>
//   ) {}

//   storeRecipes() {
//     const recipes = this.recipesService.getRecipes();
//     this.http
//       .put('https://recipe-app-8df06.firebaseio.com/recipes.json', recipes)
//       .subscribe((response) => {
//         console.log(response);
//       });
//   }

//   fetchRecipes() {
//     return this.http
//       .get<Recipe[]>('https://recipe-app-8df06.firebaseio.com/recipes.json')
//       .pipe(
//         map((recipes) => {
//           return recipes.map((recipe) => {
//             return {
//               ...recipe,
//               ingredients: recipe.ingredients ? recipe.ingredients : [],
//             };
//           });
//         }),
//         tap((recipes) => {
//           // this.recipesService.setRecipes(recipes);
//           this.store.dispatch(new RecipesActions.SetRecipes(recipes));
//         })
//       );
//   }
// }
