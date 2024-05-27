import { useMemo } from "react";
import "./Link.css";

const Link = ({
  className = "",
  bestEsimForDubaiwebp,
  heading3BestESIMForDubai,
  areYouPlanningATripToDuba,
  theBestESIMToStayConnecte,
  inThisGuide,
  propDisplay,
}) => {
  const areYouPlanningContainerStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={`link8 ${className}`}>
      <img
        className="best-esim-for-dubaiwebp-icon"
        loading="lazy"
        alt=""
        src={bestEsimForDubaiwebp}
      />
      <h3 className="heading-36">{heading3BestESIMForDubai}</h3>
      <p
        className="are-you-planning-container3"
        style={areYouPlanningContainerStyle}
      >
        <span className="are-you-planning3">{areYouPlanningATripToDuba}</span>
        <span className="the-best-esim">{theBestESIMToStayConnecte}</span>
        <span className="in-this-guide">{inThisGuide}</span>
      </p>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  bestEsimForDubaiwebp: PropTypes.string,
  heading3BestESIMForDubai: PropTypes.string,
  areYouPlanningATripToDuba: PropTypes.string,
  theBestESIMToStayConnecte: PropTypes.string,
  inThisGuide: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
};

export default Link;
