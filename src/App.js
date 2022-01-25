import React from "react";
import {connect} from 'react-redux';
import "./styles.css";
import { Route } from "react-router-dom";

import Products from "./components/Products";
import Card from "./components/Card";


const App = (props) => {
  console.log(props.bookList);
  return (
    <div className="App">
      <h1>
        Book Store App
      </h1>
      <Route exact path="/" component={Products} />
      <Route path="/card" component={Card} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    bookList: state.bookList
  }
};
export default connect(mapStateToProps)(App);