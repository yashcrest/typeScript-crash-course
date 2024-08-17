//when the return type is string
const converToArrayS = (value: string): string[] => {
  return [value.toUpperCase()];
};

converToArrayS(5); // you will not be able to pass number as the expected value is string
converToArrayS("Hello");

//when the return type is number
const convertToArrayN = (value: Number) => {
  return [value.toFixed()];
};

convertToArrayN(10.23);
convertToArrayN("Can you change this fixed?");

//with generics you dont need to specify an exact primitive return type but a generic return type like this
const generics = <genericType,>(value: genericType): genericType[] => {
  return (
    <>
      <h1></h1>
    </>
  );
};

export default generics;

//since you are using <> angle brackets at the above function with your
