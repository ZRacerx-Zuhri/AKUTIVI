import Home from "../Container/Home";
import Video from "../Container/Video";

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
    route: "/Video/:param",
    exact: true,
  },
  {
    component: () => <div>Not Founds</div>,
    name: "Video",
    route: "*",
    exact: true,
  },
];
