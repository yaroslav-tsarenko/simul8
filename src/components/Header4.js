import "./Header4.css";

const Header4 = ({ className = "" }) => {
  return (
    <header className={`header4 ${className}`}>
      <div className="container6">
        <div className="internet-1-parent2">
          <img
            className="internet-1-icon4"
            loading="lazy"
            alt=""
            src="/internet-1@2x.png"
          />
          <b className="simul88">Simul8</b>
        </div>
        <nav className="nav-menu">
          <nav className="nav-list4">
            <a className="item-link20">Shop</a>
            <a className="item-link21">Blog</a>
            <a className="item-link22">Help Center</a>
            <a className="item-link23">Login</a>
            <a className="item-link24">Sign up</a>
          </nav>
        </nav>
      </div>
    </header>
  );
};

Header4.propTypes = {
  className: PropTypes.string,
};

export default Header4;
