import React from 'react'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classList: ['card'],
      title: null,
    }

    if (this.props.hasOwnProperty('rounded')) {
      this.state.classList.push('is-rounded')
    }

    if (this.props.title) {
      this.state.title = this.props.title
    }

    if (this.props.size) {
      this.state.classList.push('is-' + this.props.size)
    }
  }

  render() {
    return (
      <div className={ this.state.classList.join(' ') }>
        {(() => {
          if (this.state.title) {
            return (
              <div className="card-header">
                {this.state.title}
              </div>
            )
          }

          return ''
        })()}
        <div className="card-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

class PrimaryCard extends Card {
  constructor(props) {
    super(props)
    this.state.classList.push('is-primary')
  }
}

class InfoCard extends Card {
  constructor(props) {
    super(props)
    this.state.classList.push('is-info')
  }
}

class SuccessCard extends Card {
  constructor(props) {
    super(props)
    this.state.classList.push('is-success')
  }
}

class DangerCard extends Card {
  constructor(props) {
    super(props)
    this.state.classList.push('is-danger')
  }
}

class WarningCard extends Card {
  constructor(props) {
    super(props)
    this.state.classList.push('is-warning')
  }
}

export {
  Card,
  PrimaryCard,
  InfoCard,
  SuccessCard,
  DangerCard,
  WarningCard,
}