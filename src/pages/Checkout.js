import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <FrameComponent1 />
      <div className="indulge-your-furry1">
        we look forward to many more moments of happiness and connection in the
        pawsome journey ahead.
      </div>
      <section className="frame-parent">
        <div className="checkout-wrapper">
          <b className="checkout1">Checkout</b>
        </div>
        <div className="cart-details">
          <FrameComponent4 />
          <FrameComponent3 />
        </div>
      </section>
      <FrameComponent2 />
    </div>
  );
};

export default Checkout;
