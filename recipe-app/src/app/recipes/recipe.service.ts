import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Salmon with Creme',
            'Add creme fraiche to the salmon',
            // tslint:disable-next-line:max-line-length
            'https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=412bda5e6fbc656b7c85247bd0bb3fa1&auto=format&fit=crop&w=800&q=80',
            [
                new Ingredient('Salmon', 2),
                new Ingredient('Creme', 2),
                new Ingredient('Sauce', 2)
            ]
        ),
        new Recipe('Fruit Pie',
            'The best pie in the universe',
            // tslint:disable-next-line:max-line-length
            'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d2452cace2ee90c9781c7a39c9a30cf&auto=format&fit=crop&w=1350&q=80',
            [
                new Ingredient('Strawberries', 2),
                new Ingredient('Creme fraiche', 2),
                new Ingredient('flour', 2)
            ]
        ),
        new Recipe('Veggies and Fish Pho',
            'Best Pho',
            // tslint:disable-next-line:max-line-length
            'https://images.unsplash.com/photo-1436327266874-c2e4e1ac7a97?ixlib=rb-0.3.5&s=aad950e914bd72a4d23e903c125d0985&auto=format&fit=crop&w=1000&q=80',
            [
                new Ingredient('Potatoes', 2),
                new Ingredient('Tuna', 2),
                new Ingredient('Sauce', 2)
            ]
        )
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        // in order to return a new array that is an exact copy of the one we have, we use slice
        // otherwise any edits to the array would affect the original array
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
