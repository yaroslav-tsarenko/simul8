import { useMemo } from "react";
import "./BackgroundBorderShadow1.css";

const BackgroundBorderShadow1 = ({
  className = "",
  africasvg,
  africa,
  prop,
  propFlex,
  propMinWidth,
  propHeight,
  propWidth,
  propHeight1,
  propFlex1,
  propMinWidth1,
  propMinWidth2,
}) => {
  const backgroundBorderShadowStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      height: propHeight,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propHeight, propWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      height: propHeight1,
      flex: propFlex1,
    };
  }, [propHeight1, propFlex1]);

  const africaStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const from48Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div
      className={`backgroundbordershadow150 ${className}`}
      style={backgroundBorderShadowStyle}
    >
      <div className="backgroundbordershadow-inner149" style={frameDivStyle}>
        <div className="frame-parent427">
          <div className="africasvg-container">
            <img className="africasvg-icon1" alt="" src={africasvg} />
          </div>
          <div className="africa-parent">
            <div className="africa" style={africaStyle}>
              {africa}
            </div>
            <div className="frame-parent428">
              <div className="from-48-wrapper1">
                <div className="from-483" style={from48Style}>
                  <span className="from150">{`From `}</span>
                  <span className="span150">{prop}</span>
                </div>
              </div>
              <div className="usd150"> USD</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent429">
        <div className="view-offers-wrapper143">
          <div className="view-offers150">{`View Offers `}</div>
        </div>
        <div className="east150">east</div>
      </div>
    </div>
  );
};

BackgroundBorderShadow1.propTypes = {
  className: PropTypes.string,
  africasvg: PropTypes.string,
  africa: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight1: PropTypes.any,
  propFlex1: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default BackgroundBorderShadow1;
