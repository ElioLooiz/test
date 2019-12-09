import React, {Component} from 'react'

class TableItem extends Component {

render() {

const targeted = this.props.targeted ? ('bg-success') : (' ')
  console.log(this.props.index, 'index modal')
    return (
      <tr tabIndex="0" className={targeted}
      onClick={() => this.props.onClick(this.props.id)}
      onKeyDown={(event, id) => this.props.onKeyDown(event, this.props.index)}>
        <th scope="row">{this.props.model}</th>
        <td>{this.props.year}</td>
        <td>{this.props.modelBody}</td>
      </tr>
    )
  }
}

export default TableItem
