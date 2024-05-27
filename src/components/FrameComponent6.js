import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <footer className={`logo-container ${className}`}>
      <div className="logo2">
        <img
          className="internet-2-icon2"
          loading="lazy"
          alt=""
          src="/internet-22@2x.png"
        />
        <b className="simul85">Simul8</b>
      </div>
      <div className="footer-content1">
        <div className="footer-description-wrapper">
          <div className="footer-description">
            <div className="simul8-is-a-digital-channel-fo-container">
              <p className="simul8-is-a-container2">
                <span className="simul8-is-a2">
                  Simul8 is a digital channel for telecom services, enabling
                </span>
                <span className="consumers-to-find2">
                  consumers to find and buy the best mobile offers through
                </span>
                <span className="their-favorite-e-commerce2">
                  their favorite e-commerce platforms
                </span>
              </p>
              <p className="simlu8-connect-llc-container2">
                <span className="simlu8-connect-llc2">Simlu8 Connect LLC</span>
                <span className="pacific-coast-hwy3">
                  222 PACIFIC COAST HWY EL SEGUNDO, CA 90245
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-links-list-wrapper">
          <div className="footer-links-list">
            <div className="quick-links2">Quick Links</div>
            <u className="link-shop2">Shop</u>
            <a className="link-blog2">Blog</a>
            <a className="link-about2">About</a>
            <a className="link-contact2">Contact</a>
            <u className="link-destinations2">Destinations</u>
            <div className="footer-icon-parent">
              <div className="footer-icon">
                <img
                  className="svg-icon2"
                  loading="lazy"
                  alt=""
                  src="/svg.svg"
                />
              </div>
              <div className="footer-icon-space">+1 000 000 0000</div>
            </div>
          </div>
        </div>
        <div className="regions-group">
          <div className="regions2">Regions</div>
          <u className="link-esim24">eSIM for Europe</u>
          <u className="link-esim25">eSIM for Asia</u>
          <u className="link-esim26">eSIM for North America</u>
          <u className="link-esim27">eSIM for South America</u>
          <u className="link-esim28">eSIM for Oceania</u>
          <u className="link-esim29">eSIM for Africa</u>
          <u className="link-esim30">eSIM for Middle East</u>
        </div>
        <div className="countries-list-wrapper">
          <div className="countries-list">
            <div className="countries2">Countries</div>
            <u className="link-esim31">eSIM for USA</u>
            <u className="link-esim32">eSIM for Japan</u>
            <u className="link-esim33">eSIM for Canada</u>
            <u className="link-esim34">eSIM for Singapore</u>
            <u className="link-esim35">eSIM for United Kingdom</u>
          </div>
        </div>
      </div>
      <div className="simul8-privacy-policy-terms-group">
        <p className="simul8-privacy-policy-terms-container4">
          <span className="simul8-privacy-policy-terms-container5">
            <span>© 2023 Simul8 </span>
            <span className="privacy-policy2">Privacy Policy</span>
            <span> | </span>
            <span className="terms-conditions2">{`Terms & Conditions`}</span>
            <span> | </span>
            <span className="refunds-policy2">Refunds Policy</span>
          </span>
        </p>
        <div className="link-instagram-link-group">
          <img
            className="link-instagram-link4"
            loading="lazy"
            alt=""
            src="/link--instagram-link.svg"
          />
          <img
            className="link-instagram-link5"
            loading="lazy"
            alt=""
            src="/link--instagram-link-1.svg"
          />
          <img
            className="link-facebook-link2"
            loading="lazy"
            alt=""
            src="/link--facebook-link.svg"
          />
        </div>
      </div>
    </footer>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
