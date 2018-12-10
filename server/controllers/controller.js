let id = 4;                                             //id to increment for unique id in object
let recipes = [                                         //array of object for dummy data 
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

module.exports = {                                  //object of methods/functions that are exported for use
    getAllRecipes: (req, res) => {                  //get method to return all recipes to front end to display(body.js)
        res.status(200).send(recipes)
    },
    createARecipe: (req, res) => {                  //create a new recipe method that .push to the array
        console.log(req.body.recipeCat)
        let newObj = {                              //and returns new array to front end for dispaly (body.js)
            id: id,                                 //create new object from the body parameter 
            recipeName: req.body.recipeName,
            recipeCat: req.body.recipeCat,
            recipeRating: req.body.recipeRating
        }
        console.log(newObj)
        recipes.push(newObj)                        //push it to the array
        id++                                        //increments id so it can be unique
        res.status(200).send(recipes)               //sends response (array) to front end (body.js)
    },
    deleteARecipe: (req, res) => {                  //delete recipe method
        const deleteId = req.query.id;             //get id from the parameter
        const recipeIndex = recipes.findIndex(recipe => recipe.id == deleteId)  //used the id to find the index in the array to delete
        recipes.splice(recipeIndex,1)               //deletes the recipe of the index
        res.status(200).send(recipes)               //sends response (array) to front end (body.js)
    },
    editARecipe: (req, res) => {
        console.log(req.params.id)
        const updateId = req.params.id                //gets id from the  parameter object
        const recipeIndex = recipes.findIndex(recipe => recipe.id == updateId)  //finds the index that matches the id to update
        recipes[recipeIndex].recipeName = req.body.recipeName       //updates the recipeName of the index with the data from the request body
        recipes[recipeIndex].recipeCat = req.body.recipeCat          //updates the category of the index with the data from the request body
        recipes[recipeIndex].recipeRating = req.body.recipeRating         //upodates the rating of the index with the data from the request body
        res.status(200).send(recipes)               //sends response (array) to front end (body.js)
    }
}

