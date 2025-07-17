// src/components/ui/Button.jsx
const Button = ({ children, onClick, type = "button", variant = "primary", className = "" }) => {
  const baseStyle = "px-4 py-2 rounded-xl font-semibold transition duration-200";
  
  const variants = {
    primary: "bg-slate-800 text-white hover:bg-slate-900",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-slate-800 text-slate-800 hover:bg-slate-50"
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
