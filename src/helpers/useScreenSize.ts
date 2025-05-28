import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setScreenSize("mobile");
      } else if (width <= 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
