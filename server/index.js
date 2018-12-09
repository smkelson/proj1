const express = require('express');
const PORT = 5000;
const ctrl = require('./controllers/controller.js');

const app = express();

app.use(express.json());

app.get('/api/recipes', ctrl.getAllRecipes);
app.post('/api/recipes', ctrl.createARecipe);
app.delete('/api/recipes', ctrl.deleteARecipe);
app.put('/api/recipes', ctrl.editARecipe)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));