import * as React from "react";
import {Header} from './Header';
import {MainFrame} from './MainFrame';
import {Footer} from './Footer';
import './app.css'



export interface App { }

export class App extends React.Component {
    render() {
      return (
        <div className="container" >
          <Header></Header>
          <MainFrame></MainFrame>
          <Footer></Footer>
        </div>
      );
    }
}
