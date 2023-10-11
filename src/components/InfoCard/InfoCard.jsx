import React from "react";
import "./InfoCard.css";

function InfoCard({ title, subtitle, IconURL }) {
  return (
    <div className="infoCard">
      <p style={{ fontWeight: "bold" }}>{title}</p>
      <p>{subtitle}</p>
      <span className="infoCard-badge">
        <img src={IconURL} alt="Questions icon" height="auto" width={28} />
      </span>
    </div>
  );
}

export default InfoCard;
