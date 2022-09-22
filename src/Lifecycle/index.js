import React from "react";

class Lifecycle extends React.Component {
    constructor(){
        super();
        console.log("Constarctor is working...");
    }

    componentDidMount(){
        console.log("ComponentDidMount is working...");
    }

    componentWillUnmount() {
        console.log("ComponentWillUnmoun is working");
    }

    render() {
        console.log("Return is working...");
        return(
          <div>
           
          </div>
        );
    }
}

export default Lifecycle;