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
};

export class TableItem extends React.Component<MyProps,{}> {

    render() {
      var targeted = classNames({
        'table-target': this.props.targeted,
      });
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
