import { createContext, FC, useReducer, useContext } from "react";

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "setValue"; payload: { value: number } };

type Dispatch = (action: Action) => void;
type State = {
  count: number;
  anotherVal: string;
};

const CountStateContext = createContext<State | undefined>(undefined);
const CountDispatchContext = createContext<Dispatch | undefined>(undefined);

function CountReducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "setValue": {
      return {
        ...state,
        count: action.payload.value,
      };
    }
    default:
      throw Error(`Unhandled action type: ${action!.type}`);
  }
}

const CountProvider: FC<{ init?: Partial<State> }> = ({ children, init }) => {
  const initialState: State = {
    count: 0,
    anotherVal: "hello",
    ...init,
  };

  const [state, dispatch] = useReducer(CountReducer, initialState);

  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
};

export function useCount(): [State, Dispatch] {
  const state = useContext(CountStateContext);
  const dispatch = useContext(CountDispatchContext);
  if (state === undefined || dispatch === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return [state, dispatch];
}

export function increment(dispatch: Dispatch) {
  dispatch({ type: "increment" })
}

export function decrement(dispatch: Dispatch) {
  dispatch({ type: "decrement" })
}

export function setValue(dispatch: Dispatch, value: number) {
  dispatch({ type: "setValue", payload: { value } });
}

export default CountProvider;
