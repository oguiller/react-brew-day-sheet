import React from 'react';
import base from '../base';

class RecipeBuilderEntryForm extends React.Component{

constructor() {
    super();
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.state = {
      uid: null
    }
  }

  componentDidMount() {
    base.onAuth((user) => {
      if(user) {
        this.authHandler(null, { user });
      }
    });
  }

  goToRecipeBuilder(userId) {
	console.log(`Transitioning To: ${userId}`);
	this.context.router.transitionTo(`/recipeBuilder/${userId}`);
  }

  authenticate(provider) {
    console.log(`Trying to log in with ${provider}`);
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  authHandler(err, authData)  {
    console.log(authData);
    if (err) {
      console.error(err);
      return;
    }

    // grab the store info
    const storeRef = base.database().ref(authData.user.uid);

    // query the firebase once for the store data
    storeRef.once('value', (snapshot) => {
      const data = snapshot.val() || {};

      this.setState({
        uid: authData.user.uid,
      });

      this.goToRecipeBuilder(authData.user.uid);
    });

  }

  renderLogin() {
    return (
      <nav className="login">
        <h2>Welcome!!</h2>
        <p>Sign in to your recipe builder</p>
        <button className="facebook" onClick={() => this.authenticate('facebook')} >Log In with Facebook</button>
        <button className="twitter" onClick={() => this.authenticate('twitter')} >Log In with Twitter</button>
      </nav>
    )
  }

	render() {
		return (
			<div>{this.renderLogin()}</div>
			);
	}
}

// We need to tell React that we want to use the context
RecipeBuilderEntryForm.contextTypes = {
	router: React.PropTypes.object
}

export default RecipeBuilderEntryForm;