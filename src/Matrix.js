import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

state={
  selectedColor: '#FFF'
}

updateColor =(newColor)=>{
  this.setState({
    selectedColor:newColor
  })
}

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val}
    updateColor={this.state.updateColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector updateColor={this.updateColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}