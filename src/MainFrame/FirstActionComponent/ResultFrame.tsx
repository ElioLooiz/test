import * as React from "react";
import {TableItem} from './TableItem'
import {ModalFrame} from './ModalFrame'


type MyProps = {
  isTableVisible: boolean;
  valueModel: string;
  valueYear: string;
  showModal: any;
  isModal: boolean;
};
type MyState = {
  data: any[];
  isLoading: boolean;
  targetRow: number;
  numRows: number;
  isModal: boolean;
  modalIndex: number;
};


export class ResultFrame extends React.Component<MyProps,MyState> {

  constructor(props: any) {
    super(props)

    this.state = {
      data: [],
      isLoading: false,
      targetRow: 0,
      numRows: 0,
      isModal: false,
      modalIndex: 0,
    }

this.handleKeys = this.handleKeys.bind(this);

  }

  componentDidMount() {
     const xhr = new XMLHttpRequest()
     xhr.open('GET', '../data.json', true)
     xhr.send()
     this.setState({ isLoading: true })

     xhr.onreadystatechange = () => {
       if (xhr.readyState !== 4) {
         return false
       }

       if (xhr.status !== 200) {
         console.log(xhr.status + ': ' + xhr.statusText)
       } else {
         this.setState({
           data: JSON.parse(xhr.responseText),
           isLoading: false,
         })
       }
     }
   }

  renderProducts() {
    const { data, isLoading } = this.state
    const filteredData = data.filter(item => {
      if(this.props.valueModel !== item.model || this.props.valueYear !== item.year) {
        return false
      }
      else {
        return true
      }
    })

    if (isLoading) {
      return <img src='/i/preloader.gif' alt='загружаю...' />
    } else {
      return filteredData.map((item, id) => {
        if(this.props.valueModel !== item.model || this.props.valueYear !== item.year) {
          return ''
        }
        else {
          return <TableItem
          key={item._id}
          model={item.model}
          year={item.year}
          modelBody={item.modelBody}
          index={item.index}
          id={id}
          targeted={this.state.targetRow === id}
          onClick={(i: number) => this.handleClick(i)}
          onKeyDown={(event: any, id: number) => this.handleKeys(event, id)}
          />
        }
      })
    }
  }

  renderModal() {
   const { data, isLoading } = this.state
   const filteredData = data.filter(item => {
     if(this.state.modalIndex !== item.index) {
       return false
     }
     else {
       return true
     }
   })
   if (isLoading) {
     return <img src='/i/preloader.gif' alt='загружаю...' />
   } else {
     return filteredData.map(item => {
         return <ModalFrame
         key={item._id}
         model={item.model}
         year={item.year}
         conf={item.conf}
         modelBody={item.modelBody}
         index={item.index}
         targeted={this.state.targetRow === item.index}
         onClick={() => this.closeModalClick()}
         />
     })
   }
 }

render() {
    let table: any;
    if(this.props.isTableVisible) {
        table = (
        <table className="table table-hover table-dark w-100 overflow-auto">
          <thead>
            <tr>
              <th scope="col">Модель</th>
              <th scope="col">Год</th>
              <th scope="col">Тип кузова</th>
            </tr>
          </thead>
          <tbody>
              {this.renderProducts()}
          </tbody>
        </table>)

    }  else {
      if(this.props.isModal) {
        table = this.renderModal()
      } else {
        table = <div className="w-100 h-100 text-center"><p className="h5">Заполните форму поиска</p></div>
      }
    }

    return(
      <div className="w-100 h-100">
        {table}
      </div>
    )}

    handleClick(i: number) {
        this.setState({targetRow: i});
      }

    closeModalClick() {
      this.props.showModal(false)
      this.setState({
        isModal: false,
      })
    }

    handleKeys(event: any, id: number) {
      if(event.keyCode === 40) {
        if(this.state.targetRow + 1 === this.state.numRows) {
          this.setState({targetRow: this.state.numRows});
        }
        this.setState({targetRow: this.state.targetRow + 1});
      }

      if(event.keyCode === 38) {
        if(this.state.targetRow - 1 === this.state.numRows) {
          this.setState({targetRow: this.state.numRows});
        }
        this.setState({targetRow: this.state.targetRow - 1});
      }

      if(event.keyCode === 115) {
        console.log('openFrame', this.state.targetRow);
        this.props.showModal(true)
        this.setState({
          isModal: true,
          modalIndex: id,
        })
      }
    }
}
