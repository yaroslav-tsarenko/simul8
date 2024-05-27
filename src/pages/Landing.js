import Header4 from "../components/Header4";
import Body from "../components/Body";
import DestTitle from "../components/DestTitle";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <Header4 />
      <Body />
      <section className="destinations1">
        <DestTitle />
      </section>
      <FrameComponent10 />
      <FrameComponent9 />
    </div>
  );
};

export default Landing;
