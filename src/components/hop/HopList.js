import React from 'react'
import Hop from './Hop'
import CSSTransitionGroup from 'react-addons-css-transition-group';

class HopList extends React.Component {

 constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeHop = this.removeHop.bind(this);
    this.state = {hops: []};
  }

  handleSubmit(e) {
     e.preventDefault();
    console.log(this);
    const newHop = {
      name: this.name.value,
      amount: this.amount.value,
      aa: this.aa.value,
      boilTime: this.aa.value,
      id: Date.now()
    };
    
    this.setState((prevState) => ({
      hops: prevState.hops.concat(newHop)
    }));

    if(this.props.currentRecipe.hops === undefined){
      this.props.currentRecipe.hops = [newHop];
    } else {
      this.props.currentRecipe.hops.push(newHop);
    }

    this.props.updateCurrentRecipe(this.props.currentRecipe);

    this.name.value = null;
    this.amount.value = null;
    this.boilTime.value = null;
    this.aa.value = null;
  }

  removeHop(e, key){
    e.preventDefault();
    let hops = this.state.hops.slice(0);
    delete hops[key];
    this.props.currentRecipe.hops = hops;
    this.props.updateCurrentRecipe(this.props.currentRecipe);
    this.setState({ hops });
  }

  render() {
    return (
    <div className="hop">
          <CSSTransitionGroup
                    className="hop"
                    component="div"
                    transitionName="order"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                  >
        {this.state.hops.map((hop, index) => (
           <Hop key={index} index={index} hop={hop} removeHop={this.removeHop}/>
          ))}
        </CSSTransitionGroup>
         <div className="hop">
        <select ref={(input) => this.name= input}>
          <option value="VIENA">Cascade</option>
          <option value="BASE">Test1</option>
          <option value="ROASTED">Test2</option>
        </select>
        <input type="text" ref={(input) => this.amount = input} placeholder="Amount"/>
        <input type="text" ref={(input) => this.aa = input} placeholder="AA"/>
        <input type="text" ref={(input) => this.boilTime = input} placeholder="Boil time"/>
        <button onClick={ this.handleSubmit}>{'+ ADD'}</button>
      </div>
      </div>
    )
  }
}

export default HopList;