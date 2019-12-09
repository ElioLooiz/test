import React, {Component} from 'react'
import SearchFrame from './SearchFrame'
import ResultFrame from './ResultFrame'


class FirstActionComponent extends Component {

  constructor(props) {
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


    handleChangeModel(event) {
      this.setState({valueModel: event.target.value});
    }

    handleChangeYear(event) {
      this.setState({valueYear: event.target.value});
    }

    handleSubmit(event) {
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


      showModal(open) {
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
            onChangeModel={(event) => this.handleChangeModel(event)}
            onChangeYear={(event) => this.handleChangeYear(event)}
            onSubmit={(event) => this.handleSubmit(event)}
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
            showModal={(open) => this.showModal(open)}
            isModal={this.state.isModal}
          />
        </div>
      </div>
    )
  }
}


export default FirstActionComponent
