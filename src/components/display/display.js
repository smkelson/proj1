import React, { Component } from 'react';
import './display.css';

class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: props.recipes
        }
    }
    render() {
        console.log(this.props.recipes)
        let displayRecipes = 
        
            this.props.recipes.map(recipe => {         //create a new variable called displayRecipes that contains all the HTML code
            return (
                <div className='list-container'>
                    <div key={recipe.id} className='list-item'>                                     {/* index create a p tag and buttons that have an id attatched to then */}
                        {recipe.recipeName}
                    </div>
                    <div className='list-item'>                                                        {/* //to display the list.  Maps over the array and for every */}
                        {recipe.recipeCat}
                    </div>
                    <div className='list-item'>
                        {recipe.recipeRating}
                    </div>
                    <div className='list-item'>
                        <button onClick={() => this.props.editRecipe(recipe.id)}>Edit</button>      {/* invokes editRecipe function passing it the id */}
                        <button onClick={() => this.props.deleteRecipe(recipe.id)}>Delete</button>    {/* invokes deleteRecipe function passing it the id */}
                    </div>
                </div>
            )
        })

        return (
            <div>
                <div className='title-container'>
                    <div className='title'>Recipe Name</div>
                    <div className='title'>Category</div>
                    <div className='title'>Rating</div>
                    <div className='title'></div>
                </div>
                <div>
                    {displayRecipes}
                </div>
            </div>
        )
    }
}

export default Display;