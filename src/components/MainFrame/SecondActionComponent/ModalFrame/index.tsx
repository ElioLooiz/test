import * as React from "react";

type MyProps = {
  key: string;
  task: string;
  desc: string;
  index: number;
  targeted: boolean;
  onClick: any;
};

export class ModalFrame extends React.Component<MyProps,{}> {

render() {
    return (
    <div className="modalframe">
        <p>Событие: {this.props.task}</p>
        <p>Описание: {this.props.desc}</p>
        <button className="form-button" onClick={this.props.onClick}>Закрыть</button>
    </div>
    )}
}
