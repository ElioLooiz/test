import * as React from "react";
var classNames = require('classnames');

type MyProps = {
  key: string;
  model: string;
  year: string;
  modelBody: string;
  index: number;
  id: number;
  targeted: boolean;
  onClick: any;
  onKeyDown: any;
  folderIndex: number;
};

export class FileItem extends React.Component<MyProps,{}> {

render() {
  var targeted = classNames({
    'table-target': this.props.targeted,
  });
    return (
    <div>
        <div tabIndex={0}
        onClick={() => this.props.onClick(this.props.folderIndex, this.props.index)}
        onKeyDown={(event: any) => this.props.onKeyDown(event, this.props.folderIndex)}
        >
            <li className={targeted}>
            {this.props.model}
            </li>
        </div>
    </div>
    )
  }
}
