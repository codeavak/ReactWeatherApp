import "./SeasonDisplay.css";
import React from "react";

const SeasonDisplay = props => {
  const getSeason = () => {
    console.log(`month is: ${props.month} and lat is: ${props.lat}`);
    const season =
      props.month > 2 && props.month < 9
        ? props.lat > 0
          ? "Summer"
          : "Winter"
        : props.lat > 0
        ? "Winter"
        : "Summer";
    console.log(`season is: ${season}`);
    return season;
  };

  const weatherDisplay = {
    text:
      getSeason() === "Summer" ? "Let's hit the beach!" : "Brr! It's chilly",
    iconName: getSeason() === "Summer" ? "sun" : "cloud"
  };

  return (
    <div className={getSeason()}>
      <div>
        <i className={`left-icon icon  massive ${weatherDisplay.iconName}`} />
        <p className="seasonText">{weatherDisplay.text}</p>
        <i className={`right-icon icon massive ${weatherDisplay.iconName}`} />
      </div>
    </div>
  );
};

export default SeasonDisplay;
