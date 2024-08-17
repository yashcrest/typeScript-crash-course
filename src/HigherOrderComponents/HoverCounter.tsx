import { UpdatedComponent } from "./withCounter";

const HoverCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <button onMouseMove={incrementCount}>
        Move moved over this area {count} times
      </button>
    </div>
  );
};

export default UpdatedComponent(HoverCounter);
