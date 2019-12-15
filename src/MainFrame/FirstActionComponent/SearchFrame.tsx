import * as React from "react";

type MyProps = {
  onChangeModel: any;   //трудности с подбором нужных типов для методов родительского класса
  onChangeYear: any;
  onSubmit: any;
  onClick: any;
  valueModel: string;
  valueYear: string;
};
type MyState = {};

export class SearchFrame extends React.Component<MyProps,MyState> {

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
