import React from 'react'

class Chest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classList: ['chest'],
    }

    if (this.props.hasOwnProperty('outlined')) {
      this.state.classList.push('is-outlined')
    }
  }

  render() {
    return (
      <div className={ this.state.classList.join(' ') }>
        {this.props.children}
      </div>
    )
  }
}

class ChestDrawer extends React.Component {
  render() {
    return (
      <div className="drawer">
        {this.props.children}
      </div>
    )
  }
}

class PrimaryChest extends Chest {
  constructor(props) {
    super(props)
    this.state.classList.push('is-primary')
  }
}

class InfoChest extends Chest {
  constructor(props) {
    super(props)
    this.state.classList.push('is-info')
  }
}

class SuccessChest extends Chest {
  constructor(props) {
    super(props)
    this.state.classList.push('is-success')
  }
}

class DangerChest extends Chest {
  constructor(props) {
    super(props)
    this.state.classList.push('is-danger')
  }
}

class WarningChest extends Chest {
  constructor(props) {
    super(props)
    this.state.classList.push('is-warning')
  }
}

export {
  Chest,
  ChestDrawer,
  PrimaryChest,
  InfoChest,
  SuccessChest,
  DangerChest,
  WarningChest,
}