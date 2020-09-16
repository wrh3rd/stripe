import React from 'react'

class Highlight extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classList: ['highlight']
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
      <span className={ this.state.classList.join(' ') }>{this.props.children}</span>
    )
  }
}

class PrimaryHighlight extends Highlight {
  constructor(props) {
    super(props)
    this.state.classList.push('is-primary')
  }
}

class InfoHighlight extends Highlight {
  constructor(props) {
    super(props)
    this.state.classList.push('is-info')
  }
}

class SuccessHighlight extends Highlight {
  constructor(props) {
    super(props)
    this.state.classList.push('is-success')
  }
}

class DangerHighlight extends Highlight {
  constructor(props) {
    super(props)
    this.state.classList.push('is-danger')
  }
}

class WarningHighlight extends Highlight {
  constructor(props) {
    super(props)
    this.state.classList.push('is-warning')
  }
}

export {
  Highlight,  
  PrimaryHighlight,
  InfoHighlight,
  SuccessHighlight,
  DangerHighlight,
  WarningHighlight,
}