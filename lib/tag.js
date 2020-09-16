import React from 'react'

class Tag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classList: ['Tag']
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

class PrimaryTag extends Tag {
  constructor(props) {
    super(props)
    this.state.classList.push('is-primary')
  }
}

class InfoTag extends Tag {
  constructor(props) {
    super(props)
    this.state.classList.push('is-info')
  }
}

class SuccessTag extends Tag {
  constructor(props) {
    super(props)
    this.state.classList.push('is-success')
  }
}

class DangerTag extends Tag {
  constructor(props) {
    super(props)
    this.state.classList.push('is-danger')
  }
}

class WarningTag extends Tag {
  constructor(props) {
    super(props)
    this.state.classList.push('is-warning')
  }
}

export {
  Tag,  
  PrimaryTag,
  InfoTag,
  SuccessTag,
  DangerTag,
  WarningTag,
}