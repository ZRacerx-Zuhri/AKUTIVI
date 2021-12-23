import React, { useRef, useEffect, useState } from "react";

import Header from "../../Component/Header";
import ContenImages from "../../Content/Image";

import useRefDimensions from "../../Utilities/ResizeDimension";
import {
  IoMdArrowDropright,
  IoMdArrowDropleft,
  IoMdPlayCircle,
} from "react-icons/io";
import ContenVideos from "../../Content/Video";
import Footer from "../../Component/Footer";
import AllVideo from "../../Component/AllVideo";

const Home = (props) => {
  const containerStore = useRef();
  const RefHead = useRef();
  console.log(RefHead);
  const dimensions = useRefDimensions(RefHead);

  const [currentScreen, SetcurrentScreen] = useState(0);

  const [IsAnime, SetIsAnime] = useState(false);

  useEffect(() => {
    document.title = `AKUTIVI | ${props.location}`;
  });

  let comeRight = (screen) => {
    screen.classList.add("come-right");

    setTimeout(() => {
      screen.classList.remove("come-right");
    }, 500);
  };

  let toLeft = (screen) => {
    screen.classList.add("hide-left");

    setTimeout(() => {
      screen.classList.remove("hide-left");
    }, 500);
  };

  let toRight = (screen) => {
    screen.classList.add("hide-right");

    setTimeout(() => {
      screen.classList.remove("hide-right");
    }, 500);
  };

  function comeLeft(screen) {
    screen.classList.add("come-left");

    setTimeout(() => {
      screen.classList.remove("come-left");
    }, 500);
  }

  const Prev = () => {
    let screenStore = containerStore.current.childNodes;
    if (!IsAnime) {
      SetIsAnime(true);
      if (currentScreen > 0) {
        toRight(screenStore[currentScreen]);
        comeLeft(screenStore[currentScreen - 1]);

        setTimeout(() => {
          SetIsAnime(false);
          SetcurrentScreen((prev) => prev - 1);
          sortPositioning(
            screenStore[currentScreen],
            screenStore[currentScreen - 1],
            screenStore[currentScreen + 1]
          );
        }, 495);
      } else {
        toRight(screenStore[currentScreen]);
        comeLeft(screenStore[ContenImages.length - 1]);

        setTimeout(() => {
          SetIsAnime(false);
          SetcurrentScreen(ContenImages.length - 1);

          sortPositioning(
            screenStore[currentScreen],
            screenStore[currentScreen - 1],
            screenStore[currentScreen + 1]
          );
        }, 495);
      }
    } else {
      SetIsAnime(false);
      return;
    }
  };
  const Next = () => {
    let screenStore = containerStore.current.childNodes;
    if (!IsAnime) {
      SetIsAnime(true);
      if (currentScreen < ContenImages.length - 1) {
        toLeft(screenStore[currentScreen]);
        comeRight(screenStore[currentScreen + 1]);

        setTimeout(() => {
          SetIsAnime(false);
          SetcurrentScreen((prev) => prev + 1);
          sortPositioning(
            screenStore[currentScreen],
            screenStore[currentScreen - 1],
            screenStore[currentScreen + 1]
          );
        }, 495);
      } else {
        toLeft(screenStore[currentScreen]);
        comeRight(screenStore[0]);

        setTimeout(() => {
          SetIsAnime(false);
          SetcurrentScreen(0);

          sortPositioning(
            screenStore[currentScreen],
            screenStore[currentScreen - 1],
            screenStore[currentScreen + 1]
          );
        }, 495);
      }
    } else {
      SetIsAnime(false);
      return;
    }
  };

  const sortPositioning = (mainScreen, leftScreen, rightScreen) => {
    let screenStore = containerStore.current.childNodes;

    //If right screen is undefined. We need to repeat first screen again
    if (rightScreen === undefined) {
      rightScreen = screenStore[0];
    }
    //If left screen is undefined. We use the last screen
    if (leftScreen === undefined) {
      leftScreen = screenStore[ContenImages.length - 1];
    }

    screenStore.forEach((child) => {
      if (child === mainScreen) {
        // child.style.display = "flex";
        child.classList.add("show-again");
        child.classList.add("show");
        child.classList.remove("hidden-left", "hidden-right", "gone");
      } else if (child === leftScreen) {
        // child.style.display = "flex";
        child.classList.add("show-again");
        child.classList.add("hidden-left");
        child.classList.remove("hidden-right", "show", "gone");
      } else if (child === rightScreen) {
        // child.style.display = "flex";
        child.classList.add("show-again");
        child.classList.add("hidden-right");
        child.classList.remove("hidden-left", "show", "gone");
      } else {
        child.classList.add("gone");
        // child.style.display = "none";
      }
    });
  };

  useEffect(() => {
    let screenStore = containerStore.current.childNodes;
    sortPositioning(
      screenStore[currentScreen],
      screenStore[currentScreen - 1],
      screenStore[currentScreen + 1]
    );
  }, [currentScreen]);

  return (
    <div className="container-home">
      <Header ref={RefHead} />

      <div
        style={{ marginTop: dimensions.height }}
        className="container-conten-home"
      >
        <div className="box-container-carrosel">
          <div className="container-conten-image">
            <div ref={containerStore} className="carousel-container-aku">
              {ContenImages.map((val, idx) => (
                <div key={idx} className={`image-conten`}>
                  <div className="image-info">
                    <img
                      src={val.ImageSrc}
                      className="img-slide"
                      alt={`img-${idx}`}
                    />
                    <div className="container-info-conten">
                      <IoMdPlayCircle
                        className="icon-play-menu"
                        color="rgba(255, 255, 255, 0.5"
                      />

                      <div className="conten-title">
                        <h2 className="conten-title-h2">{val.Category}</h2>
                        <h1 className="conten-title-h1">{val.Description}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="container-btn-carousel">
              <button
                disabled={IsAnime}
                className="btn-right-carousel"
                onClick={Prev}
              >
                <IoMdArrowDropleft size={36} color="#FFFF" />
              </button>
            </div>
            <div className="container-btn-carousel">
              <button
                disabled={IsAnime}
                className="btn-right-carousel"
                onClick={Next}
              >
                <IoMdArrowDropright size={36} color="#FFFF" />
              </button>
            </div>
          </div>
        </div>

        <div className="container-leaderboard">
          <img
            className="img-leaderboard"
            alt="three"
            src="https://akutivi.com/dev/wp-content/themes/akutivi/assets/images/banner_1.jpg"
          />
        </div>

        <div className="container-list-video">
          <h1>Feature Video</h1>

          <AllVideo ContenVideos={ContenVideos} />
        </div>

        <div className="conten-breakdown">
          <h1>Latest Video</h1>
          <div className="container-latest-video">
            <div className="container-conten-latest-video">
              {ContenVideos.slice(0, 4).map((val, idx) => (
                <div className="container-thumb-latest-video">
                  <div className="conten-thumb-latest-video">
                    <div className="container-icon-play-latest-video">
                      <IoMdPlayCircle
                        className="icon-play-latest-video"
                        color="rgba(255, 255, 255, 0.5"
                      />
                    </div>
                    <img
                      alt={idx}
                      src={val.ImageSrc}
                      className="thumb-video-latest"
                    />
                  </div>
                  <div className="desc-latest-video">
                    <h3>{val.Description}</h3>
                    <h4>{val.Category}</h4>
                    <p>{val.Message}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="container-bottom-nav">
              <div>Category</div>
              <div>Iklan</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
