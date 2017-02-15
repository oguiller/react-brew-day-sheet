import React from 'react'

class Grain extends React.Component {

  render() {
    const grain = this.props.grain;
    return (
      <div className="grain">
        <div className="grain" key={`grain-${this.props.index}`}>
        <select value={grain.name}>
          <option value="VIENA">Viena Malt</option>
          <option value="BASE">Base</option>
          <option value="ROASTED">Roasted</option>
        </select>
        <input type="text" value={grain.amount} placeholder="Amount"/>
        <button onClick={(e) => this.props.removeGrain(e, this.props.index)}>Remove</button>
      </div>
      </div>
    )
  }
}

export default Grain;