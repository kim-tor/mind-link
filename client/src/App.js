import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import Posts from "./pages/Posts";
import addPosts from "./pages/addPosts";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";


function App() {
  return(
    <Router>
    <div>
      <Nav />
      <Wrapper>
        <Route exact path ="/" component={Login} />
        <Route exact path ="/about" component={About} />
        <Route exact path ="/posts" component={Posts} />
        <Route exact path ="/addposts" component={addPosts} />
        <Route exact path ="/search" component={Search} />
        <Route exact path ="/signup" component={SignUp} />
      </Wrapper>
    </div>
    </Router>
  )
};

export default App;
