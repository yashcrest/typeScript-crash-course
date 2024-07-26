interface ButtonProps {
  toggleTheme: () => void;
}

const Button = ({ toggleTheme }: ButtonProps) => {
  return (
    <>
      <button onClick={toggleTheme}>Change theme</button>
    </>
  );
};
export default Button;
