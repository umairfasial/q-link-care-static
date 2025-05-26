import React from "react";
import "./PersonalizedCareSection.css";

const PersonalizedCareSection = () => (
  <section className="personalized-care-section">
    <div className="care-block">
      <img
        src={process.env.PUBLIC_URL + "/hero-image.png"}
        alt="Your unified record illustration"
        className="care-block-image"
      />
      <div className="care-icon">🗂️</div>
      <h3>Your unified record</h3>
      <p>
        With your consent, Q-Link gathers and organizes your key medical records
        from anywhere in the U.S. Get started in minutes, with no phone calls or
        portal logins.
      </p>
    </div>
    <div className="care-block">
      <img
        src={process.env.PUBLIC_URL + "/hero4.png"}
        alt="New model of care illustration"
        className="care-block-image"
      />
      <div className="care-icon">👩‍⚕️</div>
      <h3>A new model of care, centered around you</h3>
      <p>
        Q-Link helps you stay on top of your care with a personalized, unified
        care plan and access to support from real providers.
      </p>
    </div>
  </section>
);

export default PersonalizedCareSection;
