import React from 'react'

const PanelSplitSize = {
  OneToOne: '1-1',
  OneToTwo: '1-2',
  OneToThree: '1-3',
  OneToFour: '1-4'
}

class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        <div className="panel-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

class SplitPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classList: ['split'],
      item1: null,
      item1Class: 'panel-left-content',
      item2: null,
      item1Class: 'panel-right-content',
    }

    if (this.props.hasOwnProperty('vertical')) {
      this.state.classList.push('is-vertical')
      this.state.item1Class = 'panel-top-content'
      this.state.item2Class = 'panel-bottom-content'
    } else {
      this.state.classList.push('is-horizontal')
    }
  }

  render() {
    return (
      <div className={this.state.classList.join(' ')}>
        <div className={this.state.item1Class}>
          {this.props.item1}
        </div>
        <div className={this.state.item2Class}>
          {this.props.item2}
        </div>
      </div>
    )
  }
}

export {
  Panel,
  SplitPanel
}