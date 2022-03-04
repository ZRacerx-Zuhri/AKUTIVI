import React, { useRef } from "react";
import Header from "../../Component/Header";
import { useParams } from "react-router-dom";
import useRefDimensions from "../../Utilities/ResizeDimension";
import ContenVideos from "../../Content/Video";
import AllVideo from "../../Component/AllVideo";

import Banner1 from "../../Component/Banner";

const CategoryVideo = (props) => {
  let { url } = useParams();
  const RefHead = useRef();
  const dimensions = useRefDimensions(RefHead);
  console.log(props.Category);

  // console.log(ContenVideos.find((val) => val.Description === url));
  return (
    <>
      <Header ref={RefHead} />
      <div
        style={{ marginTop: dimensions.height }}
        className="container-category-video"
      >
        <div className="list-video-category">
          <AllVideo
            ContenVideos={ContenVideos.filter(
              (val) => val.Category === props.Category
            )}
          />
        </div>
        <Banner1 />
      </div>
    </>
  );
};

export default CategoryVideo;
