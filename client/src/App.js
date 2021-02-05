import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Search from "./pages/Search";


function App() {
  return(
    <Router>
    <div>
      <Nav />
      <Wrapper>
        <Route exact path ="/" component={About} />
        <Route exact path ="/about" component={About} />
        <Route exact path ="/posts" component={Posts} />
        <Route exact path ="/search" component={Search} />
        
      </Wrapper>
    </div>
    </Router>
  )
};

export default App;
