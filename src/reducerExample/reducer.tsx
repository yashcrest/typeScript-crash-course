import { useEffect, useReducer } from "react";

type State = {
  count: number;
  error: string | null;
};

type Action = {
  type: "increment" | "decrement" | "clearError";
};

// reducer function
const reducer = (state: State, action: Action) => {
  //destructuring type from action
  const { type } = action;

  //switch condition based on the type
  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 10;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Dont go any more" : null,
      };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError
          ? "You dont wanna go any further than that. Trust me!"
          : null,
      };
    }

    // for clearing the error msg shown
    case "clearError": {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
};

export default function Demo() {
  const [state, dispatch] = useReducer(reducer, {
    //this is the initial state passed
    count: 0,
    error: null,
  });

  //clear error msg after 3 seconds
  useEffect(() => {
    if (state.error) {
      const timer = setTimeout(() => {
        dispatch({ type: "clearError" });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [state.error]);

  return (
    <div>
      {/* state is able to access the count parameter from the initial obj passed to useReducer */}
      <div>Count: {state.count}</div>
      {state.error && <h2>{state.error}</h2>}
      {/* this button are using the dispatch function to dispatrch action to useReducer */}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}
