import * as React from "react";
import {Header} from './Header';
import {MainFrame} from './MainFrame';
import {Footer} from './Footer';
import 'bootstrap/dist/css/bootstrap.css'

export interface App { }

export class App extends React.Component {
    render() {
      return (
        <div className="container bg-dark border border-dark" >
          <Header></Header>
          <MainFrame></MainFrame>
          <Footer></Footer>
        </div>
      );
    }
}
