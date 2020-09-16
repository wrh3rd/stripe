import React from 'react'

const ListType = {
  Circle: 'circle',
  Decimal: 'decimal',
  Disc: 'disc',
  Square: 'square',
}

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classList: ['list']
    }

    if (this.props.type) {
      this.state.classList.push('is-type-' + this.props.type)
    }
  }

  render() {
    return (
      <ul className={ this.state.classList.join(' ') }>{this.props.children}</ul>
    )
  }
}

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classList: ['list']
    }

    if (this.props.hasOwnProperty('separator')) {
      this.state.classList.push('is-separator')
    }
  }

  render() {
    return (
      <li className={ this.state.classList.join(' ') }>{this.props.children}</li>
    )
  }
}

export {
  List,
  ListItem,
  ListType,
}