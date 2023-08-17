import { Link, useNavigate } from "react-router-dom";
import "../authpages/login.css";
import { useState} from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import logo from '../../assets/Logo.svg'
import { auth } from "../../config/firebase";

const Login = () => {
  const [formauth, setFormAuth] = useState({
    email: "",
    password: "",
  });
  async function handleSign(e) {
    e.preventDefault();

    try {
      const { email, password } = formauth;
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }}

    const navigate = useNavigate();
    onAuthStateChanged(auth, (user) => {
      if (user) navigate("/");
    });
  
   

  return (
    
      <div className="form-container">
        <h1 className="text-one">Login to Gym Center</h1>
      
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
              setFormAuth({ ...formauth, password: e.target.value })
            }
          />
          <button className="sign-btn" onClick={handleSign}>
            Login
          </button>
        </form>
        <button className="login-bts">
          <Link to={"/"} className="login-links">
            Back to Home
          </Link>
        </button>
      </div>
    
  );
};

export default Login;
