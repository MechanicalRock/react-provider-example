import React from "react";
import { useCount } from "./countProvider";

const CountDisplay = () => {
  const [{ count }] = useCount();

  return <div data-testid="text-count">{count}</div>;
};

export default CountDisplay;
