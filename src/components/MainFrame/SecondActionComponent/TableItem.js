import React, {Component} from 'react'

class TableItem extends Component {

render() {
const targeted = this.props.targeted ? ('bg-success p-1') : ('p-1')
  console.log(this.props.index, 'index modal')
    return (
    <div>
        <hr className="bg-white"/>
        <div tabIndex="0" className={targeted}
        onClick={() => this.props.onClick(this.props.index)}
        onKeyDown={(event, id) => this.props.onKeyDown(event, this.props.index)}
        onDoubleClick={((event, id) => this.props.onKeyDown("double", this.props.index))}
        >
            <p className="h4">
            {this.props.task}
            </p>
            <p className="h5">
            {this.props.desc}
            </p>
        </div>
        <hr className="bg-white"/>
    </div>
    )
  }
}

export default TableItem
