import * as React from "react";
import {FirstActionComponent} from './FirstActionComponent'
import {SecondActionComponent} from './SecondActionComponent'


type MyProps = { buttons: boolean[]; };
type MyState = { buttons: boolean[]; };


export class WorkZone extends React.Component<MyProps,MyState> {

render() {
  const componentToRender: boolean[] = this.props.buttons
  let renderComponent = <div className="text-white">Раздел в разработке</div>
  if(componentToRender[0]) {
    renderComponent = <div><FirstActionComponent/></div>
  }

  if(componentToRender[1]) {
     renderComponent = <div><SecondActionComponent/></div>
   }
  //
  // if(componentToRender[2]) {
  //   renderComponent = <div>3 component</div>
  // }

  return (
    <div>{renderComponent}</div>
  )}
}
