import * as React from "react";
import {TableItem} from './TableItem';

type MyProps = {
  currentTarget: number[];
};
type MyState = {
  data: any[];
  isLoading: boolean;
};

export class ResultFrame extends React.Component<MyProps,MyState> {

  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
      isLoading: false,
    }
  }


  componentDidUpdate(prevProps: any) {
     const xhr = new XMLHttpRequest()
     xhr.open('GET', '../files.json', true)
     xhr.send()

     if (this.props.currentTarget !== prevProps.currentTarget) {

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

             const filteredData = this.state.data.filter(item => {
               if(this.props.currentTarget[0] !== item.folderId) {
                 return false;
               }
               else {
                 if(this.props.currentTarget[1] === -1) {
                   return true;
                 }
                 if(this.props.currentTarget[1] !== item.index) {
                   return false;
                 } else return true;

               }
             })
             this.setState({
               data: filteredData,
             })
           }
        }
     }
  }

       renderProducts() {
         const { isLoading } = this.state
         if (isLoading) {
           return <img src='/i/preloader.gif' alt='загружаю...' />
         } else {
           return this.state.data.map((item, id) => {
             return <TableItem
             key={item._id}
             model={item.model}
             year={item.year}
             modelBody={item.modelBody}
             index={item.index}
             conf={item.conf}
             id={id}
             isFolder={this.props.currentTarget[1] === -1}
             />
           })
         }
       }

       render() {
           let table: any;
           if(this.props.currentTarget[1] === -1) {
               table = (
               <table className="table table-hover table-dark w-100 overflow-auto">
                 <thead>
                   <tr>
                     <th scope="col">Содержимое папки</th>
                   </tr>
                 </thead>
                 <tbody>
                     {this.renderProducts()}
                 </tbody>
               </table>)

           }  else {
             table = (
             <table className="table table-hover table-dark w-100 overflow-auto">
               <thead>
                 <tr>
                   <th scope="col">Модель</th>
                   <th scope="col">Год</th>
                   <th scope="col">Номер кузова</th>
                   <th scope="col">Тип кузова</th>
                 </tr>
               </thead>
               <tbody>
                   {this.renderProducts()}
               </tbody>
             </table>)
           }

           return(
             <div className="w-100 h-100">
               {table}
             </div>
           )}

}
