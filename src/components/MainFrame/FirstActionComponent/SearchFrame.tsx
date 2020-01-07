import * as React from "react";

type MyProps = {
  onChangeModel: any;   //трудности с подбором нужных типов для методов родительского класса
  onChangeYear: any;
  onSubmit: any;
  onClick: any;
  valueModel: string;
  valueYear: string;
};

export class SearchFrame extends React.Component<MyProps,{}> {

  divRef: any = React.createRef();

  componentDidMount() {
          if (this.divRef.current) { this.divRef.current.focus(); }
        }

    render() {
      return (
        <div className="form-container">
          <form onSubmit={this.props.onSubmit} className="search-form">
            <label>
              <p className="">Введите модель:</p>
              <input ref={this.divRef} className="form-control" type="text" value={this.props.valueModel} onChange={this.props.onChangeModel} />
            </label>
            <label>
              <p className="">Введите год выпуска:</p>
              <input className="form-control" type="text" value={this.props.valueYear} onChange={this.props.onChangeYear} />
            </label>
            <input className="form-button" type="submit" value="Поиск" />
          </form>
          <button className="form-button" onClick={this.props.onClick}>Очистить</button>
        </div>
      );
    }
}
