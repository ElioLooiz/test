import * as React from "react";
import {TaskList} from './TaskList'

type MyState = {
  isTableVisible: boolean;
  searchModel: string;
  searchYear: string;
  isModal: boolean;
};

export class SecondActionComponent extends React.Component<{},MyState> {

  constructor(props: any) {
      super(props);
      this.state = {
        isTableVisible: true,
        searchModel: '',
        searchYear: '',
        isModal: false,
      };
    }

  showModal(open: boolean) {
    if(open) {
      this.setState({
        isTableVisible: false,
        isModal: true,
      })
    } else {
      this.setState({
        isTableVisible: true,
        isModal: false,
      })
    }
  }

  render() {
      return (
      <div className="row text-white">
          <div className="col-md-12 overflow-auto" style={{ height: '400px', cursor: 'pointer'}}>
            <TaskList
              isTableVisible = {this.state.isTableVisible}
              showModal={(open: boolean) => this.showModal(open)}
              isModal={this.state.isModal}
            />
          </div>
      </div>
    )
  }
}
