import * as React from "react";
import {SearchFrame} from './SearchFrame'
import {ResultFrame} from './ResultFrame'

type MyState = {
  valueModel: string;
  valueYear: string;
  isTableVisible: boolean;
  searchModel: string;
  searchYear: string;
  isModal: boolean;
};

export class FirstActionComponent extends React.Component<{},MyState> {

  constructor(props: any) {
      super(props);
      this.state = {
        valueModel: 'c-class',
        valueYear: '2015',
        isTableVisible: false,
        searchModel: '',
        searchYear: '',
        isModal: false,
      };
      this.handleChangeModel = this.handleChangeModel.bind(this);
      this.handleChangeYear = this.handleChangeYear.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeModel(event: any) {
      this.setState({valueModel: event.target.value});
    }

    handleChangeYear(event: any) {
      this.setState({valueYear: event.target.value});
    }

    handleSubmit(event: any) {
      this.setState({
        isTableVisible: true,
        searchModel: this.state.valueModel,
        searchYear: this.state.valueYear,
      })
      event.preventDefault();
    }

    handleClick() {                          //метод иниициализирующий поиск в ResultFrame
        this.setState({valueModel: ''});
        this.setState({valueYear: ''});
        this.setState({
          isTableVisible: false,
          isModal: false,
        })
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
        <div className="col-md-3" style={{height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <SearchFrame
            onChangeModel={(event: any) => this.handleChangeModel(event)}
            onChangeYear={(event: any) => this.handleChangeYear(event)}
            onSubmit={(event: any) => this.handleSubmit(event)}
            onClick={() => this.handleClick()}
            valueModel={this.state.valueModel}
            valueYear={this.state.valueYear}
          />
        </div>
        <div className="col-md-9 bg-secondary overflow-auto" style={{height: '400px'}}>
          <ResultFrame
            isTableVisible = {this.state.isTableVisible}
            valueModel={this.state.searchModel}
            valueYear={this.state.searchYear}
            showModal={(open: boolean) => this.showModal(open)}
            isModal={this.state.isModal}
          />
        </div>
      </div>
    )
  }
}
