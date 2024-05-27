import { useMemo } from "react";
import "./FrameComponent11.css";

const FrameComponent11 = ({
  className = "",
  container,
  thailand50GB10DaysWith,
  calls,
  prop,
  propMarginTop,
  propPadding,
  propMinWidth,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      marginTop: propMarginTop,
      padding: propPadding,
    };
  }, [propMarginTop, propPadding]);

  const bStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`frame-wrapper9 ${className}`} style={frameDiv2Style}>
      <div className="frame-parent438">
        <div className="container-wrapper144">
          <img
            className="container-icon154"
            loading="lazy"
            alt=""
            src={container}
          />
        </div>
        <div className="thailand-50gb-10days-with-call-parent">
          <div className="thailand-50gb-10days-container">
            <p className="thailand-50gb-10days">{thailand50GB10DaysWith}</p>
            <p className="calls">{calls}</p>
          </div>
          <div className="parent">
            <b className="b" style={bStyle}>
              {prop}
            </b>
            <div className="usd-wrapper24">
              <div className="usd154"> USD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  thailand50GB10DaysWith: PropTypes.string,
  calls: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propMarginTop: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FrameComponent11;
