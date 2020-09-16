import React from 'react'

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classList: ['box']
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

    if (this.props.hasOwnProperty('hasShadow')) {
      this.state.classList.push('has-shadow')

      if (this.props.hasOwnProperty('extraShadow')) {
        this.state.classList.push('extra-shadow')
      }
  
      if (this.props.hasOwnProperty('ultraShadow')) {
        this.state.classList.push('ultra-shadow')
      }
    }
  }

  render() {
    return (
      <div className={ this.state.classList.join(' ') }>{this.props.children}</div>
    )
  }
}

class PrimaryBox extends Box {
  constructor(props) {
    super(props)
    this.state.classList.push('is-primary')
  }
}

class InfoBox extends Box {
  constructor(props) {
    super(props)
    this.state.classList.push('is-info')
  }
}

class SuccessBox extends Box {
  constructor(props) {
    super(props)
    this.state.classList.push('is-success')
  }
}

class DangerBox extends Box {
  constructor(props) {
    super(props)
    this.state.classList.push('is-danger')
  }
}

class WarningBox extends Box {
  constructor(props) {
    super(props)
    this.state.classList.push('is-warning')
  }
}

export {
  Box,  
  PrimaryBox,
  InfoBox,
  SuccessBox,
  DangerBox,
  WarningBox,
}