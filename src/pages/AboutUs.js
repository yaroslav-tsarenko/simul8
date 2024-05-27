import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <FrameComponent5 />
      <section className="about-content-wrapper">
        <div className="about-content">
          <p className="at-esimlu8-we">
            At eSIMLU8, we believe in seamless, borderless connectivity. Born
            out of a desire to redefine communication for today’s global
            citizens, we strive to simplify your mobile connectivity needs
            through a unique blend of technology and convenience.
          </p>
          <p className="we-are-not">
            We are not just a global eSIM provider; we’re your reliable partner
            in eliminating expensive roaming charges and delivering affordable
            worldwide access to over 200 digital SIM cards. Whether you’re
            travelling for business or pleasure, we ensure that staying
            connected is no longer a luxury, but a standard that everyone can
            enjoy.
          </p>
          <p className="with-our-services">
            With our services, you can effortlessly switch between different
            mobile carriers, bypassing the traditional hassles of physical SIM
            cards. This means no more hunting for local SIM card stores or
            dealing with complicated roaming packages while you’re abroad.
          </p>
          <p className="at-the-heart">
            At the heart of our business is our commitment to our customers. Our
            dedicated team works tirelessly to provide you with superior
            customer service and uncompromised network quality, anywhere,
            anytime.
          </p>
          <p className="join-us-in">
            Join us in our journey as we revolutionize the world of global
            mobile connectivity, one eSIM at a time. With eSIMLU8, you’re not
            just staying connected; you’re staying ahead.
          </p>
        </div>
      </section>
      <FrameComponent4 />
    </div>
  );
};

export default AboutUs;
