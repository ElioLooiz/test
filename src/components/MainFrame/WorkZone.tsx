import * as React from "react";
import {FirstActionComponent} from './FirstActionComponent'
import {SecondActionComponent} from './SecondActionComponent'
import {ThirdActionComponent} from './ThirdActionComponent'

import {Route} from 'react-router-dom';


type MyProps = { buttons: boolean[]; };
type MyState = { buttons: boolean[]; };

export class WorkZone extends React.Component<MyProps,MyState> {

render() {


  return (
      <div className="fa-workzone">
        <Route exact path="/first" component={FirstActionComponent} />
        <Route exact path="/second" component={SecondActionComponent} />
        <Route exact path="/third" component={ThirdActionComponent} />
      </div>
  )}
}
