const express = require('express');                     //express is the server package(software)
const PORT = 5000;                                      //port for server to run
const ctrl = require('./controllers/controller.js');    //new variable ctrl that is the path and name of the contollers file

const app = express();                                  //invokes express and assigns to app variable so we can use

app.use(express.json());                                //use json parser on express

app.get('/api/recipes', ctrl.getAllRecipes);            //endpoints for requests 
app.post('/api/recipes', ctrl.createARecipe);
app.delete('/api/recipes', ctrl.deleteARecipe);
app.put('/api/recipes/:id', ctrl.editARecipe)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)); //must be last line in file, starts server