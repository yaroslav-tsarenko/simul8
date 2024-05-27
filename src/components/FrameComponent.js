import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <footer className={`logo-parent ${className}`}>
      <div className="logo">
        <img
          className="internet-2-icon"
          loading="lazy"
          alt=""
          src="/internet-2@2x.png"
        />
        <b className="simul81">Simul8</b>
      </div>
      <div className="frame-parent425">
        <div className="frame-wrapper1">
          <div className="frame-wrapper2">
            <div className="simul8-is-a-digital-channel-fo-parent">
              <p className="simul8-is-a-container">
                <span className="simul8-is-a">
                  Simul8 is a digital channel for telecom services, enabling
                </span>
                <span className="consumers-to-find">
                  consumers to find and buy the best mobile offers through
                </span>
                <span className="their-favorite-e-commerce">
                  their favorite e-commerce platforms
                </span>
              </p>
              <p className="simlu8-connect-llc-container">
                <span className="simlu8-connect-llc">Simlu8 Connect LLC</span>
                <span className="pacific-coast-hwy">
                  222 PACIFIC COAST HWY EL SEGUNDO, CA 90245
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="frame-wrapper3">
          <div className="quick-links-parent">
            <div className="quick-links">Quick Links</div>
            <a className="link-shop">Shop</a>
            <a className="link-blog">Blog</a>
            <a className="link-about">About</a>
            <a className="link-contact">Contact</a>
            <a className="link-destinations">Destinations</a>
            <div className="frame-parent426">
              <div className="svg-wrapper">
                <img
                  className="svg-icon"
                  loading="lazy"
                  alt=""
                  src="/svg.svg"
                />
              </div>
              <div className="div">+1 000 000 0000</div>
            </div>
          </div>
        </div>
        <div className="regions-parent">
          <div className="regions">Regions</div>
          <a className="link-esim">eSIM for Europe</a>
          <a className="link-esim1">eSIM for Asia</a>
          <a className="link-esim2">eSIM for North America</a>
          <a className="link-esim3">eSIM for South America</a>
          <a className="link-esim4">eSIM for Oceania</a>
          <a className="link-esim5">eSIM for Africa</a>
          <a className="link-esim6">eSIM for Middle East</a>
        </div>
        <div className="frame-wrapper4">
          <div className="countries-parent">
            <div className="countries">Countries</div>
            <a className="link-esim7">eSIM for USA</a>
            <a className="link-esim8">eSIM for Japan</a>
            <a className="link-esim9">eSIM for Canada</a>
            <a className="link-esim10">eSIM for Singapore</a>
            <a className="link-esim11">eSIM for United Kingdom</a>
          </div>
        </div>
      </div>
      <div className="simul8-privacy-policy-terms-parent">
        <p className="simul8-privacy-policy-terms-container">
          <span className="simul8-privacy-policy-terms-container1">
            <span>© 2023 Simul8 </span>
            <span className="privacy-policy">Privacy Policy</span>
            <span> | </span>
            <span className="terms-conditions">{`Terms & Conditions`}</span>
            <span> | </span>
            <span className="refunds-policy">Refunds Policy</span>
          </span>
        </p>
        <div className="link-instagram-link-parent">
          <img
            className="link-instagram-link"
            loading="lazy"
            alt=""
            src="/link--instagram-link.svg"
          />
          <img
            className="link-instagram-link1"
            loading="lazy"
            alt=""
            src="/link--instagram-link-1.svg"
          />
          <img
            className="link-facebook-link"
            loading="lazy"
            alt=""
            src="/link--facebook-link.svg"
          />
        </div>
      </div>
    </footer>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
