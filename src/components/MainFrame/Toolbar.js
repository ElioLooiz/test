import React, {Component} from 'react'

class Toolbar extends Component {

render() {
    return (
      <div className="test text-center h-100" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <button className="btn btn-secondary btn-lg" style={{margin:'10px 0px'}} onClick={() => this.props.onClick(0)}>Поиск</button>
          <button className="btn btn-secondary btn-lg" style={{margin:'10px 0px'}}  onClick={() => this.props.onClick(1)}>История</button>
          <button className="btn btn-secondary btn-lg" style={{margin:'10px 0px'}}  onClick={() => this.props.onClick(2)}>Ошибки</button>
      </div>
    )
  }
}

export default Toolbar
