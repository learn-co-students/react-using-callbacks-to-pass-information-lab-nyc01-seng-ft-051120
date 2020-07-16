import React, { Component } from 'react';

class Cell extends Component {
  
  constructor(props) {
    super()
    this.state = {
      color: props.color
    }
  }
  
  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }
  
  render() {
    return (
      <div className="cell"
           style={{backgroundColor: this.state.color}}
           onClick={this.handleClick}>
      </div>
    )
  }
  
}

export default Cell;