import "./FrameComponent9.css";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <footer className={`frame-footer ${className}`}>
      <div className="logo4">
        <img
          className="internet-2-icon4"
          loading="lazy"
          alt=""
          src="/internet-23@2x.png"
        />
        <b className="simul89">Simul8</b>
      </div>
      <div className="footer-content2">
        <div className="footer-info1">
          <div className="about-info">
            <div className="simul8-is-a-digital-channel-fo-parent1">
              <p className="simul8-is-a-container4">
                <span className="simul8-is-a4">
                  Simul8 is a digital channel for telecom services, enabling
                </span>
                <span className="consumers-to-find4">
                  consumers to find and buy the best mobile offers through
                </span>
                <span className="their-favorite-e-commerce4">
                  their favorite e-commerce platforms
                </span>
              </p>
              <p className="simlu8-connect-llc-container4">
                <span className="simlu8-connect-llc4">Simlu8 Connect LLC</span>
                <span className="pacific-coast-hwy5">
                  222 PACIFIC COAST HWY EL SEGUNDO, CA 90245
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-links1">
          <div className="quick-links-container1">
            <div className="quick-links4">Quick Links</div>
            <u className="link-shop4">Shop</u>
            <u className="link-blog4">Blog</u>
            <a className="link-about4">About</a>
            <u className="link-contact4">Contact</u>
            <u className="link-destinations4">Destinations</u>
            <div className="divider-container">
              <div className="svg-wrapper1">
                <img
                  className="svg-icon4"
                  loading="lazy"
                  alt=""
                  src="/svg.svg"
                />
              </div>
              <div className="divider-space">+1 000 000 0000</div>
            </div>
          </div>
        </div>
        <div className="regions-container1">
          <div className="regions4">Regions</div>
          <u className="link-esim48">eSIM for Europe</u>
          <u className="link-esim49">eSIM for Asia</u>
          <u className="link-esim50">eSIM for North America</u>
          <u className="link-esim51">eSIM for South America</u>
          <u className="link-esim52">eSIM for Oceania</u>
          <u className="link-esim53">eSIM for Africa</u>
          <u className="link-esim54">eSIM for Middle East</u>
        </div>
        <div className="countries-container">
          <div className="country-list">
            <div className="countries4">Countries</div>
            <u className="link-esim55">eSIM for USA</u>
            <u className="link-esim56">eSIM for Japan</u>
            <u className="link-esim57">eSIM for Canada</u>
            <u className="link-esim58">eSIM for Singapore</u>
            <u className="link-esim59">eSIM for United Kingdom</u>
          </div>
        </div>
      </div>
      <div className="copyright1">
        <p className="simul8-privacy-policy-terms-container8">
          <span className="simul8-privacy-policy-terms-container9">
            <span>© 2023 Simul8 </span>
            <span className="privacy-policy4">Privacy Policy</span>
            <span> | </span>
            <span className="terms-conditions4">{`Terms & Conditions`}</span>
            <span> | </span>
            <span className="refunds-policy4">Refunds Policy</span>
          </span>
        </p>
        <div className="social-container">
          <img
            className="link-instagram-link8"
            loading="lazy"
            alt=""
            src="/link--instagram-link.svg"
          />
          <img
            className="link-instagram-link9"
            loading="lazy"
            alt=""
            src="/link--instagram-link-1.svg"
          />
          <img
            className="link-facebook-link4"
            loading="lazy"
            alt=""
            src="/link--facebook-link.svg"
          />
        </div>
      </div>
    </footer>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
