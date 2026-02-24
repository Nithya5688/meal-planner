import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.model';
import { MealCategory } from '../models/recipe.model';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RecipeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ingredients: string[] = [];
  currentIngredient = '';
  selectedCategory: MealCategory | null = null;
  recipes: Recipe[] = [];
  categories = this.recipeService.getCategories();

  constructor(private recipeService: RecipeService) {
    this.search();
    //Search for git rebase - main
    //Search for git rebase - Feature

  }

  addIngredient(): void {
    const trimmed = this.currentIngredient.trim();
    if (trimmed && !this.ingredients.includes(trimmed)) {
      this.ingredients.push(trimmed);
      this.currentIngredient = '';
      this.search();
            //Search for git merge - FEature
    }
  }

  removeIngredient(ingredient: string): void {
    this.ingredients = this.ingredients.filter(i => i !== ingredient);
    this.search();
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.addIngredient();
    }
  }

  setCategory(cat: MealCategory | null): void {
    this.selectedCategory = cat;
    this.search();
  }

  search(): void {
    this.recipes = this.recipeService.getRecipesByIngredients(
      this.ingredients,
      this.selectedCategory ?? undefined
    );
  }
}
