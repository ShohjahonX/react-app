import React from "react";

class Component2 extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello React {this.props.text}</h1>
            </div>
        )
    }
}

export default Component2;