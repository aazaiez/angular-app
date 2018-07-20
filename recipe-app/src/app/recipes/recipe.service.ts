import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        // tslint:disable-next-line:max-line-length
        new Recipe('Test Recipe #1', 'This is the first test recipe', 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=412bda5e6fbc656b7c85247bd0bb3fa1&auto=format&fit=crop&w=800&q=80'),
        // tslint:disable-next-line:max-line-length
        new Recipe('Test Recipe #2', 'This is the second test recipe', 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d2452cace2ee90c9781c7a39c9a30cf&auto=format&fit=crop&w=1350&q=80'),
        // tslint:disable-next-line:max-line-length
        new Recipe('Test Recipe #3', 'This is the third test recipe', 'https://images.unsplash.com/photo-1436327266874-c2e4e1ac7a97?ixlib=rb-0.3.5&s=aad950e914bd72a4d23e903c125d0985&auto=format&fit=crop&w=1000&q=80')

    ];

    getRecipes() {
        // in order to return a new array that is an exact copy of the one we have, we use slice
        // otherwise any edits to the array would affect the original array
        return this.recipes.slice();
    }
}
