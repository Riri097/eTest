// src/components/ui/Button.jsx

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
    primary: "bg-gradient-to-r border-2 from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl",
    secondary: "bg-transparent text-white border-2 border-white hover:bg-pink-100 hover:text-[#0B1F3A] hover:shadow-md hover:shadow-black",
    other: "bg-transparent text-[#0B1F3A] border-2 border-[#0B1F3A] hover:bg-white hover:text-[#0B1F3A] hover:shadow-md hover:shadow-black"
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
