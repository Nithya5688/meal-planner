import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe, MealCategory } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  @Input({ required: true }) recipe!: Recipe;
  expanded = false;

  get categoryLabel(): string {
    const labels: Record<MealCategory, string> = {
      'high-protein': 'High Protein',
      'high-fiber': 'High Fiber',
      'balanced': 'Balanced'
    };
    return labels[this.recipe.category];
  }

  get categoryClass(): string {
    return `recipe-card--${this.recipe.category}`;
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
  }
}
