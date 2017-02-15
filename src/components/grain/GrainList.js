import React from 'react'
import Grain from './Grain'
import CSSTransitionGroup from 'react-addons-css-transition-group';

class GrainList extends React.Component {

 constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeGrain = this.removeGrain.bind(this);
    this.state = { grains: []};
  }

  handleSubmit(e) {
     e.preventDefault();
    console.log(this);
    const newGrain = {
      name: this.name.value,
      amount: this.amount.value,
      id: Date.now()
    };
    
    this.setState((prevState) => ({
      grains: prevState.grains.concat(newGrain)
    }));

    console.log("Current State grains");
    console.log(this.state.grains);
    
    if(this.props.currentRecipe.grains === undefined){
      this.props.currentRecipe.grains = [newGrain];
    } else {
      this.props.currentRecipe.grains.push(newGrain);
    }

    console.log("Current Recipe");
    console.log(this.props.currentRecipe);

    this.props.updateCurrentRecipe(this.props.currentRecipe);

    this.name.value = "VIENA";
    this.amount.value = null;
  }

  removeGrain(e, key){
    e.preventDefault();
    let grains = this.state.grains.slice(0);
    delete grains[key];
    this.setState({ grains });
    this.props.currentRecipe.grains = grains;
    this.props.updateCurrentRecipe(this.props.currentRecipe);
  }

  render() {
    return (
    <div className="grain">
          <CSSTransitionGroup
                    className="grain"
                    component="div"
                    transitionName="order"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                  >
        {this.state.grains.map((grain, index) => (
           <Grain key={index} 
           index={index} 
           grain={grain} 
           removeGrain={this.removeGrain}/>
          ))}
        </CSSTransitionGroup>
        <div className="grain">
        <select ref={(input) => this.name= input}>
          <option value="VIENA">Viena Malt</option>
          <option value="BASE">Base</option>
          <option value="ROASTED">Roasted</option>
        </select>
        <input type="text" ref={(input) => this.amount= input} placeholder="Amount"/>
          <button onClick={ this.handleSubmit}>{'+ ADD'}</button>
        </div>
      </div>
    )
  }
}

export default GrainList;