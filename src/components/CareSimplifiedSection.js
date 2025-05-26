import React from "react";
import "./CareSimplifiedSection.css";

const CareSimplifiedSection = () => (
  <section className="care-simplified-section">
    <div className="care-simplified-image">
      <img
        src={process.env.PUBLIC_URL + "/hero2.png"}
        alt="Care simplified illustration"
      />
    </div>
    <div className="care-simplified-content">
      <h2>Your care, simplified.</h2>
      <button className="cta">Get Started</button>
    </div>
  </section>
);

export default CareSimplifiedSection;
