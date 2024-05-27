import { Button } from "@mui/material";
import "./CreditPack.css";

const CreditPack = ({ className = "" }) => {
  return (
    <div className={`credit-pack ${className}`}>
      <div className="wrapper">
        <div className="div5">$50</div>
      </div>
      <div className="credit-pack-inner">
        <div className="credit-package-parent">
          <div className="credit-package">$50 Credit Package</div>
          <div className="frame">
            <div className="div6">$49.99</div>
          </div>
          <div className="button-wrapper">
            <Button
              className="button8"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#000",
                borderRadius: "8px",
                "&:hover": { background: "#000" },
                height: 50,
              }}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

CreditPack.propTypes = {
  className: PropTypes.string,
};

export default CreditPack;
