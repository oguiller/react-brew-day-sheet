import React from 'react'
import GrainList from './grain/GrainList'
import Hop from './hop/Hop'
import HopList from './hop/HopList'

class AddRecipeForm extends React.Component {
  constructor(){
    super();
    this.batchVitalStatistics ={};
  }

  createRecipe(event) {
    event.preventDefault();
    console.log('Gonna brew some beer! 🍺');
    const recipe = {
      name: this.name.value,
      brewerName: this.brewerName.value,
      beerType: this.beerType.value,
      batchSize: this.batchSize.value,
      notes: this.notes.value,
      image: this.image.value,
      boilTime: this.boilTime.value,
      batchVitalStatistics: {
        originalGravity: this.batchVitalStatistics.originalGravity.value,
        finalGravity: this.batchVitalStatistics.finalGravity.value,
        alcohol:this.batchVitalStatistics.alcohol.value,
        ibus: this.batchVitalStatistics.ibus.value,
        srm: this.batchVitalStatistics.srm.value,
        brewHouseEfficiency: this.batchVitalStatistics.brewHouseEfficiency.value,
        carbonationLevel: this.batchVitalStatistics.carbonationLevel.value
      },
      preBoilGravity: this.preBoilGravity.value,
      preBoilDate: this.preBoilDate.value,
      afterBoilDate: this.afterBoilDate.value,
      afterBoilGravity: this.afterBoilGravity.value,
      rakedGravity: this.rakedGravity.value,
      rakedDate: this.rakedDate.value,
      finalDate: this.finalDate.value,
      finalGravity: this.finalGravity.value,
      yeastType: this.yeastType.value,
      avgAttenuation: this.avgAttenuation.value,
      optTemperature: this.optTemperature.value,
      starter: this.starter.value
    }
    console.log("HEEeeeeere");

    this.props.updateCurrentRecipe(recipe);
    this.props.addRecipe(recipe);
    this.recipeForm.reset();
  }
	
render () {
    console.log(this);
		return (
	   <form ref={(input) => this.recipeForm = input} className="recipe-edit" onSubmit={(e) => this.createRecipe(e)}>
        <input ref={(input) => this.name = input} type="text" placeholder="Beer Name" required/>
        <input ref={(input) => this.brewerName = input} type="text" placeholder="Brewer's name" required/>
        <select ref={(input) => this.beerType = input} required>
          <option value="ALL_GRAIN">All Grain</option>
          <option value="EXTRACT">Extract</option>
          <option value="PARTIAL_MASH">Partial Mash</option>
        </select>
        <input ref={(input) => this.boilTime = input} type="text" placeholder="Boil time" pattern="^[0-9]*$"/>
        <input ref={(input) => this.batchSize = input} type="text" placeholder="Batch size" pattern="^[0-9]*$" required/>
        <input type="text" ref={(input) => this.batchSize = input} placeholder="Expected Efficiency" pattern="^[0-9]*$"/>
        <span>GRAINS</span>
            <GrainList currentRecipe={this.props.currentRecipe} updateCurrentRecipe={this.props.updateCurrentRecipe}/>
        <span>HOPS</span>
            <HopList currentRecipe={this.props.currentRecipe} updateCurrentRecipe={this.props.updateCurrentRecipe}/>
        <span>BATCH VITAL STATISTICS</span>
            <input ref={(input) => this.batchVitalStatistics.originalGravity = input} type="text" placeholder="Expected Original Gravity" pattern="[0-9]+(\.[0-9][0-9]?)?"/>
            <input ref={(input) => this.batchVitalStatistics.finalGravity = input} type="text" placeholder="Expected Final Gravity" pattern="[0-9]+(\.[0-9][0-9]?)?"/>
            <input ref={(input) => this.batchVitalStatistics.alcohol = input} type="text" placeholder="Expected Alcohol By Volume" pattern="[0-9]+(\.[0-9][0-9]?)?"/>
            <input ref={(input) => this.batchVitalStatistics.ibus = input} type="text" placeholder="IBUs (bitterness)" pattern="[0-9]+(\.[0-9][0-9]?)?"/>
            <input ref={(input) => this.batchVitalStatistics.srm = input} type="text" placeholder="SRM (color)" pattern="[0-9]+(\.[0-9][0-9]?)?"/>
            <input ref={(input) => this.batchVitalStatistics.brewHouseEfficiency = input} type="text" placeholder="Brew House Efficiency" pattern="[0-9]+(\.[0-9][0-9]?)?"/>
            <input ref={(input) => this.batchVitalStatistics.carbonationLevel = input} type="text" placeholder="Carbonation Level" pattern="[0-9]+(\.[0-9][0-9]?)?"/>
        <span>HYDROMETER READINGS</span>
            <span className="label">Pre Boil </span>
            <input ref={(input) => this.preBoilDate = input} type="date" placeholder="Date" />
            <input ref={(input) => this.preBoilGravity = input} type="text" placeholder="Gravity" pattern="[0-9]+(\.[0-9][0-9]?)?"/>
            <span className="label">After Boil </span>
            <input ref={(input) => this.afterBoilDate = input} type="date" placeholder="Date" />
            <input ref={(input) => this.afterBoilGravity = input} type="text" placeholder="Gravity" pattern="[0-9]+(\.[0-9][0-9]?)?"/>
            <span className="label">Racked </span>
            <input ref={(input) => this.rakedDate = input} type="date" placeholder="Date" />
            <input ref={(input) => this.rakedGravity = input} type="text" placeholder="Gravity" pattern="[0-9]+(\.[0-9][0-9]?)?"/>
            <span className="label">Final </span>
            <input ref={(input) => this.finalDate = input} type="date" placeholder="Date" />
            <input ref={(input) => this.finalGravity = input} type="text" placeholder="Gravity" pattern="[0-9]+(\.[0-9][0-9]?)?"/>
        <span>YEAST</span>
        <div className="yeast">
            <input ref={(input) => this.yeastType = input} type="text" placeholder="Type" />
            <input ref={(input) => this.avgAttenuation = input} type="text" placeholder="Avg Attenuation" pattern="[0-9]+(\.[0-9][0-9]?)?"/>
            <input ref={(input) => this.optTemperature = input} type="text" placeholder="Optimum Temperature" pattern="[0-9]+(\.[0-9][0-9]?)?"/>
            <input ref={(input) => this.starter = input} type="text" placeholder="Starter" />
        </div>
        <span>COSTS</span>
        <div className="costs">
            <span className="cost-label">Grains </span>
            <input ref={(input) => this.grainCost = input} type="number" min={0.0} placeholder="Cost" pattern="[0-9]+(\.[0-9][0-9]?)?"/>
            <span className="cost-label">Hops </span>
            <input ref={(input) => this.hopsCost = input} type="number" min={0.0} placeholder="Cost" pattern="[0-9]+(\.[0-9][0-9]?)?"/>
            <span className="cost-label">Yeast </span>
            <input ref={(input) => this.yeastCost = input} type="number" min={0.0} placeholder="Cost" pattern="[0-9]+(\.[0-9][0-9]?)?"/>
            <span className="cost-label">Other </span>
            <input ref={(input) => this.otherCost = input} type="number" min={0.0} placeholder="Cost" pattern="[0-9]+(\.[0-9][0-9]?)?"/>
            <span className="cost-label">Total </span>
            <input ref={(input) => this.totalCost = input} type="number" min={0.0} placeholder="Cost" pattern="[0-9]+(\.[0-9][0-9]?)?"/>
        </div>
        <span>NOTES</span>
          <textarea ref={(input) => this.notes = input} placeholder="Notes" ></textarea>
          <input ref={(input) => this.image = input} type="url" placeholder="Recipe Image" />
        <button type="submit">+ Add Recipe</button>
      </form>
			);
	}
}

export default AddRecipeForm;