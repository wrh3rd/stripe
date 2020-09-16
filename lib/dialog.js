import React from 'react'

class Dialog extends React.Component {
  constructor(props) {
    super(props)
    let _classList = ['dialog']

    this.state = {
      classList: _classList,
    }

    if (this.props.hasOwnProperty('open')) {
      this.state.classList.push('is-open') 
    }

    this.closer = () => {
      this.setState(() => {
        let classList = _classList
        return classList
      })
    }

    if (this.props.close) {
      this.props.close(this.closer)
    }

    this.opener = () => {
      this.setState(() => {
        let classList = _classList
        classList.push('is-open')
        return classList
      })
    }

    if (this.props.open) {
      this.props.open(this.opener)
    }

    this.toggler = () => {
      this.setState(() => {
        let classList = _classList
        if (state.classList.indexOf('is-open') < 0) {
          classList.push('is-open')
        }
        return classList
      })
    }

    if (this.props.toggle) {
      this.props.toggle(this.toggler)
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

class DialogBackdrop extends React.Component {
  render() {
    return (
      <a className="dialog-backdrop"></a>
    )
  }
}

class DialogClose extends React.Component {
  render() {
    return (
      <div className="dialog-close">
        {this.props.children}
      </div>
    )
  }
}

class DialogContent extends React.Component {
  render() {
    return (
      <div className="dialog-content">
        {this.props.children}
      </div>
    )
  }
}

class DialogMessage extends React.Component {
  render() {
    return (
      <div className="dialog-message">
        {this.props.children}
      </div>
    )
  }
}

export {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogMessage,
}