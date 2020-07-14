import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state={
      selectedColor: '#fff'
    }
  }
  selectColor=(color)=>{
    this.setState({
      selectedColor: color
    })
    console.log(this.state.selectedColor)
  }

  

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row" >{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector selectedColorHandler={this.selectColor}/>
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