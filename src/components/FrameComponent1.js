import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`frame-parent424 ${className}`}>
      <div className="link-read-more-about-best-es-frame">
        <b className="link-read4">Read More »</b>
      </div>
      <TextField
        className="horizontalborder4"
        placeholder="Lila Bennett"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#eaeaea" },
          "& .MuiInputBase-root": {
            height: "36.6px",
            borderRadius: "0px 0px 0px 0px",
            fontSize: "12px",
          },
          "& .MuiInputBase-input": { color: "#adadad" },
        }}
      />
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
