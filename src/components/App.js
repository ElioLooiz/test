import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header'
import MainFrame from './MainFrame'
import Footer from './Footer'

class App extends Component {

render() {
    return (
      <div className="container bg-dark border border-dark" >
        <Header></Header>
        <MainFrame>

        </MainFrame>
        <Footer></Footer>
      </div>
    )
  }
}

export default App
