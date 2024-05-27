import { Button } from "@mui/material";
import ItemSummary from "./ItemSummary";
import PropTypes from "prop-types";
import "./CartDetails.css";

const CartDetails = ({ className = "" }) => {
  return (
    <div className={`cart-details1 ${className}`}>
      <div className="cart-items">
        <div className="item-total">
          <div className="header1">
            <div className="header-child" />
            <div className="product-title">
              <b className="product">Product</b>
            </div>
            <div className="pricing-details">
              <b className="price">Price</b>
              <b className="quantity">Quantity</b>
            </div>
            <b className="total">Total</b>
          </div>
          <ItemSummary summarySpacer="/frame-1000006755@2x.png" food="Food" />
        </div>
        <ItemSummary summarySpacer="/frame-1000006755-1@2x.png" food="Car" />
        <div className="cart-item">
          <img
            className="cart-item-child"
            loading="lazy"
            alt=""
            src="/frame-1000006755-2@2x.png"
          />
          <div className="travels-parent">
            <b className="travels">Travels</b>
            <div className="discount-20-off1">Discount: 20% OFF</div>
          </div>
          <div className="frame-group">
            <div className="parent">
              <b className="b1">$120.00</b>
              <b className="credits2">12 Credits</b>
            </div>
            <div className="frame-container">
              <div className="frame-div">
                <div className="icon-plus-wrapper">
                  <img className="icon-plus" alt="" src="/iconplus-2.svg" />
                </div>
                <div className="div">3</div>
                <input className="frame-input" type="checkbox" />
              </div>
              <div className="hourly-parent">
                <div className="hourly1">Hourly</div>
                <div className="frame-wrapper">
                  <img
                    className="frame-child"
                    alt=""
                    src="/price-summary-placeholder.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <b className="b2">$120.00</b>
        </div>
        <div className="actions">
          <div className="separator" />
          <div className="action-buttons">
            <Button
              className="button"
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#010007",
                fontSize: "16",
                borderColor: "#010007",
                borderRadius: "4px",
                "&:hover": { borderColor: "#010007" },
                width: 121,
                height: 54,
              }}
            >
              Go Back
            </Button>
            <Button
              className="button1"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#000",
                borderRadius: "4px",
                "&:hover": { background: "#000" },
                width: 131,
                height: 54,
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
      <div className="checkout-details">
        <div className="header-container">
          <div className="header2">
            <b className="checkout-details1">Checkout Details</b>
          </div>
        </div>
        <div className="subtotal-total">
          <div className="subtotal-total-values">
            <b className="cart-subtotal">Cart Subtotal</b>
            <b className="subtotal-total-placeholder">$360.00</b>
          </div>
        </div>
        <div className="taxes-wrapper">
          <div className="taxes">
            <div className="tax-types">
              <div className="shipping-handling">{`Shipping & Handling`}</div>
              <b className="other-taxes">Other Taxes</b>
            </div>
            <div className="tax-types1">
              <b className="b3">$0.00</b>
              <b className="b4">$0.00</b>
            </div>
          </div>
        </div>
        <div className="taxes-separator-wrapper">
          <div className="taxes-separator" />
        </div>
        <div className="subtotal-total1">
          <div className="grand-total-parent">
            <b className="grand-total">Grand Total</b>
            <b className="b5">$360.00</b>
          </div>
        </div>
      </div>
    </div>
  );
};

CartDetails.propTypes = {
  className: PropTypes.string,
};

export default CartDetails;
