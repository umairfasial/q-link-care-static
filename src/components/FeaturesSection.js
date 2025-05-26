import React from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => (
  <section className="features-section">
    <div className="feature">
      <div className="feature-icon">📁</div>
      <h2>Your medical records, all in one place</h2>
      <p>
        Q-Link gathers and organizes your medical records to paint a complete
        picture of your health journey.
      </p>
    </div>
    <div className="feature">
      <div className="feature-icon">🩺</div>
      <h2>Care insights from real providers</h2>
      <p>
        Using your unified record, our virtual clinic develops personal care
        plans and bridges gaps in preventive care.
      </p>
    </div>
    <div className="feature">
      <div className="feature-icon">🔍</div>
      <h2>Understand your health with clarity</h2>
      <p>
        Q-Link simplifies complex health information and answers questions about
        your medical history.
      </p>
    </div>
  </section>
);

export default FeaturesSection;
