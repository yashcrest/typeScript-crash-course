import { ComponentProps, ComponentPropsWithoutRef } from "react";

// this way you will get all the properties of button
type ButtonProps = ComponentProps<"button">;

export default function Button({ type, autoFocus, ...rest }: ButtonProps) {
  return (
    <button type={type} autoFocus={autoFocus} {...rest}>
      Click me{" "}
    </button>
  );
}

//Component props without ref
type TextProps2 = ComponentPropsWithoutRef<"text">;

export function Text({ type }: TextProps2) {
  return <text type={type}>hey hi hello</text>;
}
