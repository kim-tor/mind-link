import React from "react";
import "./style.css";

function Jumbotron(props) {

  return (
    <div className="jumbotron text-center">
      <h1>Quote of the Day</h1>
      {props.quote}
    
    </div>
  );
}

export default Jumbotron;
