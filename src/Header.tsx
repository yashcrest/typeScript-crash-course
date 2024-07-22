export interface Props {
  title: string;
  color?: string;
}

// in this code, the props are being passed normally as you would in react, but the thing that is being checked here is the datatypes of those passed props by defining interface.
const Header = (props: Props) => {
  return (
    <header>
      <h1 style={{ color: props.color ? props.color : "blue" }}>
        {props.title}
      </h1>
    </header>
  );
};

export default Header;
