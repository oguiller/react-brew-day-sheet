import React from 'react'
import AddRecipeForm from './AddRecipeForm'

class BrewSheet extends React.Component {

 constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    const recipe = this.props.recipes[key];
    // take a copy of that recipe and update it with the new data
    const updatedRecipe = {
      ...recipe,
      [e.target.name]: e.target.value  // Computed property
    }
    this.props.updateRecipe(key, updatedRecipe);
  }

  render() {
    return (
      <div>
        <h2>Brew Sheet</h2>
        <AddRecipeForm currentRecipe={this.props.currentRecipe} 
        addRecipe={this.props.addRecipe} 
        addGrain={this.props.addGrain}
        updateCurrentRecipe={this.props.updateCurrentRecipe}/>
        <button onClick={this.props.loadSamples}>Load Sample Recipes</button>
      </div>
    )
  }
}

export default BrewSheet;