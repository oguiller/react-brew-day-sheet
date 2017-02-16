import React from 'react'

class Recipe extends React.Component {

render () {
	const { details } = this.props;

	return (
		<li className="menu-recipe">
    <div className="image-details">
      <img src={details.image} alt={details.name} />
    </div>
    <div className="recipe-details">
        <h3 className="recipe-name">{details.name}</h3>
        <label>Type:</label><span>{details.beerType}</span><br/>
        <label>Brewer's name: </label><span>{details.brewerName}</span><br/>
        <label>Batch Size:</label><span>{details.batchSize}</span><br/>
        <label>Cost:</label><span>{details.totalCost}</span>
    </div>
		</li>
			);
	}
}

export default Recipe;