import React from "react";

type ButtonProps = React.ComponentProps<"button">;

export default function Button({ type, autoFocus }: ButtonProps) {
  return <button>Click me </button>;
}
