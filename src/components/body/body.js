import React, { Component } from 'react';
import axios from 'axios';

class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: [],
            recipeName: '',
            category: '',
            rating: 0
        }
    }
    componentDidMount() {
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
            recipe: this.state.recipe,
            category: this.state.category,
            rating: this.state.rating
            
        }
    }
    render() {
        // console.log(this.state.recipes)
        let displayRecipes = this.state.recipes.map(recipe => {
            return (
                <p key={recipe.id}>{recipe.recipeName}</p>
            )
        })
        return (
            <div>
                <div className = 'inputContainer'>
                    <input placeholder='Recipe Name'
                        onChange={(e)=>this.handleChange ('recipeName', e.target.value)}
                    ></input>
                    <input placeholder='Category'
                        onChange={(e) =>this.handleChange ('category', e.target.value)}
                    ></input>
                    <input placeholder='Rating'
                        onChange={(e)=>this.handleChange ('rating', e.target.value)}
                    ></input>
                    <button
                        onClick={()=>this.addNewRecipe()}> Add New Recipe </button>
                </div>
            {displayRecipes}
            </div>
        )
    }
}
export default Body;
