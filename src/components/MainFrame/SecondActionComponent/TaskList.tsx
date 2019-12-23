import * as React from "react";
import {TableItem} from './TableItem'
import {ModalFrame} from './ModalFrame'

type MyProps = {
  isTableVisible: boolean;
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
  taskNum: number;
};

export class TaskList extends React.Component<MyProps,MyState> {

  constructor(props: any) {
    super(props)

    this.state = {
      data: [],
      isLoading: false,
      targetRow: 0,
      numRows: 0,
      isModal: false,
      modalIndex: 0,
      taskNum: 0,
    }

    this.handleKeys = this.handleKeys.bind(this);
  }

  componentDidMount() {
     const xhr = new XMLHttpRequest();
     xhr.open('GET', '../tasks.json', true);
     xhr.send();
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
           taskNum: this.state.data.length,
         })
         this.setState({
           taskNum: this.state.data.length,
         })
       }
     }
   }

  renderProducts() {
    const { data, isLoading } = this.state
    if (isLoading) {
      return <p>Загрузка...</p>
    } else {
      return data.map((item, id) => {
          console.log(this.state.targetRow);
          return <TableItem
          key={item._id}
          task={item.task}
          desc={item.desc}
          index={id}
          targeted={this.state.targetRow === id}
          onClick={(i: number) => this.handleClick(i)}
          onKeyDown={(event: any, id: number) => this.handleKeys(event, id)}
          />
      })
    }
  }

  renderModal() {
   const { data, isLoading } = this.state
   const filteredData = data.filter((item,id) => {
     if(this.state.modalIndex !== id) {
       return false
     }
     else {
       return true
     }
   })
 console.log(filteredData);
   if (isLoading) {
     return <p>Загрузка...</p>
   } else {
     return filteredData.map((item, id) => {
         return <ModalFrame
         key={item._id}
         task={item.task}
         desc={item.desc}
         index={id}
         targeted={this.state.targetRow === id}
         onClick={() => this.closeModalClick()}
         />
     })
   }
 }

render() {
    let table: any
    if(this.props.isTableVisible) {
        table = (
        <div>
            {this.renderProducts()}
        </div>)

    }  else {
      if(this.props.isModal) {
        table = this.renderModal()
      } else {
        table = <div>Заполните форму поиска</div>
      }

    }

    return(
      <div>
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
        if(this.state.targetRow + 1 >= this.state.taskNum)  {return}
        if(this.state.targetRow + 1 === this.state.numRows) {
          this.setState({targetRow: this.state.numRows});
        }
        this.setState({targetRow: this.state.targetRow + 1});
      }

      if(event.keyCode === 38) {
        if(this.state.targetRow - 1 < 0) {
          this.setState({targetRow: this.state.numRows});
        } else {
          this.setState({targetRow: this.state.targetRow - 1});
        }
      }

      if(event === "double") {
        console.log('openFrame', this.state.targetRow);
        this.props.showModal(true)
        this.setState({
          isModal: true,
          modalIndex: id,
        })
      }

      if(event.keyCode === 13) {
        console.log('openFrame', this.state.targetRow);
        this.props.showModal(true)
        this.setState({
          isModal: true,
          modalIndex: id,
        })
      }
    }
}
