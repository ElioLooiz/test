import * as React from "react";

type MyProps = {
  key: string;
  model: string;
  year: string;
  modelBody: string;
  index: number;
  id: number;
  isFolder: boolean;
  conf: string;
};

export class TableItem extends React.Component<MyProps,{}> {

render() {
  if(!this.props.isFolder) {
    return (
      <tr>
        <th >{this.props.model}</th>
        <td>{this.props.year}</td>
        <td>{this.props.modelBody}</td>
        <td>{this.props.conf}</td>
      </tr>
    )
  } else {
    return (
      <tr>
        <th >{this.props.model}</th>

      </tr>
      )
    }
  }
}
