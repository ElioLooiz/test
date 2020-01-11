import * as React from "react";
import {Toolbar} from './Toolbar'
import {WorkZone} from './WorkZone'

import {Router} from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history: any = createBrowserHistory();


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
  <Router history={history}>
    <div className="main-frame">
        <div className="toolbar">
            <Toolbar
            onClick={(i: number) => this.handleClick(i)}
            ></Toolbar>
        </div>
        <div className="workzone">
            <WorkZone buttons={this.state.buttons}></WorkZone>
        </div>
    </div>
  </Router>
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
