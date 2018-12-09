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
        let newObj = {
            id: id,
            recipeName: req.body.recipeName,
            category: req.body.category,
            rating: req.body.rating
        }
        console.log(newObj)
        recipes.push(newObj)
        id++
        res.status(200).send(recipes)
    },
    deleteARecipe: (req, res) => {
        const deleteId = req.params.id;
        const recipeIndex = recipes.findIndex(recipe => recipe.id == deleteId)
        recipes.splice(recipeIndex,1)
        res.status(200).send(recipes)
    },
    editARecipe: (req, res) => {
        const updateId = req.body.id
        const recipeIndex = recipes.findIndex(recipe => recipe.id == updateId)
        recipes[recipeIndex].recipeName = req.body.recipeName
        recipes[recipeIndex].category = req.body.recipeCat
        recipes[recipeIndex].rating = req.body.recipeRating
        res.status(200).send(recipes)
    }
}

