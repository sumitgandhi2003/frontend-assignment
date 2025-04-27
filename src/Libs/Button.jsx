const Button = ({
  text = "",
  className = "",
  disabled = false,
  onClick = () => "",
  icon = null,
  iconPosition = "left",
}) => {
  return (
    <button className={`${className}`} disabled={disabled} onClick={onClick}>
      <span
        className={`flex items-center ransition-all duration-300 justify-center gap-2 ${
          iconPosition === "right" ? "flex-row-reverse" : ""
        }`}
      >
        {icon && <span>{icon}</span>}
        {text}
      </span>
    </button>
  );
};

export default Button;
