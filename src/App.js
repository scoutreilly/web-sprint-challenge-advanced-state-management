import React, { Component } from "react";

import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { connect } from "react-redux";
import { fetchSmurfs } from "./actions";

class App extends Component {
  // once the component mounts, fetch list of smurfs
  componentDidMount() {
    // console.log(this.props);
    this.props.fetchSmurfs();
  }

  // rendering the smurf data
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

// not really using this here, but it's good practice for me. mapping state to props for use in app
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
