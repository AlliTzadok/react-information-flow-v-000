import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  updateColors = event => {
    event.stopPropagation()
    let newColor = getRandomColor()
    this.setState({
      color: newColor,
      childColor: getReducedColor(newColor)
    })
  }

  updateChildColors = event => {
    event.stopPropagation()
    this.setState({
      childColor: getRandomColor()
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
        <div onClick={this.updateColors} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
      <Tier2 color={this.state.childColor} handleChildClick={this.updateChildColors}/>
      <Tier2 color={this.state.childColor} handleChildClick={this.updateChildColors}/>
      </div>
    )
  }
}
