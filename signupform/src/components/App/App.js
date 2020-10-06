import React, { Component } from 'react';
import classes from './App.css';
import Modal from '../Modal/Modal';

class App extends Component {
  state = {
    mounted:false
  }

  componentDidMount()  {
    this.setState({mounted:true});
  }

  handleSubmit=(event) => {
    this.setState({ mounted: false });
    event.preventDefault();
  }

  render() {
    let child = null;
    if(this.state.mounted){
      child = (<Modal onSubmit={this.handleSubmit}></Modal>)
    }
    return (
      <div className={classes.App}>
        {child}
      </div>
    );
  }
}

export default App;
