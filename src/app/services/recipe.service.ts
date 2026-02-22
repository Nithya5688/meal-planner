import { Injectable } from '@angular/core';
import { Recipe, MealCategory } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: '1',
      name: 'Grilled Chicken & Quinoa Bowl',
      description: 'Lean protein-packed bowl with quinoa, grilled chicken, and roasted vegetables.',
      ingredients: ['chicken breast', 'quinoa', 'broccoli', 'bell pepper', 'olive oil', 'lemon', 'garlic'],
      instructions: [
        'Cook quinoa according to package directions.',
        'Season chicken with salt, pepper, and garlic. Grill 6-7 min per side.',
        'Roast broccoli and bell pepper with olive oil at 400°F for 20 min.',
        'Assemble bowl with quinoa base, sliced chicken, and vegetables. Drizzle with lemon juice.'
      ],
      prepTime: 15,
      cookTime: 25,
      servings: 4,
      nutrition: { protein: 42, fiber: 6, carbs: 35, fat: 12, calories: 420 },
      category: 'high-protein'
    },
    {
      id: '2',
      name: 'Lentil & Chickpea Power Salad',
      description: 'Fiber-rich salad with lentils, chickpeas, and a tangy tahini dressing.',
      ingredients: ['lentils', 'chickpeas', 'spinach', 'cucumber', 'tomato', 'red onion', 'tahini', 'lemon'],
      instructions: [
        'Cook lentils until tender, drain and cool.',
        'Rinse chickpeas and combine with lentils.',
        'Chop vegetables and add to legume mixture.',
        'Whisk tahini, lemon juice, and water for dressing. Toss salad and serve.'
      ],
      prepTime: 20,
      cookTime: 25,
      servings: 4,
      nutrition: { protein: 18, fiber: 15, carbs: 45, fat: 14, calories: 380 },
      category: 'high-fiber'
    },
    {
      id: '3',
      name: 'Salmon with Roasted Vegetables',
      description: 'Omega-3 rich salmon paired with fiber-packed roasted vegetables.',
      ingredients: ['salmon', 'asparagus', 'sweet potato', 'brussels sprouts', 'olive oil', 'dill'],
      instructions: [
        'Preheat oven to 425°F. Toss vegetables with olive oil and roast 25 min.',
        'Season salmon with dill, salt, and pepper. Bake 12-15 min until flaky.',
        'Serve salmon over roasted vegetables.'
      ],
      prepTime: 15,
      cookTime: 30,
      servings: 2,
      nutrition: { protein: 38, fiber: 8, carbs: 28, fat: 22, calories: 450 },
      category: 'balanced'
    },
    {
      id: '4',
      name: 'Greek Yogurt Parfait with Berries',
      description: 'High-protein breakfast with Greek yogurt, nuts, and fiber-rich berries.',
      ingredients: ['greek yogurt', 'berries', 'oats', 'almonds', 'honey', 'chia seeds'],
      instructions: [
        'Layer Greek yogurt in a bowl.',
        'Add mixed berries and a sprinkle of oats.',
        'Top with almonds, chia seeds, and a drizzle of honey.'
      ],
      prepTime: 5,
      cookTime: 0,
      servings: 1,
      nutrition: { protein: 28, fiber: 9, carbs: 42, fat: 16, calories: 420 },
      category: 'high-protein'
    },
    {
      id: '5',
      name: 'Black Bean & Avocado Wrap',
      description: 'Fiber-packed wrap with black beans, avocado, and fresh vegetables.',
      ingredients: ['black beans', 'avocado', 'whole wheat tortilla', 'corn', 'lime', 'cilantro', 'red cabbage'],
      instructions: [
        'Mash avocado with lime juice and cilantro.',
        'Warm tortilla. Spread avocado mixture.',
        'Add black beans, corn, and shredded cabbage. Roll and serve.'
      ],
      prepTime: 10,
      cookTime: 0,
      servings: 2,
      nutrition: { protein: 14, fiber: 18, carbs: 52, fat: 20, calories: 410 },
      category: 'high-fiber'
    },
    {
      id: '6',
      name: 'Turkey & Vegetable Stir-Fry',
      description: 'Balanced stir-fry with lean turkey and colorful vegetables over brown rice.',
      ingredients: ['ground turkey', 'brown rice', 'broccoli', 'carrots', 'snap peas', 'soy sauce', 'ginger', 'garlic'],
      instructions: [
        'Cook brown rice according to package directions.',
        'Stir-fry turkey until browned. Add ginger and garlic.',
        'Add vegetables and stir-fry until tender-crisp. Add soy sauce.',
        'Serve over brown rice.'
      ],
      prepTime: 15,
      cookTime: 20,
      servings: 4,
      nutrition: { protein: 35, fiber: 6, carbs: 38, fat: 10, calories: 390 },
      category: 'balanced'
    },
    {
      id: '7',
      name: 'Egg White Omelette with Vegetables',
      description: 'Protein-packed omelette with spinach, mushrooms, and tomatoes.',
      ingredients: ['egg whites', 'spinach', 'mushrooms', 'tomato', 'feta cheese', 'olive oil'],
      instructions: [
        'Sauté vegetables in olive oil until tender.',
        'Pour egg whites over vegetables. Cook until set.',
        'Add feta, fold omelette, and serve.'
      ],
      prepTime: 5,
      cookTime: 8,
      servings: 1,
      nutrition: { protein: 32, fiber: 3, carbs: 8, fat: 12, calories: 280 },
      category: 'high-protein'
    },
    {
      id: '8',
      name: 'Oat Bran with Apples & Cinnamon',
      description: 'Warm, fiber-rich breakfast with oat bran and stewed apples.',
      ingredients: ['oat bran', 'apple', 'cinnamon', 'walnuts', 'maple syrup'],
      instructions: [
        'Cook oat bran with water according to package directions.',
        'Stew diced apple with cinnamon until soft.',
        'Top oat bran with apples, walnuts, and a drizzle of maple syrup.'
      ],
      prepTime: 5,
      cookTime: 10,
      servings: 1,
      nutrition: { protein: 10, fiber: 12, carbs: 48, fat: 8, calories: 310 },
      category: 'high-fiber'
    },
    {
      id: '9',
      name: 'Mediterranean Buddha Bowl',
      description: 'Balanced bowl with chickpeas, quinoa, hummus, and fresh vegetables.',
      ingredients: ['chickpeas', 'quinoa', 'hummus', 'cucumber', 'tomato', 'kalamata olives', 'feta', 'lemon'],
      instructions: [
        'Cook quinoa. Roast chickpeas with spices until crispy.',
        'Arrange quinoa, chickpeas, and chopped vegetables in a bowl.',
        'Add hummus, olives, feta, and lemon juice.'
      ],
      prepTime: 20,
      cookTime: 25,
      servings: 2,
      nutrition: { protein: 22, fiber: 11, carbs: 48, fat: 18, calories: 440 },
      category: 'balanced'
    },
    {
      id: '10',
      name: 'Tuna & White Bean Salad',
      description: 'High-protein tuna salad with fiber-rich white beans and greens.',
      ingredients: ['tuna', 'white beans', 'arugula', 'red onion', 'lemon', 'olive oil', 'parsley'],
      instructions: [
        'Drain tuna and white beans. Combine in a bowl.',
        'Add arugula, thinly sliced red onion, and parsley.',
        'Dress with lemon juice and olive oil. Toss and serve.'
      ],
      prepTime: 10,
      cookTime: 0,
      servings: 2,
      nutrition: { protein: 40, fiber: 8, carbs: 22, fat: 14, calories: 360 },
      category: 'high-protein'
    },
    {
      id: '11',
      name: 'Roasted Root Vegetable Medley',
      description: 'Fiber-rich roasted vegetables with herbs and a light vinaigrette.',
      ingredients: ['beets', 'carrots', 'parsnips', 'turnips', 'olive oil', 'thyme', 'balsamic vinegar'],
      instructions: [
        'Preheat oven to 425°F. Cut vegetables into uniform pieces.',
        'Toss with olive oil and thyme. Roast 35-40 min until tender.',
        'Drizzle with balsamic vinegar before serving.'
      ],
      prepTime: 15,
      cookTime: 40,
      servings: 4,
      nutrition: { protein: 4, fiber: 14, carbs: 42, fat: 8, calories: 260 },
      category: 'high-fiber'
    },
    {
      id: '12',
      name: 'Grilled Shrimp & Vegetable Skewers',
      description: 'Balanced meal with lean shrimp and grilled vegetables.',
      ingredients: ['shrimp', 'zucchini', 'bell pepper', 'red onion', 'olive oil', 'lemon', 'herbs'],
      instructions: [
        'Thread shrimp and vegetables onto skewers.',
        'Brush with olive oil and season with herbs.',
        'Grill 3-4 min per side until shrimp is opaque. Serve with lemon.'
      ],
      prepTime: 15,
      cookTime: 10,
      servings: 2,
      nutrition: { protein: 36, fiber: 4, carbs: 12, fat: 14, calories: 320 },
      category: 'balanced'
    }
  ];

  getRecipesByIngredients(userIngredients: string[], category?: MealCategory): Recipe[] {
    const normalizedUser = userIngredients.map(i => i.toLowerCase().trim()).filter(Boolean);
    
    if (normalizedUser.length === 0) {
      return this.filterByCategory(this.recipes, category);
    }

    const matched = this.recipes.filter(recipe => {
      const recipeIngredientSet = new Set(
        recipe.ingredients.flatMap(ing => 
          ing.toLowerCase().split(/[\s,]+/).filter(Boolean)
        )
      );
      const matchCount = normalizedUser.filter(ui => {
        return Array.from(recipeIngredientSet).some(ri => 
          ri.includes(ui) || ui.includes(ri)
        );
      }).length;
      return matchCount >= Math.min(1, normalizedUser.length);
    });

    return this.filterByCategory(matched.length > 0 ? matched : this.recipes, category);
  }

  private filterByCategory(recipes: Recipe[], category?: MealCategory): Recipe[] {
    if (!category) return recipes;
    return recipes.filter(r => r.category === category);
  }

  getCategories(): { id: MealCategory; label: string; description: string }[] {
    return [
      { id: 'high-protein', label: 'High Protein', description: 'Recipes with 25g+ protein per serving' },
      { id: 'high-fiber', label: 'High Fiber', description: 'Recipes with 8g+ fiber per serving' },
      { id: 'balanced', label: 'Balanced', description: 'Well-rounded macros for everyday eating' }
    ];
  }
}
