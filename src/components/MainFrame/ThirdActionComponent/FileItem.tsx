import * as React from "react";

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

    const targeted :string = this.props.targeted ? ('h5 bg-success') : ('h5')

    return (
    <div>
        <div tabIndex={0}
        onClick={() => this.props.onClick(this.props.folderIndex, this.props.index)}
        onKeyDown={(event: any) => this.props.onKeyDown(event, this.props.folderIndex)}
        >
        {console.log(this.props.folderIndex + ' on key')}
            <li className={targeted}>
            {this.props.model}
            </li>
        </div>
    </div>
    )
  }
}
