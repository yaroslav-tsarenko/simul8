import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Header from "../components/Header";
import Background from "../components/Background";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./ArticlesBlogs.css";

const ArticlesBlogs = () => {
  return (
    <div className="articlesblogs">
      <Header />
      <main className="background-parent">
        <Background />
        <section className="frame-wrapper">
          <div className="heading-2-latest-articles-parent">
            <h1 className="heading-2">Latest articles</h1>
            <div className="article-parent">
              <div className="article">
                <div className="link-wrapper">
                  <img
                    className="link-icon"
                    loading="lazy"
                    alt=""
                    src="/link.svg"
                  />
                </div>
                <FrameComponent3
                  heading3LinkBestESIMForDu="Best eSIM for Dubai"
                  areYouPlanningATripToDuba="Are you planning a trip to Dubai in 2024 and looking for the best eSIM to stay"
                  connectedIveGotYouCovered="connected? I’ve got you covered. In this guide, I’ll show you everything you"
                  needToKnowAboutUsingAnESI="need to know about using an eSIM for Dubai. Including a full comparison of the"
                  topDubaiESIMPlansFor="top Dubai eSIM plans for"
                />
                <div className="link-read-more-about-best-es-wrapper">
                  <a
                    className="link-read"
                    href="https://www.figma.com/design/9R9bHxX1JUfHRX17ZYDRWx?node-id=1-7177"
                    target="_blank"
                  >
                    Read More »
                  </a>
                </div>
                <TextField
                  className="horizontalborder"
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
              <div className="article1">
                <div className="link-container">
                  <div className="link">
                    <img
                      className="container-icon"
                      alt=""
                      src="/container@2x.png"
                    />
                    <img
                      className="gradient-icon"
                      loading="lazy"
                      alt=""
                      src="/gradient@2x.png"
                    />
                  </div>
                </div>
                <FrameComponent2
                  heading3LinkBestESIMForJa="Best eSIM for Jakarta"
                  areYouPlanningATripToJaka="Are you planning a trip to Jakarta, Indonesia in 2024 and looking for the best"
                  wayToStayConnectedAnESIMC="way to stay connected? An eSIM card is a convenient, hassle-free solution to"
                  avoidExpensiveRoamingChar="avoid expensive roaming charges while ensuring you have reliable data access"
                  onYourUnlockedESIMCompati="on your unlocked, eSIM-compatible phone. In this comprehensive guide, we’ll"
                  compare="compare"
                />
                <FrameComponent1 />
              </div>
            </div>
            <div className="frame-parent">
              <div className="article-group">
                <div className="article2">
                  <div className="link-frame">
                    <div className="link1">
                      <img
                        className="container-icon1"
                        alt=""
                        src="/container-1@2x.png"
                      />
                      <img
                        className="gradient-icon1"
                        loading="lazy"
                        alt=""
                        src="/gradient-1@2x.png"
                      />
                    </div>
                  </div>
                  <FrameComponent3
                    heading3LinkBestESIMForDu="Best eSIM for Bangkok Travel in 2024"
                    areYouPlanningATripToDuba="I recently took a trip to Bangkok, Thailand and wanted to stay connected while"
                    connectedIveGotYouCovered="visiting this vibrant city. As a digital nomad who travels full-time for work,"
                    needToKnowAboutUsingAnESI="having constant internet access is crucial. Rather than dealing with"
                    topDubaiESIMPlansFor="international roaming fees or trying to find a local SIM card, I decided"
                    propDisplay="inline-block"
                  />
                  <div className="link-read-more-about-best-es-container">
                    <b className="link-read1">Read More »</b>
                  </div>
                  <TextField
                    className="horizontalborder1"
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
                <div className="article3">
                  <div className="frame-div">
                    <div className="link2">
                      <img
                        className="container-icon2"
                        loading="lazy"
                        alt=""
                        src="/container-2@2x.png"
                      />
                      <div className="gradient" />
                    </div>
                  </div>
                  <div className="article-inner">
                    <div className="best-esim-for-toronto-stay-co-parent">
                      <h2 className="best-esim-for-container">
                        <p className="best-esim-for">
                          Best eSIM for Toronto: Stay Connected in
                        </p>
                        <p className="canadas-largest-city">
                          Canada’s Largest City
                        </p>
                      </h2>
                      <p className="are-you-planning-container">
                        <span className="are-you-planning">
                          Are you planning a trip to the bustling metropolis of
                          Toronto? As Canada’s
                        </span>
                        <span className="largest-city-toronto">
                          largest city, Toronto offers a vibrant mix of culture,
                          entertainment, and
                        </span>
                        <span className="business-opportunities-to">
                          business opportunities. To make the most of your
                          visit, it’s essential to stay
                        </span>
                        <span className="connected-with-a">
                          connected with a reliable internet connection. That’s
                          where an eSIM for
                        </span>
                        <span className="toronto-comes">Toronto comes</span>
                      </p>
                    </div>
                  </div>
                  <FrameComponent1 />
                </div>
              </div>
              <div className="article-container">
                <div className="article4">
                  <div className="link-wrapper1">
                    <div className="link3">
                      <img
                        className="container-icon3"
                        alt=""
                        src="/container-3@2x.png"
                      />
                      <img
                        className="gradient-icon2"
                        loading="lazy"
                        alt=""
                        src="/gradient-2@2x.png"
                      />
                    </div>
                  </div>
                  <div className="article-child">
                    <div className="best-esim-for-stockholm-stay-parent">
                      <h2 className="best-esim-for-container1">
                        <p className="best-esim-for1">
                          Best eSIM for Stockholm: Stay Connected in
                        </p>
                        <p className="swedens-scenic-capital">
                          Sweden’s Scenic Capital
                        </p>
                      </h2>
                      <p className="as-an-avid-container">
                        <span className="as-an-avid">
                          As an avid traveler, having reliable data connectivity
                          is essential whenever I
                        </span>
                        <span className="visit-a-new">
                          visit a new destination. Whether it’s looking up
                          directions on Google Maps,
                        </span>
                        <span className="posting-photos-on">
                          posting photos on Instagram, or keeping in touch with
                          family back home,
                        </span>
                        <span className="access-to-mobile">
                          access to mobile data makes all the difference. That’s
                          why on a recent trip
                        </span>
                      </p>
                    </div>
                  </div>
                  <FrameComponent1 />
                </div>
                <div className="article5">
                  <div className="link4">
                    <img
                      className="container-icon4"
                      loading="lazy"
                      alt=""
                      src="/container-4@2x.png"
                    />
                    <div className="gradient1" />
                  </div>
                  <div className="article-inner1">
                    <div className="frame-group">
                      <div className="heading-3-link-does-huawei-parent">
                        <h2 className="heading-3">
                          Does Huawei P20 Support eSIM?
                        </h2>
                        <p className="ive-got-a-container">
                          <span className="ive-got-a">
                            I’ve got a Huawei P20 and I’m curious if it supports
                            eSIM. If it doesn’t, are there
                          </span>
                          <span className="any-huawei-phones">
                            any Huawei phones that do? And how do I switch from
                            a regular SIM to an
                          </span>
                          <span className="esim-on-those">
                            eSIM on those models?
                          </span>
                        </p>
                      </div>
                      <b className="link-read2">Read More »</b>
                    </div>
                  </div>
                  <TextField
                    className="horizontalborder2"
                    placeholder="Dennis Terry"
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
              </div>
            </div>
            <div className="frame-container">
              <div className="article-parent1">
                <div className="article6">
                  <div className="link5">
                    <img
                      className="container-icon5"
                      loading="lazy"
                      alt=""
                      src="/container-5@2x.png"
                    />
                    <div className="gradient2" />
                  </div>
                  <div className="article-inner2">
                    <div className="frame-parent1">
                      <div className="heading-3-link-does-huawei-group">
                        <h2 className="heading-31">
                          Does Huawei P30 Have eSIM?
                        </h2>
                        <p className="im-thinking-about-container">
                          <span className="im-thinking-about">
                            I’m thinking about making the switch to an eSIM for
                            convenience, but I’m not
                          </span>
                          <span className="sure-if-my">
                            sure if my phone supports it. I have a Huawei P30.
                            Does anyone know if it’s
                          </span>
                          <span className="esim-compatible-or">
                            eSIM compatible, or am I stuck with regular SIM
                            cards?
                          </span>
                        </p>
                      </div>
                      <a
                        className="link-read3"
                        href="https://www.figma.com/design/9R9bHxX1JUfHRX17ZYDRWx?node-id=1-9657"
                        target="_blank"
                      >
                        Read More »
                      </a>
                    </div>
                  </div>
                  <TextField
                    className="horizontalborder3"
                    placeholder="Dennis Terry"
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
                <div className="article7">
                  <div className="link-wrapper2">
                    <div className="link6">
                      <img
                        className="container-icon6"
                        loading="lazy"
                        alt=""
                        src="/container-6@2x.png"
                      />
                      <div className="gradient3" />
                    </div>
                  </div>
                  <FrameComponent2
                    heading3LinkBestESIMForJa="Does Huawei Mate 40 Support eSIM?"
                    areYouPlanningATripToJaka="The Huawei Mate 40 is a powerful smartphone packed with advanced features."
                    wayToStayConnectedAnESIMC="One question many have is whether the Huawei Mate 40"
                    avoidExpensiveRoamingChar="supports eSIM technology. The answer is yes – but with a few important details"
                    onYourUnlockedESIMCompati="to keep in mind. eSIM Support Varies by Mate 40 Model The Huawei Mate 40"
                    compare="comes in both"
                    propDisplay="inline-block"
                  />
                  <FrameComponent1 />
                </div>
              </div>
              <div className="article8">
                <div className="link-wrapper3">
                  <div className="link7">
                    <img
                      className="container-icon7"
                      loading="lazy"
                      alt=""
                      src="/container-7@2x.png"
                    />
                    <div className="gradient4" />
                  </div>
                </div>
                <div className="article-inner3">
                  <div className="heading-3-link-does-huawei-container">
                    <h2 className="heading-32">
                      Does Huawei P40 Support eSIM?
                    </h2>
                    <p className="the-huawei-p40-container">
                      <span className="the-huawei-p40">
                        The Huawei P40 and P40 Pro are the first Huawei phones
                        to support eSIM,
                      </span>
                      <span className="offering-users-a">
                        offering users a convenient way to connect without a
                        physical SIM card.
                      </span>
                    </p>
                  </div>
                </div>
                <FrameComponent1 />
              </div>
            </div>
          </div>
        </section>
      </main>
      <FrameComponent />
    </div>
  );
};

export default ArticlesBlogs;
