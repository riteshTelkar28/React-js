import React from "react";
import Child from "./Child";

class MyComponent extends React.Component{
    state={
        showChild:true
    }

    handleDelete=()=>{
        this.setState({showChild:false});
    }

    render(){
        const {showChild} = this.state;
        return(<>
            <div>
                {showChild && <Child/>}
                <button onClick={this.handleDelete} >Delete Header</button>
            </div>
        </>)
    }
}

export default MyComponent;