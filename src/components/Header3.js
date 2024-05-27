import "./Header3.css";

const Header3 = ({ className = "" }) => {
  return (
    <div className={`header3 ${className}`}>
      <div className="container5">
        <div className="internet-1-parent1">
          <img className="internet-1-icon3" alt="" src="/internet-1@2x.png" />
          <b className="simul86">Simul8</b>
        </div>
        <div className="nav-list-wrapper1">
          <div className="nav-list3">
            <a
              className="item-link15"
              href="https://www.figma.com/design/9R9bHxX1JUfHRX17ZYDRWx?node-id=1-2"
              target="_blank"
            >
              Shop
            </a>
            <a
              className="item-link16"
              href="https://www.figma.com/design/9R9bHxX1JUfHRX17ZYDRWx?node-id=1-832"
              target="_blank"
            >
              Blog
            </a>
            <a
              className="item-link17"
              href="https://www.figma.com/design/9R9bHxX1JUfHRX17ZYDRWx?node-id=1-1154"
              target="_blank"
            >
              Help Center
            </a>
            <div className="item-link18">Login</div>
            <div className="item-link19">Sign up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header3.propTypes = {
  className: PropTypes.string,
};

export default Header3;
