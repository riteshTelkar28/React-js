import React from "react";
import Child from "./Child";

class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log("contructor called and state is initialized")
    this.state = {favoritefood: "rice",showChild:true};
  }

  componentDidMount() {
    console.log("component mounted")
    setTimeout(() => {
      this.setState({favoritefood: "pizza",showChild:true})
    }, 1000)
  }

  changeFood=()=>{
    this.setState({favoritefood:"burger",showChild:true})
  }
  shouldComponentUpdate(nextProps,nextState){
      console.log("shouldComponentUpdate called")
      return this.state.favoritefood !== nextProps.favoritefood
  }

  componentDidUpdate(prevProps,prevState){
    console.log("componentDidUpdate called ")
  }

  handleDelete = ()=>{
      this.setState({favoritefood:"burger", showChild:false})
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps method called ")
  //   return {favoritefood: props.favfod };
  // }

   render() {
    console.log("render method called and component is mounted")
    const {favoritefood,showChild} = this.state;
    return (<>
    {showChild && <Child/>}
      <h1>My Favorite Food is {this.state.favoritefood}</h1>
      <button onClick={this.changeFood}>Click</button>
      <button onClick={this.handleDelete} >Delete child</button>
      </>
    );
  }
}

export default Header;