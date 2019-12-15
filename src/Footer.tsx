import * as React from "react";

export interface Footer { }

export class Footer extends React.Component {

render() {
    return (
      <div className="row bg-light" >
          <div className="col-md-12 ">
            <p className="h6 float-right mt-1 text-muted">Copyright © 2019 CarsPro. All rights reserved.</p>
          </div>
      </div>
    )
  }
}
