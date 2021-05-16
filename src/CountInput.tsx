import React from "react";
import { setValue, useCount } from "./countProvider";

const CountInput = () => {
  const [{ count }, dispatch] = useCount();

  const onChange = (event: React.ChangeEvent<{ valueAsNumber: number }>) => {
    if (event.target.valueAsNumber !== Number.NaN) {
      setValue(dispatch, event.target.valueAsNumber);
    }
  };

  return (
    <div>
      <input type="number" value={count} onChange={onChange} />
    </div>
  );
};

export default CountInput;
