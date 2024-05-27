import { useMemo } from "react";
import "./BackgroundBorderShadow3.css";

const BackgroundBorderShadow3 = ({
  className = "",
  container,
  unitedArabEmirates,
  prop,
  propDisplay,
  propMinWidth,
  propMinWidth1,
  backgroundBorderShadowBackgroundColor,
  backgroundBorderShadowDebugCommit,
}) => {
  const unitedArabEmiratesStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const from12Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const backgroundBorderShadow3Style = useMemo(() => {
    return {
      backgroundColor: backgroundBorderShadowBackgroundColor,
      debugCommit: backgroundBorderShadowDebugCommit,
    };
  }, [
    backgroundBorderShadowBackgroundColor,
    backgroundBorderShadowDebugCommit,
  ]);

  return (
    <div
      className={`backgroundbordershadow153 ${className}`}
      style={backgroundBorderShadow3Style}
    >
      <div className="backgroundbordershadow-inner152">
        <div className="frame-parent435">
          <div className="container-wrapper143">
            <img
              className="container-icon153"
              loading="lazy"
              alt=""
              src={container}
            />
          </div>
          <div className="united-arab-emirates-group">
            <div
              className="united-arab-emirates1"
              style={unitedArabEmiratesStyle}
            >
              {unitedArabEmirates}
            </div>
            <div className="frame-parent436">
              <div className="from-12-wrapper6">
                <div className="from-128" style={from12Style}>
                  <span className="from153">{`From `}</span>
                  <span className="span153">{prop}</span>
                </div>
              </div>
              <div className="usd153"> USD</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent437">
        <div className="view-offers-wrapper145">
          <u className="view-offers153">{`View Offers `}</u>
        </div>
        <u className="east153">east</u>
      </div>
    </div>
  );
};

BackgroundBorderShadow3.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  unitedArabEmirates: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  backgroundBorderShadowBackgroundColor: PropTypes.any,
  backgroundBorderShadowDebugCommit: PropTypes.any,
};

export default BackgroundBorderShadow3;
