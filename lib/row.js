import React from 'react'

const ColumnSize = {
  OneHalf: '1-2',
  OneThird: '1-3',
  OneFourth: '1-4',
  OneFifth: '1-5',
  OneSixth: '1-6',
  OneTenth: '1-10',
  TwoThirds: '2-3',
  TwoFifths: '2-5',
  ThreeFourths: '3-4',
  ThreeFifths: '3-5',
  ThreeTenths: '3-10',
  FourFifths: '4-5',
  FiveSixths: '5-6',
  SevenTenths: '7-10',
  NineTenths: '9-10',
}

class Column extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classList: ['column']
    }

    if (this.props.size) {
      this.state.classList.push('is-' + this.props.size)
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

class Row extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.children}
      </div>
    )
  }
}
