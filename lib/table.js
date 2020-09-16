import React from 'react'

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classList: ['table']
    }

    if (this.props.hasOwnProperty('bordered')) {
      this.state.classList.push('has-border')
    }
  }

  render() {
    return (
      <table className={ this.state.classList.join(' ') }>
        {this.props.children}
      </table>
    )
  }
}

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        {this.props.children}
      </tr>
    )
  }
}

class TableBody extends React.Component {
  render() {
    return (
      <tbody>
        {this.props.children}
      </tbody>
    )
  }
}

class TableFoot extends React.Component {
  render() {
    return (
      <tfoot>
        {this.props.children}
      </tfoot>
    )
  }
}

class TableHead extends React.Component {
  render() {
    return (
      <thead>
        {this.props.children}
      </thead>
    )
  }
}

class TableHeadCell extends React.Component {
  render() {
    return (
      <th>
        {this.props.children}
      </th>
    )
  }
}

class TableRowCell extends React.Component {
  render() {
    return (
      <td>
        {this.props.children}
      </td>
    )
  }
}

class PrimaryTable extends Table {
  constructor(props) {
    super(props)
    this.state.classList.push('is-primary')
  }
}

class InfoTable extends Table {
  constructor(props) {
    super(props)
    this.state.classList.push('is-info')
  }
}

class SuccessTable extends Table {
  constructor(props) {
    super(props)
    this.state.classList.push('is-success')
  }
}

class DangerTable extends Table {
  constructor(props) {
    super(props)
    this.state.classList.push('is-danger')
  }
}

class WarningTable extends Table {
  constructor(props) {
    super(props)
    this.state.classList.push('is-warning')
  }
}

export {
  Table,
  TableBody,
  TableFoot,
  TableHead,
  TableHeadCell,
  TableRow,
  TableRowCell,
  PrimaryTable,
  InfoTable,
  SuccessTable,
  DangerTable,
  WarningTable,
}