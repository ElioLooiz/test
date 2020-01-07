import * as React from "react";
import {FolderItem} from './FolderItem'

type MyProps = {
  currentTarget: number[];
  onClick: any;
  onKeyDown: any;
  countFiles: any;
};
type MyState = {
  data: any[];
  isLoading: boolean;
};

export class TreeFrame extends React.Component<MyProps,MyState> {

  constructor(props: any) {
      super(props);
      this.state = {
        data: [],
        isLoading: false,
      };
    }


  divRef: any = React.createRef();

  componentDidMount() {
    if (this.divRef.current) {
      this.divRef.current.focus();
    }
         const xhr = new XMLHttpRequest()
         xhr.open('GET', '../directories.json', true)
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

       if (isLoading) {
         return <img src='/i/preloader.gif' alt='загружаю...' />
       } else {
         return data.map((item, id) => {
           let targeted: boolean = false;
           if(this.props.currentTarget[0] === id && this.props.currentTarget[1] === -1) {
             targeted = true;
           } else {
             targeted = false;
           }
           return <FolderItem
           key={item._id}
           folderId={item._id}
           name={item.name}
           index={item.index}
           id={id}
           currentTarget = {this.props.currentTarget}
           countFiles = {(folderIndex: number, i: number)  => this.props.countFiles(folderIndex, i)}
           targeted={targeted}
           onClick={(folderIndex: number, fileIndex: number) => this.props.onClick(folderIndex, fileIndex)}
           onKeyDown={(event: React.KeyboardEvent<HTMLTableRowElement>, id: number) => this.props.onKeyDown(event, id)}
           />
         })
       }
     }

    render() {
      return (
        <div>
            <div>
              {this.renderProducts()}
            </div>
        </div>
      );
    }
}
