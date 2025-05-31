import React from "react";
class Header2 extends React.Component {
  constructor(props) {
    super(props);
    console.log("contructor called and state is initialized")
    this.state = {favoritefood: "rice"};
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("shouldComponentUpdate called")
    return this.state.favoritefood !== nextProps.favoritefood
  }

  changeFood=()=>{
    this.setState({favoritefood:"burger"})
  }

  componentDidUpdate(prevProps,prevState){
    console.log("componentDidUpdate called ")
  }

   render() {
    console.log("render method called and component is mounted")
    return (<>
      <h1>My Favorite Food is {this.state.favoritefood}</h1>
      <button onClick={this.changeFood} >Click</button>
      </>
    );
  }
}

export default Header2;