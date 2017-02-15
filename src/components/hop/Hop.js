import React from 'react'

class Hop extends React.Component {

  render() {
    const hop = this.props.hop;
    return (
      <div className="hop">
        <select value={hop.name}>
          <option value="VIENA">Cascade</option>
          <option value="BASE">Test1</option>
          <option value="ROASTED">Test2</option>
        </select>
        <input type="text" value={hop.amount} placeholder="Amount"/>
        <input type="text" value={hop.aa} placeholder="AA"/>
        <input type="text" value={hop.boilTime} placeholder="Boil time"/>
        <button onClick={(e) => this.props.removeHop(e, this.props.index)}>Remove</button>
      </div>
    )
  }
}

export default Hop;