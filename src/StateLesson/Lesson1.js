import React from "react";
import PropTypes from "prop-types";

class Lesson1 extends React.Component {
         constructor(props) {
            super(props);
            this.state = {
                name: "Shohajhon",
                age: 16,    
                job: "Frontend developer"
            };
         }
        
        render() {
            return(
                <>
                  <h1>My name is {this.state.name}</h1>
                  <h1>I am {this.state.age} years old</h1>
                  <h1>I am {this.state.job}</h1>

                </>
            );   
        };
}

export default Lesson1;