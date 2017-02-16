import React from 'react';
import Header from './Header';
import BrewSheet from './BrewSheet';
import Recipe from './Recipe';
import sampleRecipes from '../sample-recipes';

import base from '../base.js';

class App extends React.Component {
	constructor(){
		super();
        console.log("App Constructor");
		this.addRecipe = this.addRecipe.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		this.updateRecipe = this.updateRecipe.bind(this);
		this.removeRecipe = this.removeRecipe.bind(this);
		this.updateCurrentRecipe = this.updateCurrentRecipe.bind(this);
		this.logout = this.logout.bind(this);
		// getInitialState
		this.state = {
			recipes: {}
			,currentRecipe: {hops: [], grains: []}
			,uid: null
		};
	}

	logout() {
		console.log("LOG OUT!!");
    	base.unauth();
    	this.setState({ uid: null });
    	this.context.router.transitionTo(`/`);
  	}

	componentWillMount() {
		// this runs right before the <App> is rendered
		console.log("SYNCHRONIZING STATUS");
		this.ref = base.syncState(`${this.props.params.userId}/recipes`
			,{ 
				context: this, 
				state: 'recipes'
			});

		console.log("SYNCHRONIZING STATUS END");
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	addRecipe(recipe){
		//update state
		console.log("ADDING A RECIPE");
		const recipes = {...this.state.recipes}; // take a copy
		const timestamp = Date.now();
		const recipeClone = {...this.state.currentRecipe};
		const mergedObject = Object.assign(recipe, recipeClone);
		recipes[`recipe-${timestamp}`] = mergedObject;
		//set state
		this.setState({ recipes, currentRecipe: {hops: [], grains: []} });
	}

	updateRecipe(key, updatedRecipe){
		const recipes = {...this.state.recipes};
		recipes[key] = updatedRecipe;
		this.setState({recipes});
	}

	updateCurrentRecipe (updatedRecipe) {
		console.log("UPDATING CURRENT RECIPE");
		const recipe = {...this.state.currentRecipe};
		const mergedObject = Object.assign(updatedRecipe, recipe);
		this.setState({currentRecipe: mergedObject});
	}

	removeRecipe(key){
		const recipes = {...this.state.recipes};
		recipes[key] = null; // This is because of firebase
		this.setState({recipes});
	}

	loadSamples(){
		this.setState({
			recipes: sampleRecipes
		})
	}

	render() {
		const logout = <button onClick={this.logout}>Log Out!</button>;
		return (
			<div className="brew-day-sheet">
				<div className="menu">
					{logout}
					<Header tagline="Our own brew day sheet"/>
					<ul className="list-of-recipes">
					{Object
						.keys(this.state.recipes)
						.map(key => <Recipe key={key} index={key} details={this.state.recipes[key]} />)
					}
					</ul>
				</div>
				<BrewSheet addRecipe={this.addRecipe} 
				loadSamples={this.loadSamples} 
				removeRecipe={this.removeRecipe}
				currentRecipe={this.state.currentRecipe}
				updateCurrentRecipe ={this.updateCurrentRecipe}/>
			</div>
			)
	}
}

App.PropTypes = {
	params: React.PropTypes.object.isRequired
}

App.contextTypes = {
	router: React.PropTypes.object
}

export default App; 