import React from "react";

import { decrement, increment, useCount } from "./countProvider";

const CountButtons = () => {
  const [, dispatch] = useCount();

  const onIncrement = React.useCallback(() => {
    increment(dispatch);
  }, [dispatch]);

  const onDecrement = React.useCallback(() => {
    decrement(dispatch);
  }, [dispatch]);

  return React.useMemo(() => (
    <div>
      <button data-testid="button-increment" onClick={onIncrement}>Increment</button>
      <button data-testid="button-decrement" onClick={onDecrement}>Decrement</button>
    </div>
  ), [onIncrement, onDecrement]);
};

export default CountButtons;
