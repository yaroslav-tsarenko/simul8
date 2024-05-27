import { useMemo } from "react";
import "./FrameComponent3.css";

const FrameComponent3 = ({
  className = "",
  heading3LinkBestESIMForDu,
  areYouPlanningATripToDuba,
  connectedIveGotYouCovered,
  needToKnowAboutUsingAnESI,
  topDubaiESIMPlansFor,
  propDisplay,
}) => {
  const heading3Style = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={`article-inner4 ${className}`}>
      <div className="heading-3-link-best-esim-f-parent">
        <h2 className="heading-33" style={heading3Style}>
          {heading3LinkBestESIMForDu}
        </h2>
        <p className="are-you-planning-container1">
          <span className="are-you-planning1">{areYouPlanningATripToDuba}</span>
          <span className="connected-ive-got">{connectedIveGotYouCovered}</span>
          <span className="need-to-know">{needToKnowAboutUsingAnESI}</span>
          <span className="top-dubai-esim">{topDubaiESIMPlansFor}</span>
        </p>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  heading3LinkBestESIMForDu: PropTypes.string,
  areYouPlanningATripToDuba: PropTypes.string,
  connectedIveGotYouCovered: PropTypes.string,
  needToKnowAboutUsingAnESI: PropTypes.string,
  topDubaiESIMPlansFor: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
};

export default FrameComponent3;
