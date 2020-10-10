import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const LoginForm = ({ onFormSubmit }) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = ({ username, password }) =>
    axios.post("/api/users", {
      username,
      password,
    });

  return (
    <div className="ui container">
      <h1 className="header">Login</h1>
      <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
        <div className={`field ${errors.username ? "error" : ""}  `}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            ref={register({ required: true })}
          />
        </div>
        <div className={`field ${errors.password ? "error" : ""}  `}>
          <label>Password</label>
          <input
            type="text"
            name="password"
            ref={register({ required: true })}
          />
        </div>

        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
