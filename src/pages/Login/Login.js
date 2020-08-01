import React, { useState } from "react";
import styles from "./Login.module.css";
import { withRouter } from "react-router-dom";
import { useUserDispatch, useUserState, loginUser } from "../../contexts/";
import { Spinner } from "../../component/Spinner";
function Login(props) {
  const [password, setPassword] = useState("Norms@_2018");
  const [username, setUsername] = useState("Norms@gmail.com");
  //const [isValidForm] = useState("");

  var userDispatch = useUserDispatch();
  var { error, isLoading } = useUserState();
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <div className={styles.form_container}>
          <button className={`${styles.btn} ${styles.btn_ghost}`}>
            <i className="fab fa-google"></i>
            Log in with google
          </button>
          <div className={`${styles.horizontal_container}`}>
            <span className={styles.horizontal}></span>
            <small>or</small>
            <span className={styles.horizontal}></span>
          </div>
          {error && <h3 className={styles.error}>{error}</h3>}
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <div className={styles.form_icon}>
              <span>
                <i className="fa fa-user"></i>
              </span>
              <input
                type="email"
                id="email"
                value={username}
                placeholder="enter your email"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="password">password</label>
            <div className={styles.form_icon}>
              <span>
                <i className="fa fa-key"></i>
              </span>
              <input
                type="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.checkbox_container}>
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">remember me</label>
            </div>
            <a href="/">forgot password</a>
          </div>
          <button
            className={styles.btn}
            onClick={(e) => {
              e.preventDefault();
              loginUser(userDispatch, username, password, props.history);
            }}
          >
            {isLoading ? <Spinner /> : "LOGIN"}
          </button>
          <small>
            Don't have an account? <a href="/">Sign up</a>
          </small>
        </div>
      </form>

      <div className={`${styles.features} ${styles.flex_center_vert}`}>
        <div className={styles.feature}>
          <p className={styles.icon_round}>
            <i className="fas fa-search"></i>
          </p>
          <h3>FIND GYMS</h3>
          <p>
            A modern and clean design system for developing fast andd powerfull
            web interfaces
          </p>
        </div>
        <div className={styles.feature}>
          <p className={styles.icon_round}>
            <i className="fas fa-book"></i>
          </p>
          <h3>BOOK SESSIONS</h3>
          <p>
            A modern and clean design system for developing fast andd powerfull
            web interfaces
          </p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
