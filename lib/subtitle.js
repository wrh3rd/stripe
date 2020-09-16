import React from 'react'

class Subtitle extends React.Component {
  render() {
    return (
      <h2 className="subtitle">{this.props.children}</h2>
    )
  }
}

export { 
  Subtitle 
}