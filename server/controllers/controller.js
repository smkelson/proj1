let id = 4;
let recipes = [
    {
        id:0,
        recipeName: 'Chocolate Chip Cookies',
        recipeCat: 'Desserts',
        recipeRating: 5,
        notes: ''    
    },
    {
        id:1,
        recipeName: 'Sugar Cookies',
        recipeCat: 'Desserts',
        recipeRating: 5,
        notes: ''
    },
    {
        id:2,
        recipeName: 'Boom Boom Sauce',
        recipeCat: 'Main Dish',
        recipeRating: 5,
        notes: ''
    },
    {
        id:3,
        recipeName: 'Cranberry Pinwheels',
        recipeCat: 'Appetizers',
        recipeRating: 5,
        notes: ''
    }
]

module.exports = {
    getAllRecipes: (req, res) => {
        res.status(200).send(recipes)
    },
    createARecipe: (req, res) => {
        res.status(200).send(recipes)
    }
}

