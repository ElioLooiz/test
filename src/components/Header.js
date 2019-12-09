import React, {Component} from 'react'

class Header extends Component {

render() {
    return (
      <div className="row bg-light" >
          <div className="col-md-6">
            <h1>Cars<span className="badge badge-secondary">PRO</span></h1>
          </div>
          <div className="col-md-6 ">
            <p className="h5 float-right mt-1">Hello, Tester<br/>Welcome to CarsPro 2019</p>
          </div>
      </div>
    )
  }
}


export default Header
