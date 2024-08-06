import ReactCSSProperties from "./ReactCSSProperties";

const Page = () => {
  return (
    <div>
      <ReactCSSProperties
        style={{
          background: "red",
          color: "white",
          fontSize: "20em",
        }}
      />
    </div>
  );
};

export default Page;
