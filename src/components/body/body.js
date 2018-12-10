import React, { Component } from 'react';
import axios from 'axios';
import Display from '../display/display.js';
import './body.css';

class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {  //state only on Body component
            recipes: [], //empty array for storage
            id: null,    //used for temp storage on body
            recipeName: '', //used for temp storage on body
            recipeCat: '', // used for temp storage on body
            recipeRating: null // used for temp storage on body
        }
        this.editRecipe=this.editRecipe.bind(this)
        this.deleteRecipe=this.deleteRecipe.bind(this)
    }
    componentDidMount() {  // runs after body component loads
        axios.get('/api/recipes')  // send request to server
            .then(res => {          // response from server
                console.log(res.data)
                this.setState({     // set recipe on state with response (array) from server
                    recipes: (res.data)
                })
            })
    }

    handleChange(prop, value) {  //function is called when anything changes in the form elements <input onChange=> tags/boxes
        this.setState({         // updates state prop is the key element on the state object prop could be recipeName depending 
            [prop]: value       // on what input box the handleChange is invoked from.  the value is the value of the user input
        })
    }

    addNewRecipe() {    // invoked from Add New Recipe <button onClick=>
        console.log('add recipe button clicked')
        let newRecipe = {                           //new variable that contains an object of one recipe 
            recipeName: this.state.recipeName,      // object data comes from the variables on state
            recipeCat: this.state.recipeCat,
            recipeRating: this.state.recipeRating
        }
        axios.post('/api/recipes', newRecipe)       //send request to server to post/create a new recipe on the array
            .then((res) => {                        //response/result from server with the updated array
                this.setState({
                    recipes: res.data
                })
            })
    }
    deleteRecipe(id) {                               //invoked from Delete Recipe <button onClick=> passes in the recipe id
        console.log(id)
        axios.delete(`/api/recipes/?id=${id}`)         //request to the server to delete a recipe sends the id as a parameter/query
            .then(res => {                          //response from server with updated array with deleted recipe gone
                this.setState({                     //sets state with updated array
                    recipes: res.data
                })
            })
    }

    editRecipe(id) {                                 //invoked from the edit recipe button that gets the recipe id from the button and used state
        const recipeIndex = this.state.recipes.findIndex(recipe => recipe.id === id)    //creates recipeIndex variable that has the id the same as the id that is passed into the function
        this.setState({                                                  //set state with the recipe data from the array on state 
            id: this.state.recipes[recipeIndex].id,                       // so we can use it to put the data in the <input> element to edit
            recipeName: this.state.recipes[recipeIndex].recipeName,
            recipeCat: this.state.recipes[recipeIndex].recipeCat,
            recipeRating: this.state.recipes[recipeIndex].recipeRating
        })
    }

    updateRecipe(id) {                                     //invoked from the Update Recipe button 
        console.log(id)
        console.log(this.state.recipeCat)
        let updatedRecipe = {                           //new variable updatedRecipe that contain an object constructed from 
            id: this.state.id,                          //data on state
            recipeName: this.state.recipeName,
            recipeCat: this.state.recipeCat,
            recipeRating: this.state.recipeRating
        }
        axios.put(`/api/recipes/${id}`, updatedRecipe)        //request to server with a body type parameter called updatedRecipe(object)
            .then(res => {
                this.setState({               //response from server with updated array of changes
                    recipes: res.data
                })
            })
    }

    render() {
        // console.log(this.state.recipes)
        // let displayRecipes = this.state.recipes.map(recipe => {         //create a new variable called displayRecipes that contains all the HTML code
        //     return (                                                    //to display the list.  Maps over the array and for every
        //         <p key={recipe.id}>                                     {/* index create a p tag and buttons that have an id attatched to then */}
        //             {recipe.recipeName}
        //             <button onClick={() => this.editRecipe(recipe.id)}>Edit</button>      {/* invokes editRecipe function passing it the id */}
        //             <button onClick={() => this.deleteRecipe(recipe.id)}>Delete</button>    {/* invokes deleteRecipe function passing it the id */}
        //         </p>
        //     )
        // })
        return (                //show up on page
            <div>
                <div className='inputContainer'>
                    <input placeholder='Recipe Name' value={this.state.recipeName}         /* value is so it will populate when you click edit */
                        onChange={(e) => this.handleChange('recipeName', e.target.value)}    /*onChange invokes handleChange function */
                    ></input>                                                               {/*sends the recipeName(string) and value to function */}
                    <input placeholder='Category' value={this.state.recipeCat}
                        onChange={(e) => this.handleChange('recipeCat', e.target.value)}
                    ></input>
                    <input placeholder='Rating' value={this.state.recipeRating}
                        onChange={(e) => this.handleChange('recipeRating', e.target.value)}
                    ></input>
                    <button
                        onClick={() => this.addNewRecipe()}> Add New Recipe </button>     {/* invokes addNewRecipe function */}
                    <button
                        onClick={() => this.updateRecipe(this.state.id)}>Update Recipe                 {/* invokes updateRecipe function */}
                    </button>
                </div>
                    <Display recipes={this.state.recipes}           /* calls the Display component and passes props: recipes array, */ 
                        deleteRecipe={this.deleteRecipe}            /* deleteRecipe function */
                        editRecipe={this.editRecipe}/>             {/*  editRecipe function so it can call the function in body from Display */}                
            </div>
        )
    }
}
export default Body;   //export the Body component so it can be imported into another componet and used (app.js)
