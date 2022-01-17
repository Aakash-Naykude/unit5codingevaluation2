import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AuthContex } from "../Context/AuthContext";
import {
  getJobError,
  getJobLoading,
  getJobSuccess,
} from "../Redux/companyredux/actions";

function Companyhome() {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const { token } = useContext(AuthContex);
  useEffect(() => {
    handleInput();
  }, []);
  const handleInput = () => {
    dispatch(getJobLoading());
    fetch("http://localhost:3001/jobs")
      .then((d) => d.json())
      .then((res) => {
        dispatch(getJobSuccess(res));
        setList(res);
        console.log(res);
      })
      .catch((e) => {
        dispatch(getJobError(e));
      });
  };
  const { isLoading, isError } = useSelector((state) => state.getJobReducer);
  const Cont = styled.div`
    display: flex;
    gap: 5%;
  `;

  const handleAddJob = (data) => {
    fetch("http://localhost:3001/clientjobs", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        alert("Added Job Success Fully");
      })
      .catch((e) => {
        console.log(e);
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
      <h1>Jobs</h1>
      <Cont>
        <h4>companyname</h4>
        <h4>jobname</h4>
        <h4>jobtype</h4>
        <h4>jobdescription</h4>
        <h4>location</h4>
        <h4>salaryrange</h4>
      </Cont>
      <div>
        {list.map((e) => (
          <Cont key={e.id}>
            <h5>{e.companyname}</h5>
            <h5>{e.jobname}</h5>
            <h5>{e.jobtype}</h5>
            <h5>{e.jobdescription}</h5>
            <h5>{e.location}</h5>
            <h5>{e.salaryrange}</h5>
            <button onClick={() => handleAddJob(e)}>Add Job</button>

            {token === "admin" ? <button>Delete</button> : ""}
          </Cont>
        ))}
      </div>
    </div>
  );
}

export default Companyhome;
