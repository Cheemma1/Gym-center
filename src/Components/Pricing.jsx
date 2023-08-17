import React, { useState, useEffect } from "react";
import { PACKAGES } from "../Packages/PACKAGES";
import { CheckCircle } from "phosphor-react";
import { Link } from "react-router-dom";
const Pricing = () => {
  const [packs, setPacks] = useState([]);
  const [displayedCategory, setDisplayedCategory] = useState("month");

  const handleClick = (category) => {
    setDisplayedCategory(category);
    const filtered = PACKAGES.filter((item) => item.category === category);
    setPacks(filtered);
  };

  useEffect(() => {
    handleClick("month");
  }, []);

  return (
    <div className="pricing-container">
      <div className="pricing-txt">
        <p>Pricing</p>
        <h2>Our List Packages</h2>
      </div>

      <div className="pricing-btn">
        <button
          className="price-btn1"
          value="month"
          onClick={() => handleClick("month")}
          style={{
            backgroundColor:
              displayedCategory === "month" ? "#0d0d0d" : "#097fd9",
            color: "white",
          }}
        >
          Billed Monthly
        </button>
        <button
          className="price-btn1"
          value="year"
          onClick={() => handleClick("year")}
          style={{
            backgroundColor:
              displayedCategory === "month" ? "#097fd9" : "#0d0d0d",
            color: "white",
          }}
        >
          Billed Yearly
        </button>
      </div>
      <div className="pricing-content">
        {packs.map((pack) => (
          <div
            className={`package-box ${pack.isBestOffer ? "best-offer" : ""}`}
            key={pack.id}
          >
            {pack.isBestOffer && ( // Shows the pseudo-element only for best offers
              <span className="hot-deal-label">Best Offer</span>
            )}
            <p>{pack.headTxt}</p>
            <h4>{pack.headTxt2}</h4>
            <h5>{pack.para}</h5>
            <li>
            
              <CheckCircle color="#fff" weight="fill" />
              {pack.list1}
            </li>
            <li>
              
              <CheckCircle color="#fff" weight="fill" />
              {pack.list2}
            </li>
            <li>
            
              <CheckCircle color="#fff" weight="fill" />
              {pack.list3}
            </li>
            <li>
              {" "}
              <CheckCircle color="#fff" weight="fill" />
              {pack.list4}
            </li>
            <li>
              <CheckCircle color="#fff" weight="fill" />
              {pack.list5}
            </li>
            <li>
              <CheckCircle color="#fff" weight="fill" />
              {pack.list6}
            </li>
            <button className="button">
<Link to={"/paystackpage"} className="button-link"> Register</Link>

            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
