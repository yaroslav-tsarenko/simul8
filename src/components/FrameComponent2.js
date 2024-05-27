import { useMemo } from "react";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  className = "",
  heading3LinkBestESIMForJa,
  areYouPlanningATripToJaka,
  wayToStayConnectedAnESIMC,
  avoidExpensiveRoamingChar,
  onYourUnlockedESIMCompati,
  compare,
  propDisplay,
}) => {
  const heading31Style = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={`article-inner5 ${className}`}>
      <div className="heading-3-link-best-esim-f-group">
        <h2 className="heading-34" style={heading31Style}>
          {heading3LinkBestESIMForJa}
        </h2>
        <p className="are-you-planning-container2">
          <span className="are-you-planning2">{areYouPlanningATripToJaka}</span>
          <span className="way-to-stay">{wayToStayConnectedAnESIMC}</span>
          <span className="avoid-expensive-roaming">
            {avoidExpensiveRoamingChar}
          </span>
          <span className="on-your-unlocked">{onYourUnlockedESIMCompati}</span>
          <span className="compare">{compare}</span>
        </p>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  heading3LinkBestESIMForJa: PropTypes.string,
  areYouPlanningATripToJaka: PropTypes.string,
  wayToStayConnectedAnESIMC: PropTypes.string,
  avoidExpensiveRoamingChar: PropTypes.string,
  onYourUnlockedESIMCompati: PropTypes.string,
  compare: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
};

export default FrameComponent2;
