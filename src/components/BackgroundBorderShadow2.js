import { useMemo } from "react";
import "./BackgroundBorderShadow2.css";

const BackgroundBorderShadow2 = ({
  className = "",
  container,
  japan20GB30Days,
  prop,
  propPadding,
  propGap,
  propFlex,
  propFlex1,
  propMinWidth,
  propMinWidth1,
}) => {
  const backgroundBorderShadow4Style = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const frameDiv3Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const frameDiv4Style = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth,
    };
  }, [propFlex1, propMinWidth]);

  const b1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`backgroundbordershadow154 ${className}`}
      style={backgroundBorderShadow4Style}
    >
      <div className="backgroundbordershadow-inner153">
        <div className="frame-parent439" style={frameDiv3Style}>
          <div className="container-wrapper145">
            <img
              className="container-icon155"
              loading="lazy"
              alt=""
              src={container}
            />
          </div>
          <div className="japan-20gb-30days-parent" style={frameDiv4Style}>
            <div className="japan-20gb-30days">{japan20GB30Days}</div>
            <div className="group">
              <b className="b1" style={b1Style}>
                {prop}
              </b>
              <div className="usd-wrapper25">
                <div className="usd155"> USD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent440">
        <div className="buy-now-wrapper">
          <a className="buy-now">{`Buy Now `}</a>
        </div>
        <u className="east154">east</u>
      </div>
    </div>
  );
};

BackgroundBorderShadow2.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  japan20GB30Days: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
  propFlex: PropTypes.any,
  propFlex1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default BackgroundBorderShadow2;
