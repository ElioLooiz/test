import * as React from "react";

import {Link} from 'react-router-dom';


type MyProps = {onClick: any};
type MyState = {};

export class Toolbar extends React.Component<MyProps, MyState> {

render() {
    return (
      <div>
        <div className="button"><Link className="text-deco" to="/first">Каталог</Link></div>
        <div className="button"><Link className="text-deco" to="/second">История</Link></div>
        <div className="button"><Link className="text-deco" to="/third">Аукцион</Link></div>
      </div>
    )
  }
}
