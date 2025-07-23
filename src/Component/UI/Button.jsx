const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const baseStyle =
    "px-5 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105";

  const variants = {
    primary: "bg-[#0B1F3A] border-2 border-white text-white hover:bg-white hover:border-[#0B1F3A] hover:text-[#0B1F3A] shadow-lg hover:shadow-xl",
    secondary: "bg-white text-[#0B1F3A] border-2 border-white hover:bg-[#0B1F3A] hover:text-white hover:shadow-md",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
