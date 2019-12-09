import React, {Component} from 'react'

class ModalFrame extends Component {

render() {
    return (
    <div className="text-center mt-5 bg-dark p-5 rounded">
      <p className="h5">Модель: {this.props.model}</p>
      <p className="h5">Год выпуска: {this.props.year}</p>
      <p className="h5">Номер кузова: {this.props.modelBody}</p>
      <p className="h5">Тип кузова: {this.props.conf}</p>
      <button className="btn btn-light" onClick={this.props.onClick}>Закрыть</button>
    </div>)
  }
}


export default ModalFrame
