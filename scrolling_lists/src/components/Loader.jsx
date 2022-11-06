import React, { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";

export const Loader = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return (
    <RotatingLines
      strokeColor='rgb(134, 65, 244)'
      strokeWidth='5'
      animationDuration='0.75'
      width='96'
      visible={true}
    />
  );
};
