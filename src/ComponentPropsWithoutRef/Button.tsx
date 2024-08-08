import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

export default function Button({ type, autoFocus, ...rest }: ButtonProps) {
  return (
    <button type={type} autoFocus={autoFocus} {...rest}>
      Click me{" "}
    </button>
  );
}
