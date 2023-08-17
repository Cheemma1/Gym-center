import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../authpages/login.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import logo from "../../assets/Logo.svg";

const Signup = () => {
  const [formauth, setFormAuth] = useState({ email: "", pasword: "" });

  const [error, setError] = useState(null);

  async function handleSign(e) {
    e.preventDefault();

    try {
      const { email, password } = formauth;
      await createUserWithEmailAndPassword(auth, email, password);

      setError("");
    } catch (error) {
      setError(error?.message);
    }
  }
  // (email , password)
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (user) navigate("/");
  });

  return (
    <>
      <div className="form-container">
        <h1 className="text-one">Signup to Gym Center</h1>
        <form className="login-form">
          <div className="pay-flex">
            <img src={logo} alt="logo" />
            <h2>GymCenter</h2>
          </div>
          <input
            type="text"
            placeholder="Enter your Email"
            id="email"
            onChange={(e) =>
              setFormAuth({ ...formauth, email: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Password"
            id="password"
            onChange={(e) =>
              setFormAuth({
                ...formauth,
                password: e.target.value,
              })
            }
          />
          <button className="sign-btn" onClick={handleSign}>
            Signup
          </button>
        </form>
        <div className="sign-flex">
          <p>
            Already have an account?{" "}
            <Link to={"/login"} className="links">
              Login
            </Link>
          </p>

          <Link to={"/"} className="link">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
