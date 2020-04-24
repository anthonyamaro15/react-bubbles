import React from "react";
import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory();
  return (
    <div className="MainForm">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          axios
            .post("http://localhost:5000/api/login", values)
            .then((res) => {
              console.log(res);
              localStorage.setItem("token", JSON.stringify(res.data.payload));
              history.push("/bubbles");
            })
            .catch((err) => {
              console.log(err);
            });
          resetForm();
        }}
      >
        {() => (
          <Form>
            <label htmlFor="username">
              <Field
                type="text"
                name="username"
                id="username"
                placeholder="username"
              />
            </label>
            <label htmlFor="password">
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
            </label>
            <div className="btn">
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
