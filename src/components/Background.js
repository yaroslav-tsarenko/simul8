import "./Background.css";

const Background = ({ className = "" }) => {
  return (
    <section className={`background ${className}`}>
      <h1 className="world-at-your">
        World at Your Fingertips: Travel, Connect, Explore
      </h1>
      <div className="label-wrapper">
        <div className="label">
          <div className="border" />
          <a className="search">search</a>
          <div className="container-wrapper140">
            <div className="container1">
              <div className="search-for-a">Search for a country or region</div>
            </div>
          </div>
          <h2 className="arrow-drop-down">arrow_drop_down</h2>
        </div>
      </div>
    </section>
  );
};

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;
