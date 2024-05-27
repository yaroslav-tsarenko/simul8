import "./Body.css";

const Body = ({ className = "" }) => {
  return (
    <section className={`body ${className}`}>
      <div className="background5">
        <h1 className="world-at-your1">
          World at Your Fingertips: Travel, Connect, Explore
        </h1>
        <div className="label-container">
          <div className="label1">
            <div className="border2" />
            <h3 className="search1">search</h3>
            <div className="search-dropdown">
              <div className="container7">
                <div className="search-for-a1">
                  Search for a country or region
                </div>
              </div>
            </div>
            <h3 className="arrow-drop-down1">arrow_drop_down</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

Body.propTypes = {
  className: PropTypes.string,
};

export default Body;
