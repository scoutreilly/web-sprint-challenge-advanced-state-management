import React, { Component } from "react";

import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { connect } from "react-redux";
import { fetchSmurfs } from "./actions";

class App extends Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList />
          <AddForm />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSmurfs: () => dispatch(fetchSmurfs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.
