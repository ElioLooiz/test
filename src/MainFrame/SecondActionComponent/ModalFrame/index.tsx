import * as React from "react";


type MyProps = {
  key: string;
  task: string;
  desc: string;
  index: number;
  targeted: boolean;
  onClick: any;
};
type MyState = {

};



export class ModalFrame extends React.Component<MyProps,MyState> {

render() {
    return (
    <div className="text-center mt-5 bg-secondary p-5 rounded">
        <p className="h5">Событие: {this.props.task}</p>
        <p className="h5">Описание: {this.props.desc}</p>
        <button className="btn btn-light" onClick={this.props.onClick}>Закрыть</button>
    </div>
    )}
}
