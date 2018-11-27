import React from 'react';

class Main extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0,
      name: 'This is the main content from state'
    }
  }
    render(){
    return(
      <h1>{this.state.name}</h1>
    );
  }
};

export default Main;