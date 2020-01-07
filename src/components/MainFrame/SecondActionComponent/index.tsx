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
      <div className="result-frame-sec">
            <TaskList
              isTableVisible = {this.state.isTableVisible}
              showModal={(open: boolean) => this.showModal(open)}
              isModal={this.state.isModal}
            />
      </div>
    )
  }
}
