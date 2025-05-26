import React from "react";
import "./ResearchSection.css";

const ResearchSection = () => (
  <section className="research-section">
    <div className="research-content">
      <h2>Participate in research</h2>
      <p>
        Every person's medical history is unique. But collectively, our medical
        data can lead to breakthroughs. If you join a Q-Link study, your records
        are anonymized and used to answer important research questions. You
        might also be asked to fill out health surveys, providing a fuller
        picture of your daily life.
      </p>
    </div>
    <div className="research-image">
      <img
        src={process.env.PUBLIC_URL + "/hero1.png"}
        alt="Research participation illustration"
      />
    </div>
  </section>
);

export default ResearchSection;
