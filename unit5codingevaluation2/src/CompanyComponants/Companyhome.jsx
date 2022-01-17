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
    border: 1px solid black;
    h2 {
      width: 170px;
      border-right: 2px solid gray;
    }
    h4 {
      width: 170px;
      border-right: 2px solid yellowgreen;
    }
    button{
        width: 90px;
        margin-top: 15px;
        height: 30px;
        font-size: large;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
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
        <h2>companyname</h2>
        <h2>jobname</h2>
        <h2>jobtype</h2>
        <h2>jobdescription</h2>
        <h2>location</h2>
        <h2>salaryrange</h2>
      </Cont>
      <div>
        {list.map((e) => (
          <Cont key={e.id}>
            <h4>{e.companyname}</h4>
            <h4>{e.jobname}</h4>
            <h4>{e.jobtype}</h4>
            <h4>{e.jobdescription}</h4>
            <h4>{e.location}</h4>
            <h4>{e.salaryrange}</h4>
            <button onClick={() => handleAddJob(e)}>Add Job</button>

            {token === "admin" ? <button>Delete</button> : ""}
          </Cont>
        ))}
      </div>
    </div>
  );
}

export default Companyhome;
