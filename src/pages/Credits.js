import Header1 from "../components/Header1";
import CreditPack from "../components/CreditPack";
import FrameComponent7 from "../components/FrameComponent7";
import "./Credits.css";

const Credits = () => {
  return (
    <div className="credits">
      <Header1 />
      <header className="credits-package-parent">
        <b className="credits-package">Credits Package</b>
        <div className="indulge-your-furry2">
          we look forward to many more moments of happiness and connection in
          the pawsome journey ahead.
        </div>
      </header>
      <section className="credit">
        <div className="all-credit-packs-parent">
          <div className="all-credit-packs">All Credit Packs</div>
          <div className="sort-by-parent">
            <div className="sort-by">Sort by</div>
            <div className="default-sorting-parent">
              <div className="default-sorting">Default Sorting</div>
              <img className="icon-dropdown" alt="" src="/icondropdown.svg" />
            </div>
          </div>
        </div>
        <div className="credit-pack-parent">
          <CreditPack />
          <CreditPack />
          <CreditPack />
          <CreditPack />
          <CreditPack />
          <CreditPack />
          <CreditPack />
          <CreditPack />
          <CreditPack />
          <CreditPack />
          <CreditPack />
          <CreditPack />
        </div>
      </section>
      <FrameComponent7 />
    </div>
  );
};

export default Credits;
