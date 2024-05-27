import "./Header2.css";

const Header2 = ({ className = "" }) => {
  return (
    <header className={`header2 ${className}`}>
      <div className="container3">
        <div className="internet-1-container">
          <img
            className="internet-1-icon2"
            loading="lazy"
            alt=""
            src="/internet-1@2x.png"
          />
          <b className="simul84">Simul8</b>
        </div>
        <nav className="nav-list-frame">
          <nav className="nav-list2">
            <a className="item-link10">Shop</a>
            <a className="item-link11">Blog</a>
            <a className="item-link12">Help Center</a>
            <a className="item-link13">Login</a>
            <a className="item-link14">Sign up</a>
          </nav>
        </nav>
      </div>
    </header>
  );
};

Header2.propTypes = {
  className: PropTypes.string,
};

export default Header2;
