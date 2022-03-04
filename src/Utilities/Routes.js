import AllVideo from "../Component/AllVideo";
import CategoryVideo from "../Container/Category";
import Home from "../Container/Home";
import Video from "../Container/Video";
import ContenVideos from "../Content/Video";

export const routes = [
  {
    component: Home,
    name: "Home",
    route: "/",
    exact: true,
  },
  {
    component: Video,
    name: "Video",
    route: "/Video/:url",
    exact: true,
  },
  {
    component: () => <CategoryVideo Category={"Fashion"} />,
    name: "Fashion",
    route: "/Fashion",
    exact: true,
  },
  {
    component: () => <CategoryVideo Category={"Eco Life"} />,
    name: "Fashion",
    route: "/EcoLife",
    exact: true,
  },
  {
    component: () => <CategoryVideo Category={"Family"} />,
    name: "Fashion",
    route: "/Family",
    exact: true,
  },
  {
    component: () => <div>Not Founds</div>,
    name: "Video",
    route: "*",
    exact: true,
  },
];
