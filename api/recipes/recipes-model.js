const db = require('../../data/db-config')

async function getRecipeById(recipe_id) {
    const recipeRows = await db('recipes as r')
    .where('recipe_id', recipe_id)

    return recipeRows
}



// function getRecipeById(recipe_id) {
//     return Promise.resolve(`awesome recipe with id ${recipe_id}`)
// }

module.exports = {
    getRecipeById
}