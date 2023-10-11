import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  DESCRIPTION_TEXT_1,
  DESCRIPTION_TEXT_2,
  CARDS_INFO,
} from "../../constants/MockData";
import "./Description.css";

function Description() {
  return (
    <div className="description">
      <div className="description_cards">
        {CARDS_INFO.map(({ title, subtitle, IconURL }) => (
          <InfoCard
            key={title}
            title={title}
            subtitle={subtitle}
            IconURL={IconURL}
          />
        ))}
      </div>
      <p>{DESCRIPTION_TEXT_1}</p>
      <p>{DESCRIPTION_TEXT_2}</p>
    </div>
  );
}

export default Description;
