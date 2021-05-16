import React from "react";
import { useCount } from "./countProvider";

const CountDisplay = () => {
  const [{ count }] = useCount();

  return <div>{count}</div>;
};

export default CountDisplay;
