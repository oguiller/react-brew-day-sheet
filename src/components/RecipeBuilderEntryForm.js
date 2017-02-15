import React from 'react';

class RecipeBuilderEntryForm extends React.Component{

	goToRecipeBuilder(event) {
		event.preventDefault();
		
		// first grab text from box
		// Transition from / to /store/xxxx
		const userId = this.userInput.value;
		console.log(`Transitioning To: ${userId}`);
		this.context.router.transitionTo(`/recipeBuilder/${userId}`);
	}

	render() {
		return (
			<form className="user-selector" onSubmit={(e) => this.goToRecipeBuilder(e)}>
				{/* Ou yeah!! This is a comment*/}
				<h2>Please Enter Your UserName</h2>
				<input type="text" required placeholder="User Name" defaultValue="Guille" ref={(input) =>{this.userInput = input}}/>
				<button type="submit">Visit Recipe Builder -> </button>
			</form>
			)
	}
}

// We need to tell React that we want to use the context
RecipeBuilderEntryForm.contextTypes = {
	router: React.PropTypes.object
}

export default RecipeBuilderEntryForm;