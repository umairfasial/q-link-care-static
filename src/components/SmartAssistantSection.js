import React from "react";
import "./SmartAssistantSection.css";

const SmartAssistantSection = () => (
  <section className="smart-assistant-section">
    <div className="smart-assistant-image">
      <img
        src={process.env.PUBLIC_URL + "/hero3.png"}
        alt="Smart assistant illustration"
      />
    </div>
    <div className="smart-assistant-content">
      <h2>A smart assistant at your fingertips</h2>
      <p>
        Q-Link is with you on your health journey to provide clarity, answer
        questions, and help you get the best possible care.
      </p>
    </div>
  </section>
);

export default SmartAssistantSection;
