import React from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";

const SmurfList = (props) => {
  if (props.loading) {
    return <h1>Loading...</h1>;
  }
  console.log(props);
  return (
    <div className="listContainer">
      {/* this map function is erroring out because the axios call is failing.
         the readMe file states in project setup: There is no need to seperately run a server.js file and no means to test the server through postman or the browser. Feel free to ignore any messages related to MSW or mock service workers.
         I am getting an error from mockServiceWorker. It's really hard to accurately test this when I can't use the axios in the browser.
         In the meantime I commented this out in order for the rest of the project to run.*/}
      {props.smurfs.map((smurf, id) => {
        return <Smurf key={id} smurf={smurf} />;
      })}
    </div>
  );
};

// mapping state to props
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
