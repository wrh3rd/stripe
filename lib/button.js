import React from 'react'

const ButtonSize = {
  Large: 'large',
  Larger: 'larger',
  Largest: 'largest',
  Small: 'small',
  Smaller: 'smaller',
  Smallest: 'smallest',
}

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classList: ['button']
    }

    if (this.props.size) {
      this.state.classList.push('is-' + this.props.size.toLowerCase())
    }

    if (this.props.hasOwnProperty('rounded')) {
      this.state.classList.push('is-rounded')
    }

    if (this.props.hasOwnProperty('dark')) {
      this.state.classList.push('is-darker')
    }

    if (this.props.hasOwnProperty('light')) {
      this.state.classList.push('is-lighter')
    }

    if (this.props.hasOwnProperty('outlined')) {
      this.state.classList.push('is-outlined')
    }
  }

  render() {
    return (
      <button className={ this.state.classList.join(' ') }>{this.props.children}</button>
    )
  }
}

class PrimaryButton extends Button {
  constructor(props) {
    super(props)
    this.state.classList.push('is-primary')
  }
}

class InfoButton extends Button {
  constructor(props) {
    super(props)
    this.state.classList.push('is-info')
  }
}

class SuccessButton extends Button {
  constructor(props) {
    super(props)
    this.state.classList.push('is-success')
  }
}

class DangerButton extends Button {
  constructor(props) {
    super(props)
    this.state.classList.push('is-danger')
  }
}

class WarningButton extends Button {
  constructor(props) {
    super(props)
    this.state.classList.push('is-warning')
  }
}

class LinkButton extends Button {
  constructor(props) {
    super(props)
    this.state.classList.push('is-link')
  }
}

export {
  Button,
  ButtonSize,
  PrimaryButton,
  InfoButton,
  SuccessButton,
  DangerButton,
  WarningButton,
  LinkButton,
}