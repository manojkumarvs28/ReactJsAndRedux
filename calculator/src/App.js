import React, { Component } from 'react';
import classes from './App.css';
import Display from './components/Display/Display';
import Buttons from './components/Buttons/Buttons';
import Button from './components/Button/Button';


class App extends Component {
  state={
    operations:[]
  }

  calculateResult = () => {
      let result = this.state.operations.join('');
      if(result) {
        result= String(eval(result));
        this.setState({
          operations:[result]
        })
      }
  }

  onClickHandler = (e) => {
    let value = e.target.getAttribute('data-value');
    switch(value) {
      case "clear":
           this.setState({operations:[]});
         break;
      case "equal":
          this.calculateResult();
        break;
      default : 
         this.setState({
          operations:[...this.state.operations, value]
         })
       break;  
    }
  }

  render() {
    return (
      <div className={classes.App}>
         <Display data={this.state.operations}/>
         <Buttons>
           <Button onClick={this.onClickHandler} label="C" value="clear"></Button>
           <Button onClick={this.onClickHandler} label="7" value="7"></Button>
           <Button onClick={this.onClickHandler} label="4" value="4"></Button>
           <Button onClick={this.onClickHandler} label="1" value="1"></Button>
           <Button onClick={this.onClickHandler} label="0" value="0"></Button>

           <Button onClick={this.onClickHandler} label="/" value="/"></Button>
           <Button onClick={this.onClickHandler} label="8" value="8"></Button>
           <Button onClick={this.onClickHandler} label="5" value="5"></Button>
           <Button onClick={this.onClickHandler} label="2" value="2"></Button>
           <Button onClick={this.onClickHandler} label="." value="."></Button>

           <Button onClick={this.onClickHandler} label="x" value="*"></Button>
           <Button onClick={this.onClickHandler} label="9" value="9"></Button>
           <Button onClick={this.onClickHandler} label="6" value="6"></Button>
           <Button onClick={this.onClickHandler} label="3" value="3"></Button>
           <Button label="" value="null"></Button>

           <Button onClick={this.onClickHandler} label="-" value="-"></Button>
           <Button onClick={this.onClickHandler} label="+" value="+" size="2"></Button>
           <Button onClick={this.onClickHandler} label="=" value="equal" size="2"></Button>
         </Buttons>  
      </div>
    );
  }
}

export default App;
