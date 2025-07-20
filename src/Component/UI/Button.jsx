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
  primary: "bg-[#344C3D] text-white  hover:bg-[#2c3f33] hover:shadow-md hover:shadow-[#BFCFBB]",
  secondary:
    "bg-gray-100 text-[#344C3D] border border-[#344C3D] hover:bg-[#a6bfa3] hover:shadow-md hover:shadow-[#BFCFBB]",
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
