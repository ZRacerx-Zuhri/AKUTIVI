import React, { useRef } from "react";
import Header from "../../Component/Header";
import { useParams } from "react-router-dom";
import useRefDimensions from "../../Utilities/ResizeDimension";
import ContenVideos from "../../Content/Video";

const Video = (props) => {
  let { url } = useParams();
  const RefHead = useRef();
  const dimensions = useRefDimensions(RefHead);
  // console.log(url);

  // console.log(ContenVideos.find((val) => val.Description === url));
  return (
    <>
      <Header ref={RefHead} />
      <div
        style={{ marginTop: dimensions.height }}
        className="container-full-video"
      >
        <div className="container-play-video">
          <div className="conten-play-video">
            <video height="600" className="video" controls>
              <source
                src={ContenVideos.find((val) => val.Description === url).url}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
