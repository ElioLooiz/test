import * as React from "react";

export interface Header { }

export class Header extends React.Component {

render() {
    return (
      <div className="header">
            <h1>Cars<span>PRO</span></h1>
            <p>Hello, Tester<br/>Welcome to CarsPro 2019</p>
      </div>
    )
  }
}
