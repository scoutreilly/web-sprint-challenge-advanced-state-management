import React, { useState } from "react";

import { connect } from "react-redux";
import { setError, addSmurf } from "../actions";

const AddForm = (props) => {
  const [state, setState] = useState({
    name: "",
    position: "",
    nickname: "",
    description: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // when form is submitted either set new smurf data to state, or throw the error, alert the user, and update state with the errormessage
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.name === "" || state.position === "" || state.nickname === "") {
      //add in error action
      props.setError("Smurf name, position and nickname are required fields.");
      alert(props.error);
    } else {
      props.addSmurf(state);
    }
  };

  const errorMessage = state.error;

  return (
    <section>
      <h2>Add Smurf</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.name}
            name="name"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.position}
            name="position"
            id="position"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nickname">Nickname:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.nickname}
            name="nickname"
            id="nickname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <br />
          <textarea
            onChange={handleChange}
            value={state.description}
            name="description"
            id="description"
          />
        </div>
        {errorMessage && (
          <div
            data-testid="errorAlert"
            className="alert alert-danger"
            role="alert"
          >
            Error: {errorMessage}
          </div>
        )}
        <button onClick={handleSubmit}>Submit Smurf</button>
      </form>
    </section>
  );
};

// mapping state to props for use in this component
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    loading: state.loading,
    error: state.error,
  };
};

// mapping actions to props as well for use in this component
const mapActionsToProps = { setError, addSmurf };

export default connect(mapStateToProps, mapActionsToProps)(AddForm);

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value.
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.
