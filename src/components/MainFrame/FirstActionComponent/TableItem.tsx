import * as React from "react";
import { SyntheticEvent } from 'react';


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
};
type MyState = {};


export class TableItem extends React.Component<MyProps,MyState> {

render() {

const targeted :string = this.props.targeted ? ('bg-success') : (' ')
  console.log(this.props.index, 'index modal')
    return (
      <tr tabIndex = {0} className = {targeted}
      onClick={() => this.props.onClick(this.props.id)}
      onKeyDown={(event: any) => this.props.onKeyDown(event, this.props.index)}>
        <th scope="row">{this.props.model}</th>
        <td>{this.props.year}</td>
        <td>{this.props.modelBody}</td>
      </tr>
    )
  }
}
