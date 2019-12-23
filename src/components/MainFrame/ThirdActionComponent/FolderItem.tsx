import * as React from "react";
import {FileItem} from './FileItem'

type MyProps = {
  key: string;
  folderId: string;
  name: string;
  index: number;
  id: number;
  targeted: boolean;
  onClick: any;
  onKeyDown: any;
  countFiles: any;
  currentTarget: number[];
};

type MyState = {
  data: any[];
  isLoading: boolean;
  currentState: boolean;
  numOfFiles: number;
};

export class FolderItem extends React.Component<MyProps,MyState> {

  constructor(props: any) {
      super(props);
      this.state = {
        data: [],
        isLoading: false,
        currentState: false,
        numOfFiles: 0,
      };
    }

  divRef: any = React.createRef();

  componentDidMount() {
      if (this.divRef.current) {
        this.divRef.current.focus();
      }
     const xhr = new XMLHttpRequest()
     xhr.open('GET', '../files.json', true)
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

         const filteredData = this.state.data.filter(item => {
           if(this.props.folderId !== item.dir_id) {
             return false
           }
           else {
             return true
           }
         })
         this.setState({
           data: filteredData,
           numOfFiles: filteredData.length,
         })
         console.log(this.state.numOfFiles + 'number')
         this.props.countFiles(this.props.id, this.state.numOfFiles)
       }
     }
  }


   renderProducts() {
     const { isLoading } = this.state
     if (isLoading) {
       return <img src='/i/preloader.gif' alt='загружаю...' />
     } else {
       return this.state.data.map((item, id) => {

         let targeted: boolean = false;
         if(this.props.currentTarget[0] === this.props.index && this.props.currentTarget[1] === id) {
           targeted = true;
         } else {
           targeted = false;
         }

           return <FileItem
           key={item._id}
           model={item.model}
           year={item.year}
           modelBody={item.modelBody}
           index={id}
           id={this.props.id}
           folderIndex = {this.props.index}
           targeted={targeted}
           onClick={(folderIndex: number, fileIndex: number) => this.props.onClick(folderIndex, fileIndex)}
           onKeyDown={(event: React.KeyboardEvent<HTMLTableRowElement>, id: number) => this.props.onKeyDown(event, this.props.index)}
           />
       })
     }
   }

render() {
  const targeted :string = this.props.targeted ? ('h5 bg-success') : ('h5')
  return (
    <div>
        <hr className="bg-white"/>
        <div>
            <p className={targeted}
              ref={this.divRef}
              tabIndex={0}
              onClick={() => this.props.onClick(this.props.id, -1)}
              onKeyDown={(event: any) => this.props.onKeyDown(event, this.props.id)}
              >
            {this.props.name}
            </p>
            {this.renderProducts()}
        </div>
        <hr className="bg-white"/>
    </div>
    )
  }
}
