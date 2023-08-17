import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/authpages/Login";
import Signup from "./pages/authpages/Signup";
import Paystack from "./Components/Paystack";

function App() {
  

  return (
    <div className="app">

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route  path="/paystackpage" element={<Paystack/>}/>
    </Routes>
    </Router>
  
    </div>
  )
}


export default App
