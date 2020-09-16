import React from 'react'

const SectionSize = {
  Large: 'large',
  Larger: 'larger',
  Small: 'small',
  Smaller: 'smaller',
}

class Section extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classList: ['section']
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

    if (this.props.size) {
      this.state.classList.push('is-' + this.props.size)
    }
  }

  render() {
    return (
      <section className={ this.state.classList.join(' ') }>{this.props.children}</section>
    )
  }
}

class PrimarySection extends Section {
  constructor(props) {
    super(props)
    this.state.classList.push('is-primary')
  }
}

class InfoSection extends Section {
  constructor(props) {
    super(props)
    this.state.classList.push('is-info')
  }
}

class SuccessSection extends Section {
  constructor(props) {
    super(props)
    this.state.classList.push('is-success')
  }
}

class DangerSection extends Section {
  constructor(props) {
    super(props)
    this.state.classList.push('is-danger')
  }
}

class WarningSection extends Section {
  constructor(props) {
    super(props)
    this.state.classList.push('is-warning')
  }
}

export {
  Section,
  SectionSize,
  PrimarySection,
  InfoSection,
  SuccessSection,
  DangerSection,
  WarningSection,
}