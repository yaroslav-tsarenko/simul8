import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="container">
        <div className="internet-1-parent">
          <img
            className="internet-1-icon"
            loading="lazy"
            alt=""
            src="/internet-1@2x.png"
          />
          <b className="simul8">Simul8</b>
        </div>
        <nav className="nav-list-wrapper">
          <nav className="nav-list">
            <a className="item-link">Shop</a>
            <a className="item-link1">Blog</a>
            <a className="item-link2">Help Center</a>
            <a className="item-link3">Login</a>
            <a className="item-link4">Sign up</a>
          </nav>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
