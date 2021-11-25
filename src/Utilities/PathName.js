import { useLocation } from "react-router-dom";

function usePath() {
  let location = useLocation();

  return location;
}

export default usePath;
