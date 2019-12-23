import * as React from "react";
import {TreeFrame} from './TreeFrame'
import {ResultFrame} from './ResultFrame'

type MyState = {
  currentTarget: number[];
  numOfFiles: number[];
};

export class ThirdActionComponent extends React.Component<{},MyState> {

  constructor(props: any) {
      super(props);
      this.state = {
        currentTarget: [0,-1],
        numOfFiles: [],
      };
    }

  render() {
      return (
        <div className="row text-white">
          <div  className="col-md-3" style={{height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <TreeFrame

              currentTarget = {this.state.currentTarget}
              countFiles = {(folderIndex: number, i: number)  => this.countFiles(folderIndex, i)}
              onClick={(folderIndex: number, fileIndex: number) => this.handleClick(folderIndex, fileIndex)}
              onKeyDown={(event: React.KeyboardEvent<HTMLTableRowElement>, id: number) => this.handleKeys(event, id)}
            />

          </div>
          <div className="col-md-9 bg-secondary overflow-auto" style={{height: '400px'}}>
          <ResultFrame
            currentTarget = {this.state.currentTarget}
          />
          </div>
        </div>
      )
    }

  handleClick(folderIndex: number, fileIndex: number) {
      const currentTarget = this.state.currentTarget.slice();
      currentTarget[0] = folderIndex;
      currentTarget[1] = fileIndex;
      this.setState({currentTarget: currentTarget});
    }

  countFiles(folderIndex: number, i: number) {
      const numOfFiles = this.state.numOfFiles.slice();
      numOfFiles[folderIndex] = i;
        this.setState({
          numOfFiles: numOfFiles
        });
      }

  handleKeys(event: any, id: number) {

      const currentTarget = this.state.currentTarget.slice();

      if(event.keyCode === 40) {
        if(currentTarget[0] + 1 > this.state.numOfFiles.length - 1 && currentTarget[1] + 1 > this.state.numOfFiles[currentTarget[0]] - 1) { return }
        if(currentTarget[1] + 1 <= this.state.numOfFiles[currentTarget[0]] - 1) {
          currentTarget[1] = currentTarget[1] + 1;
          this.setState({currentTarget: currentTarget});
        }
        else {
          currentTarget[1] = -1;
          currentTarget[0] = currentTarget[0] + 1;
          this.setState({currentTarget: currentTarget});
        }
      }

      if(event.keyCode === 38) {
        if(currentTarget[1] - 1 === -2 && currentTarget[0] === 0) { return }
        if(currentTarget[1] === -1) {
          currentTarget[1] = this.state.numOfFiles[currentTarget[0] - 1] - 1;
          currentTarget[0] = currentTarget[0] - 1;
          this.setState({currentTarget: currentTarget});
        }
        else {
          currentTarget[1] = currentTarget[1] - 1;
          this.setState({currentTarget: currentTarget});
        }
      }
    }
}
