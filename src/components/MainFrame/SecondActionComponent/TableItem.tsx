import * as React from "react";
var classNames = require('classnames');

type MyProps = {
  key: string;
  task: string;
  desc: string;
  index: number;
  targeted: boolean;
  onClick: any;
  onKeyDown: any;
};

export class TableItem extends React.Component<MyProps,{}> {

  divRef: any = React.createRef();

  componentDidMount() {
    if(this.props.index === 0) {
      if (this.divRef.current) {
        this.divRef.current.focus();
      }
    }

  }

  render() {
    var targeted = classNames({
      tableitem: true,
      'table-target': this.props.targeted,
    });
      return (
      <div>
          <hr/>
          <div tabIndex={0} className={targeted}
          onClick={() => this.props.onClick(this.props.index)}
          onKeyDown={(event: any) => this.props.onKeyDown(event, this.props.index)}
          onDoubleClick={() => this.props.onKeyDown("double", this.props.index)}
           ref={this.divRef}>
              <p>
              {this.props.task}
              </p>
              <p>
              {this.props.desc}
              </p>
          </div>
          <hr/>
      </div>
      )
    }
}
