import React from 'react'

const CaretDirection = {
  Left: 'left',
  Right: 'right',
  Up: 'up',
  Down: 'down'
}

class Caret extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classList: ['caret']
    }

    if (this.props.direction) {
      this.state.classList.push('is-' + this.props.direction)
    }
  }

  render() {
    return (
      <a className={ this.state.classList.join(' ') }></a>
    )
  }
}

export {
  Caret,
  CaretDirection,
}