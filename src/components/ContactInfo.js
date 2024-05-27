import "./ContactInfo.css";

const ContactInfo = ({ className = "" }) => {
  return (
    <div className={`contact-info ${className}`}>
      <h1 className="heading-11">Contact Us</h1>
      <div className="you-can-reach-container">
        <p className="you-can-reach">
          You can reach our team 24/7, 365 days a year. Just send a
        </p>
        <p className="message-to-our">message to our email or our tel:</p>
      </div>
      <h3 className="email-supportesimlu8com">
        <span>{`Email: `}</span>
        <b>support</b>
        <span>@eSimlu8.com</span>
      </h3>
      <div className="you-can-also-container">
        <span>{`You can also call us at: `}</span>
        <b>+1(619)537-8661</b>
      </div>
      <p className="this-line-is">
        (this line is operated 9.00 – 17.00 Central European Time)
      </p>
      <h3 className="our-company">Our Company:</h3>
      <h3 className="strong-skylark">Simlu8 Connect LLC</h3>
      <h3 className="pacific-coast-hwy2">
        222 PACIFIC COAST HWY EL SEGUNDO, CA 90245
      </h3>
    </div>
  );
};

ContactInfo.propTypes = {
  className: PropTypes.string,
};

export default ContactInfo;
