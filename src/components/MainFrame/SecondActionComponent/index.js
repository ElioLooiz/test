import React, {Component} from 'react'
import TaskList from './TaskList'

class SecondActionComponent extends Component {

  constructor(props) {
      super(props);
      this.state = {
        isTableVisible: true,
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
          <div className="col-md-12 overflow-auto" style={{ height: '400px', cursor: 'pointer'}}>
            <TaskList
              isTableVisible = {this.state.isTableVisible}
              showModal={(open) => this.showModal(open)}
              isModal={this.state.isModal}
            />
          </div>
      </div>
    )
  }
}

export default SecondActionComponent
