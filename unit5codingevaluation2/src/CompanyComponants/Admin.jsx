import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJobError, addJobLoading, addJobSuccess } from "../Redux/actions";

function Admin() {
  const [list, setList] = useState("");
  const { isLoading, isError } = useSelector((state) => state.jobReducer);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setList({
      ...list,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addJobLoading());
    fetch("http://localhost:3001/jobs", {
      method: "POST",
      body: JSON.stringify(list),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        dispatch(addJobSuccess(res));
        alert("Added Job Success Fully");
      })
      .catch((e) => {
        dispatch(addJobError(e));
      });
  };

  return isLoading ? (
    <h1>
      <h1>
        <h1>Loading...</h1>...
      </h1>
      ...
    </h1>
  ) : isError ? (
    <h1>Error</h1>
  ) : (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="companyname"
          type="text"
          placeholder="Enter Company Name"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          name="jobname"
          type="text"
          placeholder="Enter Job Title"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          name="salaryrange"
          type="text"
          placeholder="Enter Salary Range"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          name="jobdescription"
          type="text"
          placeholder="Enter Job Description"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          name="location"
          type="text"
          placeholder="Enter job location"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          name="jobtype"
          type="text"
          placeholder="Enter Job Type"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Admin;
