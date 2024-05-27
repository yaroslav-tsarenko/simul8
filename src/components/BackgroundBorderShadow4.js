import { useMemo } from "react";
import "./BackgroundBorderShadow4.css";

const BackgroundBorderShadow4 = ({
  className = "",
  container,
  unitedStates,
  prop,
  propFlex,
  propMinWidth,
  propWidth,
  propWidth1,
  propFlex1,
  propAlignSelf,
  propDisplay,
  propMinWidth1,
  backgroundBorderShadowBackgroundColor,
}) => {
  const backgroundBorderShadow2Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
      backgroundColor: backgroundBorderShadowBackgroundColor,
    };
  }, [
    propFlex,
    propMinWidth,
    propWidth,
    backgroundBorderShadowBackgroundColor,
  ]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const uSOfferLocationsStyle = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const unitedStatesStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propAlignSelf, propDisplay, propMinWidth1]);

  return (
    <div
      className={`backgroundbordershadow152 ${className}`}
      style={backgroundBorderShadow2Style}
    >
      <div className="backgroundbordershadow-inner151">
        <div className="frame-parent434" style={frameDiv1Style}>
          <div className="container-wrapper142">
            <img
              className="container-icon152"
              loading="lazy"
              alt=""
              src={container}
            />
          </div>
          <div className="u-s-offer-locations" style={uSOfferLocationsStyle}>
            <div className="united-states" style={unitedStatesStyle}>
              {unitedStates}
            </div>
            <div className="u-s-offer-origins">
              <div className="from-510">
                <span className="from152">{`From `}</span>
                <span className="span152">{prop}</span>
              </div>
              <div className="u-s-offer-prices">
                <div className="usd152"> USD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="u-s-offer-actions">
        <div className="u-s-offer-buttons">
          <u className="view-offers152">{`View Offers `}</u>
        </div>
        <u className="east152">east</u>
      </div>
    </div>
  );
};

BackgroundBorderShadow4.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  unitedStates: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propFlex1: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
  backgroundBorderShadowBackgroundColor: PropTypes.any,
};

export default BackgroundBorderShadow4;
