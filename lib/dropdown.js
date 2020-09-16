import React from 'react'
import { Caret } from './caret'

const DropDownSize = {
  Large: 'large',
  Larger: 'larger',
  Small: 'small',
  Smaller: 'smaller',
}

class DropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classList: ['dropdown'],
      items: [],
      selected: {
        text: '',
        value: '',
      }
    }

    if (this.props.hasOwnProperty('rounded')) {
      this.state.classList.push('is-rounded')
    }

    if (this.props.hasOwnProperty('outlined')) {
      this.state.classList.push('is-outlined')
    }

    if (this.props.items) {
      this.state.items = items
    }

    if (this.props.size) {
      this.state.classList.push('is-' + this.props.size)
    }

    this.onSelect = (item) => {
      this.setState((state) => {
        state.selected = item
        return state
      })
    }
  }

  render() {
    return (
      <div className={this.state.classList.join(' ')}>
        <div className="dropdown-caret">
          <Caret direction="down"></Caret>
        </div>
        
        <div className="dropdown-selected">{this.state.selected.text}</div>

        <ul className="dropdown-list">
          {this.state.items.map(item => {
            return (
              <li onClick={() => { this.onSelect(item) }}>
                {item.text}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

class PrimaryDropDown extends DropDown {
  constructor(props) {
    super(props)
    this.state.classList.push('is-primary')
  }
}

class InfoDropDown extends DropDown {
  constructor(props) {
    super(props)
    this.state.classList.push('is-info')
  }
}

class SuccessDropDown extends DropDown {
  constructor(props) {
    super(props)
    this.state.classList.push('is-success')
  }
}

class DangerDropDown extends DropDown {
  constructor(props) {
    super(props)
    this.state.classList.push('is-danger')
  }
}

class WarningDropDown extends DropDown {
  constructor(props) {
    super(props)
    this.state.classList.push('is-warning')
  }
}

export {
  DropDown,
  DropDownSize,
  PrimaryDropDown,
  InfoDropDown,
  SuccessDropDown,
  DangerDropDown,
  WarningDropDown,
}