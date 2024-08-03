import { useReducer } from "react";

type State = {
  age: number;
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
      return {
        age: state.age + 1,
      };
    }
    case "decrease_age": {
      return {
        age: state.age - 1,
      };
    }
    default:
      return state;
  }
};

const AgeIncrement = () => {
  const [state, dispatch] = useReducer(reducerFunction, {
    age: 1,
  });
  return (
    <>
      <button onClick={() => dispatch({ type: "increase_age" })}>
        Increase your motherfucking age
      </button>
      <button onClick={() => dispatch({ type: "decrease_age" })}>
        Decrease your motherfucking age
      </button>
      <p>
        You motherFucker are {state.age} {state.age <= 1 ? "year" : "years"}{" "}
        old!
      </p>
    </>
  );
};

export default AgeIncrement;
