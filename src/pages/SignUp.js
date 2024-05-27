import Header from "../components/Header";
import SignIn from "../components/SignIn";
import FrameComponent2 from "../components/FrameComponent2";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up">
      <Header />
      <section className="sign-up-desktop">
        <SignIn />
      </section>
      <FrameComponent2 />
    </div>
  );
};

export default SignUp;
