const recipes = [
   {recipe_name: 'broccoli pesto' },
   {recipe_name: 'lemon chicken' },
   {recipe_name: 'salmon pasta' }, 
]

const ingredients = [ 
{ ingredient_name: 'broccoli', ingredient_unit: 'ibs'},
{ ingredient_name: 'pesto', ingredient_unit: 'ibs'},
{ ingredient_name: 'pasta', ingredient_unit: 'ibs'},
{ ingredient_name: 'lemon', ingredient_unit: 'slices'},
{ ingredient_name: 'chicken', ingredient_unit: 'kilos'},
{ ingredient_name: 'salmon', ingredient_unit: 'grams'},
]

const step_ingredients = [
    {step_id: 2, ingredients_id: 1, quantity: 1}
    {step_id: 2, ingredients_id: 1, quantity: 1}
    {step_id: 2, ingredients_id: 1, quantity: 1}

    {step_id: 2, ingredients_id: 1, quantity: 1}
    {step_id: 2, ingredients_id: 1, quantity: 1}

    {step_id: 2, ingredients_id: 1, quantity: 1}
]

const steps = [
    //broccolli pesto
    {step_text: 'heat pan', step_number: 1, recipe_id: 1}
    {step_text: 'heat pan', step_number: 2, recipe_id: 1}
    {step_text: 'heat pan', step_number: 3, recipe_id: 1}

    {step_text: 'heat pan', step_number: 1, recipe_id: 2}
    {step_text: 'heat pan', step_number: 2, recipe_id: 2}
    {step_text: 'heat pan', step_number: 3, recipe_id: 2}

    {step_text: 'heat pan', step_number: 1, recipe_id: 3}
    {step_text: 'heat pan', step_number: 2, recipe_id: 3}
]


exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('steps_ingredients').insert(steps_ingredients)
}