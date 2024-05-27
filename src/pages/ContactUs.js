import Header2 from "../components/Header2";
import ContactInfo from "../components/ContactInfo";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <Header2 />
      <section className="contact-us-inner">
        <div className="contact-info-parent">
          <ContactInfo />
          <FrameComponent7 />
        </div>
      </section>
      <FrameComponent6 />
    </div>
  );
};

export default ContactUs;
