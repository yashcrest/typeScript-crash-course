// onClick handler function defined outside (extracted)
// in this case you will need to define the type for event "e".
export default function Button() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
  };
  return <button onClick={handleClick}>Click me!</button>;
}

// inline func
function DemoButton() {
  return <button onClick={(e) => console.log("clicked" + e)}>Click me</button>;
}

DemoButton();
