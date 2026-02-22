export type MealCategory = 'high-protein' | 'high-fiber' | 'balanced';

export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number; // minutes
  cookTime: number; // minutes
  servings: number;
  nutrition: {
    protein: number;  // grams per serving
    fiber: number;   // grams per serving
    carbs: number;
    fat: number;
    calories: number;
  };
  category: MealCategory;
  imageUrl?: string;
}
