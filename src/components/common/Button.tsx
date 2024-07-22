interface Props {
  toggleTheme: () => void;
}

const Button = ({ toggleTheme }: Props) => {
  return (
    <>
      <button onClick={toggleTheme}>Change theme</button>
    </>
  );
};
export default Button;
