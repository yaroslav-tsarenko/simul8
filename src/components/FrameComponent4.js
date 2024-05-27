import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <footer className={`logo-group ${className}`}>
      <div className="logo1">
        <img
          className="internet-2-icon1"
          loading="lazy"
          alt=""
          src="/internet-21@2x.png"
        />
        <b className="simul83">Simul8</b>
      </div>
      <div className="footer-content">
        <div className="footer-info">
          <div className="footer-address">
            <div className="simul8-is-a-digital-channel-fo-group">
              <p className="simul8-is-a-container1">
                <span className="simul8-is-a1">
                  Simul8 is a digital channel for telecom services, enabling
                </span>
                <span className="consumers-to-find1">
                  consumers to find and buy the best mobile offers through
                </span>
                <span className="their-favorite-e-commerce1">
                  their favorite e-commerce platforms
                </span>
              </p>
              <p className="simlu8-connect-llc-container1">
                <span className="simlu8-connect-llc1">Simlu8 Connect LLC</span>
                <span className="pacific-coast-hwy1">
                  222 PACIFIC COAST HWY EL SEGUNDO, CA 90245
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="quick-links-group">
            <div className="quick-links1">Quick Links</div>
            <u className="link-shop1">Shop</u>
            <a className="link-blog1">Blog</a>
            <a className="link-about1">About</a>
            <a className="link-contact1">Contact</a>
            <u className="link-destinations1">Destinations</u>
            <div className="links-spacer">
              <div className="svg-container">
                <img
                  className="svg-icon1"
                  loading="lazy"
                  alt=""
                  src="/svg.svg"
                />
              </div>
              <div className="div1">+1 000 000 0000</div>
            </div>
          </div>
        </div>
        <div className="region-links">
          <div className="regions1">Regions</div>
          <u className="link-esim12">eSIM for Europe</u>
          <u className="link-esim13">eSIM for Asia</u>
          <u className="link-esim14">eSIM for North America</u>
          <u className="link-esim15">eSIM for South America</u>
          <u className="link-esim16">eSIM for Oceania</u>
          <u className="link-esim17">eSIM for Africa</u>
          <u className="link-esim18">eSIM for Middle East</u>
        </div>
        <div className="country-links">
          <div className="country-items">
            <div className="countries1">Countries</div>
            <u className="link-esim19">eSIM for USA</u>
            <u className="link-esim20">eSIM for Japan</u>
            <u className="link-esim21">eSIM for Canada</u>
            <u className="link-esim22">eSIM for Singapore</u>
            <u className="link-esim23">eSIM for United Kingdom</u>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="simul8-privacy-policy-terms-container2">
          <span className="simul8-privacy-policy-terms-container3">
            <span>© 2023 Simul8 </span>
            <span className="privacy-policy1">Privacy Policy</span>
            <span> | </span>
            <span className="terms-conditions1">{`Terms & Conditions`}</span>
            <span> | </span>
            <span className="refunds-policy1">Refunds Policy</span>
          </span>
        </div>
        <div className="social-links">
          <img
            className="link-instagram-link2"
            loading="lazy"
            alt=""
            src="/link--instagram-link.svg"
          />
          <img
            className="link-instagram-link3"
            alt=""
            src="/link--instagram-link-1.svg"
          />
          <img
            className="link-facebook-link1"
            loading="lazy"
            alt=""
            src="/link--facebook-link.svg"
          />
        </div>
      </div>
    </footer>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
