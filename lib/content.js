import React from 'react'

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classList: ['content']
    }

    if (this.props.hasOwnProperty('contained')) {
      this.state.classList.push('is-contained')
    }
  }

  render() {
    return (
      <div className={ this.state.classList.join(' ') }>{this.props.children}</div>
    )
  }
}

export {
  Content,
}