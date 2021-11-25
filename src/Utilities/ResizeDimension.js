import { useEffect, useState } from "react";

const useRefDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      const { current } = ref;
      const boundingRect = current?.getBoundingClientRect();

      setDimensions({
        width: boundingRect?.width,
        height: boundingRect?.height,
      });
    }

    window.addEventListener("resize", () => {
      const { current } = ref;
      const boundingRect = current?.getBoundingClientRect();

      setDimensions({
        width: boundingRect?.width,
        height: boundingRect?.height,
      });
    });

    return () => {
      // remove resize listener
      window.removeEventListener("resize", () => {
        const { current } = ref;
        const boundingRect = current.getBoundingClientRect();

        setDimensions({
          width: boundingRect?.width,
          height: boundingRect?.height,
        });
      });
    };
  }, [ref]);

  return dimensions;
};

export default useRefDimensions;
