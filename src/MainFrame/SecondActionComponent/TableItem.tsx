import * as React from "react";


type MyProps = {
  key: string;
  task: string;
  desc: string;
  index: number;
  targeted: boolean;
  onClick: any;
  onKeyDown: any;
};
type MyState = {
};


export class TableItem extends React.Component<MyProps,MyState> {

render() {
const targeted = this.props.targeted ? ('bg-success p-1') : ('p-1')
  console.log(this.props.index, 'index modal')
    return (
    <div>
        <hr className="bg-white"/>
        <div tabIndex={0} className={targeted}
        onClick={() => this.props.onClick(this.props.index)}
        onKeyDown={() => this.props.onKeyDown(event, this.props.index)}
        onDoubleClick={(() => this.props.onKeyDown("double", this.props.index))}
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
