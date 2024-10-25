// src/components/LoginPage.js
import React from 'react';
import '../assets/css/loginStyles.css';
import Head from './Head';

import Scripts from './Scripts';

const LoginPage = () => {
  const title = "Human Consulting | Login v1";
  const path = "../../../dist";
  const htmlPath = "..";

  return (
    <>
      <Head title={title} />
      <div className="login-page bg-body-secondary">
      <div className="card-header">
        <a href={`${htmlPath}/index2.html`} className="link-dark text-center link-offset-2 link-opacity-100 link-opacity-50-hover">
                <h1 className="mb-0">
                  <b>Human Consulting</b>
                </h1>
        </a>
      </div>
        <div className="login-box">
          <div className="card card-outline card-primary">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your Admin Session</p>
              <form action={`${htmlPath}/index3.html`} method="post">
                <div className="input-group mb-1">
                  <div className="form-floating">
                    <input id="loginEmail" type="email" className="form-control" placeholder="Email" />
                    <label htmlFor="loginEmail">Email</label>
                  </div>
                  <div className="input-group-text">
                    <span className="bi bi-envelope"></span>
                  </div>
                </div>
                <div className="input-group mb-1">
                  <div className="form-floating">
                    <input id="loginPassword" type="password" className="form-control" placeholder="Password" />
                    <label htmlFor="loginPassword">Password</label>
                  </div>
                  <div className="input-group-text">
                    <span className="bi bi-lock-fill"></span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8 d-inline-flex align-items-center">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-primary">Sign In</button>
                    </div>
                  </div>
                </div>
              </form>
              {/* <div className="social-auth-links text-center mb-3 d-grid gap-2">
                <p>- OR -</p>
                <a href="#" className="btn btn-primary">
                  <i className="bi bi-facebook me-2"></i> Sign in using Facebook
                </a>
                <a href="#" className="btn btn-danger">
                  <i className="bi bi-google me-2"></i> Sign in using Google+
                </a>
              </div> */}
              <p className="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
              </p>
              <p className="mb-0">
                <a href="register.html" className="text-center">Register a new membership</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Scripts path={path} />
    </>
  );
};

export default LoginPage;
