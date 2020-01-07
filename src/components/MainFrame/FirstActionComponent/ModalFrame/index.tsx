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
    <div className="modalframe">
      <p>Модель: {this.props.model}</p>
      <p>Год выпуска: {this.props.year}</p>
      <p>Номер кузова: {this.props.modelBody}</p>
      <p>Тип кузова: {this.props.conf}</p>
      <button className="form-button" onClick={this.props.onClick}>Закрыть</button>
    </div>)
  }
}
