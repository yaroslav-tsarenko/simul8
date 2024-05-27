import Header from "../components/Header";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import "./SignUp1.css";

const SignUp1 = () => {
  return (
    <div className="sign-up1">
      <Header />
      <section className="sign-in-desktop">
        <div className="sign-in">
          <FrameComponent6 />
        </div>
      </section>
      <FrameComponent5 />
    </div>
  );
};

export default SignUp1;
