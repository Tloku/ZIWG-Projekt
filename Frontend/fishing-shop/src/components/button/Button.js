import "../button/button.css";

const Button = ({ backgroundColor }) => {
  return (
    <div
      className="button"
      style={{
        backgroundColor: backgroundColor,
        border: "3px solid #0da719",
        borderRadius: "8px",
      }}
    >
      DO KOSZYKA!
    </div>
  );
};

export default Button;
