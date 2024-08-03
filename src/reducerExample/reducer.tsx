import { useReducer } from "react";

type State = {
  count: number;
  error: string | null;
};

type Action = {
  type: "increment" | "decrement";
};

// reducer function
function reducer(state: State, action: Action) {
  //destructuring type from action
  const { type } = action;

  //switch condition based on the type
  switch (type) {
    case "increment": {
      return { ...state, count: state.count + 1 };
    }
    case "decrement": {
      return { ...state, count: state.count - 1 };
    }
    default:
      return state;
  }
}

export default function Demo() {
  const [state, dispatch] = useReducer(reducer, {
    //this is the initial state passed
    count: 0,
    error: null,
  });

  return (
    <div>
      {/* state is able to access the count parameter from the initial obj passed to useReducer */}
      <div>Count: {state.count}</div>
      {state.error && <div>{state.error}</div>}
      {/* this button are using the dispatch function to dispatrch action to useReducer */}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}
