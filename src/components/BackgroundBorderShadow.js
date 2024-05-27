import { useMemo } from "react";
import "./BackgroundBorderShadow.css";

const BackgroundBorderShadow = ({
  className = "",
  container,
  unitedKingdom,
  prop,
  propBackgroundColor,
  propDisplay,
  propMinWidth,
}) => {
  const backgroundBorderShadow1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const unitedKingdomStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={`backgroundbordershadow151 ${className}`}
      style={backgroundBorderShadow1Style}
    >
      <div className="backgroundbordershadow-inner150">
        <div className="frame-parent430">
          <div className="container-wrapper141">
            <img className="container-icon151" alt="" src={container} />
          </div>
          <div className="united-kingdom-parent">
            <div className="united-kingdom" style={unitedKingdomStyle}>
              {unitedKingdom}
            </div>
            <div className="from-5-parent5">
              <div className="from-59">
                <span className="from151">{`From `}</span>
                <span className="span151">{prop}</span>
              </div>
              <div className="usd-wrapper23">
                <div className="usd151"> USD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent431">
        <div className="view-offers-wrapper144">
          <div className="view-offers151">{`View Offers `}</div>
        </div>
        <div className="east151">east</div>
      </div>
    </div>
  );
};

BackgroundBorderShadow.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  unitedKingdom: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default BackgroundBorderShadow;
