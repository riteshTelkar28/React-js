import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
class Test extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor runs ")
        this.state = { hello: "World!" };
    }
    componentDidMount() {
        console.log("componentDidMount()");
    }
    changeState() {
        this.setState({ hello: " Ritesh" });
    }
    render() {
        console.log("render methdod")
        return (
            <div>
                <h1>
                     Hello
                    {this.state.hello}
                </h1>
                <h2>
                    <a
                        onClick={this.changeState.bind(
                            this
                        )}
                    >
                        Click Here!
                    </a>
                </h2>
            </div>
        );
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate()");
        return true;
    }
    componentDidUpdate() {
        console.log("componentDidUpdate()");
    }
    componentWillUnmount(){
        console.log("component removed ")
    }
}

createRoot(document.getElementById("root")).render(<Test/>)