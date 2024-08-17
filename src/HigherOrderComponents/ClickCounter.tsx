import { UpdatedComponent } from "./withCounter";

const ClickCounter = ({ incrementCount, count }) => {
  return (
    <div>
      <button onClick={incrementCount}> Clicked {count} me</button>
    </div>
  );
};

export default UpdatedComponent(ClickCounter);
