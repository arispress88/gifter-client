import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./components/ApplicationViews";
import Header from "./components/Header";
import { PostManager } from "./APIManagers/PostManager";

function App() {
  return (
    <div className="App">
      <Router>
        <PostManager>
          <Header />
          <ApplicationViews />
        </PostManager>
      </Router>
    </div>
  );
}

export default App;