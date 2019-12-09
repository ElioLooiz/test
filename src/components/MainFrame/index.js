import React, {Component} from 'react'
import Toolbar from './Toolbar'
import WorkZone from './WorkZone'

class MainFrame extends Component {

  constructor(props) {
    super(props)

    this.state = {
      buttons: Array(3).fill(false)
    }
  }

render() {
  return  (

    <div className="row" style={{ height: '400px'}}>
        <div className="col-md-2 bg-light" style={{height: '400px'}}>
            <Toolbar
            onClick={(i) => this.handleClick(i)}
            ></Toolbar>
        </div>
        <div className="col-md-10" style={{ height: '400px'}}>
            <WorkZone buttons={this.state.buttons}></WorkZone>
        </div>
    </div>
  )}

  handleClick(i) {
      let buttons = this.state.buttons.slice();
      if(buttons[i] !== !buttons[i]) {
        buttons =  Array(3).fill(false)
      }
      buttons[i] = !buttons[i];
      this.setState({buttons: buttons});
      console.log(buttons, '---' ,i);
    }
  }

export default MainFrame
