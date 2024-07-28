import { Reducer } from "react";

type State = {
  count: number;
  error: string | null;
};

type Action = {
  type: "increment" | "decrement";
};

const reducer = (state: State, action: Action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default reducer;
