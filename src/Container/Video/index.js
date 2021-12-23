import React from "react";
import Header from "../../Component/Header";

const Video = () => {
  return (
    <>
      <Header />
      <div className="container-full-video">
        <video width="320" height="240" controls>
          <source
            src="https://drive.google.com/u/0/uc?export=download&confirm=nG7u&id=1zUExftYExhDUooLVp7vpYhhG5LRq_zcV"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Video;
