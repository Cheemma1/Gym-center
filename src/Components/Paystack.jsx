import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const Paystack = () => {
  const publicKey = "pk_test_c6fe277d6f715ec885e628824384c1240144be93";

  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount: amount * 100,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <div className="paystack-container">
      <h1>Make your payments</h1>

      <form className="paystack-form" onClick={(e) => e.preventDefault()}>
        <div className="pay-flex">
          <img src={logo} alt="logo" />
          <h1>GymCenter</h1>
        </div>
       
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
     
    
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
     
   
          <input
            type="tel"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
      
    
          <label htmlFor="number"></label>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
       

        <PaystackButton {...componentProps} className="pay-btn" />
      </form>
      <button className="pay-btn-cont">
        <Link to={"/"} className="pay-btn1">
          Back
        </Link>
      </button>
    </div>
  );
};

export default Paystack;
