import "./Header1.css";

const Header1 = ({ className = "" }) => {
  return (
    <header className={`header1 ${className}`}>
      <div className="container2">
        <div className="internet-1-group">
          <img
            className="internet-1-icon1"
            loading="lazy"
            alt=""
            src="/internet-1@2x.png"
          />
          <b className="simul82">Simul8</b>
        </div>
        <nav className="nav-list-container">
          <nav className="nav-list1">
            <a className="item-link5">Shop</a>
            <a className="item-link6">Blog</a>
            <a className="item-link7">Help Center</a>
            <a className="item-link8">Login</a>
            <a className="item-link9">Sign up</a>
          </nav>
        </nav>
      </div>
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
