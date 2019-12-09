import React, {PureComponent} from 'react'

class SearchFrame extends PureComponent {

    render() {
      return (
        <div className="text-center">
          <form onSubmit={this.props.onSubmit} >
            <label>
              <p className="">Введите модель:</p>
              <input className="form-control" type="text" value={this.props.valueModel} onChange={this.props.onChangeModel} />
            </label>
            <label>
              <p className="">Введите год выпуска:</p>
              <input className="form-control" type="text" value={this.props.valueYear} onChange={this.props.onChangeYear} />
            </label>
            <input className="btn btn-light w-100" style={{margin:'10px 0px'}} type="submit" value="Поиск" />
          </form>
          <button className="btn btn-light w-100" style={{margin:'10px 0px'}} onClick={this.props.onClick}>Очистить</button>
        </div>
      );
    }
}

export default SearchFrame
