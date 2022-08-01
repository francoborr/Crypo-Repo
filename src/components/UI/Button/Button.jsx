const Button = ({ cta, classColor, onHandleClick, className }) => {
  return (
    <button
      className={`btn ${classColor} ${className}  `}
      onClick={onHandleClick}
    >
      {cta}
    </button>
  );
};

Button.defaultProps = {
  classColor: "btn-primary",
  cta: "Boton",
};

export default Button;
