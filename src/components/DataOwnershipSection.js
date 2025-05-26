import React from "react";
import "./DataOwnershipSection.css";

const DataOwnershipSection = () => (
  <section className="data-ownership-section">
    <div className="ownership-block">
      <div className="ownership-icon">🔒</div>
      <h3>You own your data. Period.</h3>
      <p>
        Your records are yours to keep. Get lifetime digital access to your
        records, even if you decide to stop using Q-Link.
      </p>
    </div>
    <div className="ownership-block">
      <div className="ownership-icon">🛡️</div>
      <h3>Your data is protected.</h3>
      <p>
        We take privacy seriously and take every precaution to ensure that your
        data is kept private and secure.
      </p>
    </div>
    <div className="ownership-block">
      <div className="ownership-icon">🔗</div>
      <h3>You choose whether to share.</h3>
      <p>
        Sharing your records or participating in research is totally up to you.
        Change your mind at any time.
      </p>
    </div>
  </section>
);

export default DataOwnershipSection;
