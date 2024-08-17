import React, { useState } from "react";

export const UpdatedComponent = (OriginalComponent) => {
  return () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };
    return <OriginalComponent count={count} incrementCount={incrementCount} />;
  };
};

//class component
// export const UpdatedComponent2 = (OriginalComponent2) => {
//   class NewComponent2 extends React.Component {
//     render() {
//       return <OriginalComponent2 {...this.props} name="Yash2" />;
//     }
//   }
//   return NewComponent2;
// };
