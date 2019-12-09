import React, {Component} from 'react'

class ModalFrame extends Component {

render() {
    return (
    <div className="text-center mt-5 bg-secondary p-5 rounded">
        <p className="h5">Событие: {this.props.task}</p>
        <p className="h5">Описание: {this.props.desc}</p>
        <button className="btn btn-light" onClick={this.props.onClick}>Закрыть</button>
    </div>
    )}
}

export default ModalFrame
