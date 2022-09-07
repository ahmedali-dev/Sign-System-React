import { Formik } from "formik";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import logo from "./images/logo-mobile.png";
import Input from "./comp/Input";
import Loading from "./comp/loading";
import Button from "./comp/Button";
import { useState } from "react";
const SignUp = () => {
  const [Reload, setReload] = useState(false);
  return (
    <Fragment>
      <div className="Sign-System">
        {/* page reference */}
        <div className="PageRef">
          <div className="circle"></div>
          <p>Sign Up</p>
        </div>

        {/* form */}
        <div className="col2 grow">
          <div className="left">
            {/* header */}
            <div className="header">
              <h1 className={"mr-b-1"}>Welcome</h1>
              <p className={"mr-b-2"}>Sign Up now and Get started</p>
            </div>

            {/* form */}
            <div className="form">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  pass: "",
                }}
                onSubmit={(data) => {
                  console.log(data, "submit");
                }}
                validationSchema={yup.object().shape({
                  name: yup
                    .string()
                    .min(8, "min 8 or large")
                    .max(32, "max 32 or less")
                    .required(),
                  email: yup.string().email("this is not email").required(),
                  pass: yup
                    .string()
                    .min(8, "min 8 or large")
                    .max(32, "max 32 or less")
                    .required(),
                })}
              >
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit} method="post">
                    <Input
                      label="Name"
                      name="name"
                      id="name"
                      placeholder="Name...."
                    />

                    <Input
                      label="Email"
                      name="email"
                      id="email"
                      placeholder="Email...."
                    />

                    <Input
                      label="Password"
                      name="pass"
                      id="pass"
                      placeholder="........."
                    />

                    <Button
                      class="signup-btn btn--primary"
                      Reload={Reload}
                      Loading={<Loading width="2" borderWidth="1.5" />}
                    />

                    <div className="inputgroup mr-t-1">
                      <Link className={"sign-dir"} to="/SignIn">
                        You have account? <span>Sign In</span>
                      </Link>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>

        {/* right */}

        <div className="col2">
          <div className="right">
            <div className="circle"></div>
            <div className="blur"></div>

            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
// {/* {<Loading width="1" />} */}
// <small className={"error"}>Error message here</small>
