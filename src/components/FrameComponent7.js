import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <div className={`input-fields-parent ${className}`}>
      <div className="input-fields">
        <TextField
          className="background1"
          placeholder="Your name *"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "rgba(0, 0, 0, 0.24)" },
            "& .MuiInputBase-root": {
              height: "56px",
              backgroundColor: "#fffefd",
              borderRadius: "8px",
            },
            "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.6)" },
          }}
        />
        <div className="rectangle-wrapper">
          <div className="rectangle" />
        </div>
      </div>
      <div className="input-fields1">
        <TextField
          className="background2"
          placeholder="Your email *"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "rgba(0, 0, 0, 0.24)" },
            "& .MuiInputBase-root": {
              height: "56px",
              backgroundColor: "#fffefd",
              borderRadius: "8px",
            },
            "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.6)" },
          }}
        />
        <div className="rectangle-container">
          <div className="rectangle1" />
        </div>
      </div>
      <div className="input-fields2">
        <TextField
          className="background3"
          placeholder="Subject *"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "rgba(0, 0, 0, 0.24)" },
            "& .MuiInputBase-root": {
              height: "56px",
              backgroundColor: "#fffefd",
              borderRadius: "8px",
            },
            "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.6)" },
          }}
        />
        <div className="rectangle-frame">
          <div className="rectangle2" />
        </div>
      </div>
      <div className="input-fields3">
        <div className="background4">
          <div className="border1" />
          <div className="container4">
            <div className="enter-your-message">Enter your message *</div>
          </div>
        </div>
        <div className="rectangle-wrapper1">
          <div className="rectangle3" />
        </div>
      </div>
      <Button
        className="button"
        disableElevation={true}
        variant="contained"
        sx={{
          color: "#fffefd",
          fontSize: "18",
          background: "rgba(255, 255, 255, 0)",
          borderRadius: "8px",
          "&:hover": { background: "rgba(255, 255, 255, 0)" },
          height: 46.3,
        }}
      >
        Submit
      </Button>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
