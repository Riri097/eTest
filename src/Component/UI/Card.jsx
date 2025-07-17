// src/components/ui/Card.jsx
const Card = ({ title, description, children, className = "" }) => {
  return (
    <div className={`bg-white shadow-md rounded-2xl p-4 space-y-2 ${className}`}>
      {title && <h3 className="text-xl font-semibold text-gray-800">{title}</h3>}
      {description && <p className="text-gray-600">{description}</p>}
      {children && <div className="pt-2">{children}</div>}
    </div>
  );
};

export default Card;
