// src/components/ui/Button.jsx

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const baseStyle =
    "px-4 py-2 rounded-xl font-semibold transition duration-200";

  const variants = {
    primary: "bg-[#0B1F3A] text-white hover:bg-[#E7F2F8] hover:text-[#0B1F3A] hover:border-1 hover:border-[#0B1F3A]   hover:shadow-md hover:shadow-black",
    secondary:
      "bg-gray-100 text-[#0B1F3A] border border-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white hover:shadow-md hover:shadow-black",
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
