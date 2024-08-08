import React from "react";

type ButtonProps = {
  style: React.CSSProperties; // once you have this you can pass whatever any css property you want when using this component
};

const ReactCSSProperties = ({ style }: ButtonProps) => {
  return <button style={style}>Click me</button>;
};

export default ReactCSSProperties;
