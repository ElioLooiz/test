import * as React from "react";
import {Toolbar} from './Toolbar'
import {WorkZone} from './WorkZone'

export interface MainFrameProps { buttons: boolean[]; }

type MyProps = {};
type MyState = { buttons: boolean[]; };

export class MainFrame extends React.Component<MyProps, MyState> {

  constructor(props: any) {
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
            onClick={(i: number) => this.handleClick(i)}
            ></Toolbar>
        </div>
        <div className="col-md-10" style={{ height: '400px'}}>
            <WorkZone buttons={this.state.buttons}></WorkZone>
        </div>
    </div>
  )}

  handleClick(i: number) {
      let buttons: boolean[] = this.state.buttons.slice();
      if(buttons[i] !== !buttons[i]) {
        buttons =  Array(3).fill(false)
      }
      buttons[i] = !buttons[i];
      this.setState({buttons: buttons});
      console.log(buttons, '---' ,i);
    }
  }
