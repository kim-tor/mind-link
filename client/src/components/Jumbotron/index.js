import React from "react";
import "./style.css";

function Jumbotron(props) {

  return (
    <div className="jumbotron text-center">
      <h1>Quote of the Day</h1>
      <p className="quote"> {props.quote}</p>
    
    </div>
  );
}

export default Jumbotron;
