import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import "./ItemSummary.css";

const ItemSummary = ({ className = "", summarySpacer, food }) => {
  return (
    <div className={`item-summary ${className}`}>
      <img
        className="summary-spacer-icon"
        loading="lazy"
        alt=""
        src={summarySpacer}
      />
      <div className="item-description-summary">
        <b className="food">{food}</b>
        <div className="discount-20-off">Discount: 20% OFF</div>
      </div>
      <div className="credits-summary">
        <div className="credits-value">
          <b className="credits-label">$120.00</b>
          <b className="credits1">12 Credits</b>
        </div>
        <div className="quantity-summary">
          <TextField
            className="quantity-controls-summary"
            variant="standard"
            select
            value={1}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  style={{ marginLeft: "8px", marginRight: "28px" }}
                >
                  <img width="16px" height="16px" src="/iconplus.svg" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" style={{ marginRight: "8px" }}>
                  <img width="16px" height="16px" src="/iconminus.svg" />
                </InputAdornment>
              ),
            }}
            SelectProps={{ IconComponent: () => null }}
            sx={{
              borderColor: "#f5f5f5",
              borderStyle: "SOLID",
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
              width: "100%",
              height: "40px",
              "& .MuiInput-underline:before": { borderBottom: "none" },
              "& .MuiInput-underline:after": { borderBottom: "none" },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
              "& .MuiInputBase-root": { height: "100%" },
              "& .MuiInputBase-input": {
                fontFamily: "Almarai",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <MenuItem value={1}>3</MenuItem>
          </TextField>
          <div className="pricing-summary">
            <div className="hourly">Hourly</div>
            <div className="pricing-value-summary">
              <img
                className="price-summary-placeholder"
                alt=""
                src="/price-summary-placeholder.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <b className="b">$120.00</b>
    </div>
  );
};

ItemSummary.propTypes = {
  className: PropTypes.string,
  summarySpacer: PropTypes.string,
  food: PropTypes.string,
};

export default ItemSummary;
