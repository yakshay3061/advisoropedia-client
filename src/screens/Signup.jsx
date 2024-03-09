import React, { useState } from "react";
import "./signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import { useFormik, Field } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  termsAndConditions: false,
};

const Signup = () => {
  const navigate = useNavigate();
  const navigateToPosts = () => {
    navigate("/posts");
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        console.log(values);

        try {
          const response = await axios.post(
            "https://advisoropedia-server.onrender.com/api/users/signup", 
            values);

            localStorage.setItem("token", response.data.token);
          // axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

          console.log('token: ' , response.data.token); 

          navigateToPosts();
        } catch (error) {
          console.log(error);
          window.alert("something went wrong");
        }

        action.resetForm();
      },
    });

  return (
    <div className="container">
      <form className="form signup" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="inputBox">
          <input
            autoComplete="off"
            type="name"
            name="name"
            id="name"
            required="required"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <i>
            <FontAwesomeIcon icon={faUser} />
          </i>
          <span>username</span>
          {errors.name && touched.name ? (
            <p className="form-error">{errors.name}</p>
          ) : null}
        </div>
        <div className="inputBox">
          <input
            autoComplete="off"
            name="email"
            type="text"
            required="required"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <i>
            <FontAwesomeIcon icon={faEnvelope} />
          </i>
          <span>email address</span>
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
        </div>
        <div className="inputBox">
          <input
            autoComplete="off"
            name="password"
            id="password"
            type="password"
            required="required"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <i>
            <FontAwesomeIcon icon={faLock} />
          </i>
          <span>create password</span>
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
        </div>
        <div className="inputBox">
          <input
            autoComplete="off"
            name="confirm_password"
            type="password"
            required="required"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <i>
            <FontAwesomeIcon icon={faLock} />
          </i>
          <span>confirm password</span>
          {errors.confirm_password && touched.confirm_password ? (
            <p className="form-error">{errors.confirm_password}</p>
          ) : null}
        </div>
        <div className="checkBox">
          <input
            name="termsAndConditions"
            autoComplete="off"
            required="required"
            type="checkbox"
            checked={values.termsAndConditions}
            onChange={handleChange}
          />
          <label htmlFor=""> I accept the terms & conditions</label>
        </div>
        <div className="inputBox">
          <input
            className="input-button"
            type="submit"
            value="Create Account"
          />
        </div>

        <p>
          Already a member? {"  "}
          <a href="#" className="login">
            Log in
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
