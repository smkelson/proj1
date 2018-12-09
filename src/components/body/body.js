import React, { Component } from 'react';
import axios from 'axios';

class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {  //state only on Body component
            recipes: [], //empty array for storage
            id: null,    //used for temp storage on body
            recipeName: '', //used for temp storage on body
            recipeCat: '', // used for temp storage on body
            recipeRating: 0 // used for temp storage on body
        }
    }
    componentDidMount() {  // runs after body component loads
        axios.get('/api/recipes')
            .then(res => {
                console.log(res.data)
                this.setState({
                    recipes: (res.data)
                })
            })
    }

    handleChange(prop, value){
        this.setState({
            [prop]: value
            })
    }

    addNewRecipe(){
        console.log('add recipe button clicked')
        let newRecipe = {
            recipeName: this.state.recipeName,
            category: this.state.category,
            rating: this.state.rating
        }
        axios.post('/api/recipes', newRecipe)
            .then((res) => {
                this.setState({
                    recipes: res.data
                })
            })
    }
    deleteRecipe(id){
        console.log(id)
        axios.delete(`/api/recipes/?${id}`)
            .then(res => {
                this.setState({
                    recipes: res.data
                })
            })
    }

    editRecipe(id){
        const recipeIndex = this.state.recipes.findIndex(recipe => recipe.id === id)
        this.setState({
            id:this.state.recipes[recipeIndex].id,
            recipeName: this.state.recipes[recipeIndex].recipeName,
            recipeCat: this.state.recipes[recipeIndex].recipeCat,
            recipeRating: this.state.recipes[recipeIndex].recipeRating
        })
    }

    updateRecipe(){
        let updatedRecipe = {
            id: this.state.id,
            recipeName: this.state.recipeName,
            recipeCat: this.state.recipeCat,
            recipeRating: this.state.recipeRating
        }
        axios.put(`/api/recipes`, updatedRecipe)
            .then(res => {this.setState({
                recipes: res.data
            })
        })
    }
               
    render() {
        // console.log(this.state.recipes)
        let displayRecipes = this.state.recipes.map(recipe => {
            return (
                <p key={recipe.id}>
                    {recipe.recipeName} 
                    <button onClick={()=>this.editRecipe(recipe.id)}>Edit</button>
                    <button onClick={()=>this.deleteRecipe(recipe.id)}>Delete</button>
                 </p>
            )
        })
        return (
            <div>
                <div className = 'inputContainer'>
                    <input placeholder='Recipe Name' value={this.state.recipeName}
                        onChange={(e)=>this.handleChange ('recipeName', e.target.value)}
                    ></input>
                    <input placeholder='Category' value={this.state.recipeCat}
                        onChange={(e) =>this.handleChange ('category', e.target.value)}
                    ></input>
                    <input placeholder='Rating' value={this.state.recipeRating}
                        onChange={(e)=>this.handleChange ('rating', e.target.value)}
                    ></input>
                    <button
                        onClick={()=>this.addNewRecipe()}> Add New Recipe </button>
                    <button
                        onClick={()=>this.updateRecipe()}>Update Recipe
                    </button>
                </div>
            {displayRecipes}
            </div>
        )
    }
}
export default Body;
