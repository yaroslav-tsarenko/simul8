import FrameComponent1 from "../components/FrameComponent1";
import CartDetails from "../components/CartDetails";
import FrameComponent from "../components/FrameComponent";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <FrameComponent1 />
      <div className="indulge-your-furry">
        we look forward to many more moments of happiness and connection in the
        pawsome journey ahead.
      </div>
      <section className="body">
        <div className="content">
          <b className="your-cart">Your Cart</b>
        </div>
        <CartDetails />
      </section>
      <FrameComponent />
    </div>
  );
};

export default Cart;
