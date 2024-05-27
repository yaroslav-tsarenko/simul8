import Header1 from "./Header1";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`header-parent ${className}`}>
      <Header1 />
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <img
            className="unsplashhvpb-ucammu-icon"
            loading="lazy"
            alt=""
            src="/unsplashhvpbucammu@2x.png"
          />
          <h1 className="about-us1">About Us</h1>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
