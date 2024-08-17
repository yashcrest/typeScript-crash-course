import { useReducer } from "react";

type State = {
  age: number;
  error: string | null;
};

type Action = {
  type: "increase_age" | "decrease_age";
};

const reducerFunction = (state: State, action: Action) => {
  // destructre action to get the type of it so that you can have conditions
  const { type } = action;

  //switching cases based on which button the user clicks
  switch (type) {
    case "increase_age": {
      const newAge = state.age + 1;
      const hasError = newAge > 130;
      return {
        ...state,
        age: hasError ? state.age : newAge,
        error: hasError ? "Don't kid yourself, you cant be that much" : "null",
      };
    }
    case "decrease_age": {
      const newAge = state.age - 1;
      const hasError = newAge < 0;
      return {
        ...state,
        age: hasError ? state.age : newAge,
        error: hasError
          ? "You dumb or what? how could you be a negative age"
          : "null",
      };
    }
    default:
      return state;
  }
};

const AgeIncrement = () => {
  const [state, dispatch] = useReducer(reducerFunction, {
    age: 1,
    error: null,
  });

  const { age, error } = state;
  return (
    <>
      {/* displaying error */}
      {error && <div>{error}</div>}
      <button onClick={() => dispatch({ type: "increase_age" })}>
        Increase your motherfucking age
      </button>
      <button onClick={() => dispatch({ type: "decrease_age" })}>
        Decrease your motherfucking age
      </button>
      <p>
        You motherFucker are {age} {age <= 1 ? "year" : "years"} old!
      </p>
    </>
  );
};

export default AgeIncrement;
