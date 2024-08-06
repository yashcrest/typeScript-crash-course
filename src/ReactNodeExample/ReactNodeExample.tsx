import React from "react";

type TButton = {
  children: React.ReactNode;
};

const ReactNodeExample = ({ children }: TButton) => {
  return (
    <>
      <button>{children}</button>
    </>
  );
};

export default ReactNodeExample;
