import React from 'react'

const TextboxSize = {
  Large: 'large',
  Larger: 'larger',
  Small: 'small',
  Smaller: 'smaller',
}

class Textbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classList: ['textbox']
    }

    if (this.props.hasOwnProperty('outlined')) {
      this.state.classList.push('is-outlined')
    }

    if (this.props.hasOwnProperty('rounded')) {
      this.state.classList.push('is-rounded')
    }

    if (this.props.size) {
      this.state.classList.push('is-' + this.props.size)
    }
  }

  render() {
    return (
      <div className={ this.state.classList.join(' ') }>
        <input value={ this.props.value } />  
      </div>
    )
  }
}

export {
  Textbox,
  TextboxSize
}