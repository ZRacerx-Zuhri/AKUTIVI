import { IoMdPlayCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AllVideo = (props) => {
  const navigate = useNavigate();
  return (
    <div className="container-conten-video">
      {props.ContenVideos.map((val, idx) => (
        <div className="card-video" key={idx}>
          <div
            onClick={() => {
              // console.log("tes");
              navigate(`/Video/${val.Description}`);
            }}
            className="conten-thumb-video"
          >
            <div className="container-card-info-video">
              <IoMdPlayCircle
                className="icon-card-play-menu"
                color="rgba(255, 255, 255, 0.5"
              />
            </div>
            <img alt={idx} src={val.ImageSrc} className="thumb-video" />
          </div>
          <div className="title-card-video">
            <h5>{val.Category}</h5>
            <h3>{val.Description}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllVideo;
