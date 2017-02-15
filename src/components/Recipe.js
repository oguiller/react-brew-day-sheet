import React from 'react'

class Recipe extends React.Component {

render () {
	const { details } = this.props;

	return (
		<li className="menu-recipe">
        	<h3 className="recipe-name">
          		{details.name}
        	</h3>
        <p>{details.desc}</p>
        <h4>
          		Brewer's name:
        	</h4><span>{details.brewerName}</span>
		</li>
			);
	}
}

export default Recipe;