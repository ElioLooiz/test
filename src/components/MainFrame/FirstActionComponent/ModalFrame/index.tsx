import * as React from "react";

type MyProps = {
  key: string;
  model: string;
  year: string;
  conf: string;
  modelBody: string;
  index: number;
  targeted: boolean;
  onClick: any;
};

export class ModalFrame extends React.Component<MyProps,{}> {

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
