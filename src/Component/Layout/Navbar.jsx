import { Link } from "react-router-dom";
import Button from "../UI/Button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-slate-800 hover:text-slate-900">
            ExamEra
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-slate-800 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-slate-800 font-medium">
              About
            </Link>
            <Link to="/exams" className="text-gray-700 hover:text-slate-800 font-medium">
              Exams
            </Link>
            <Link to="/help" className="text-gray-700 hover:text-slate-800 font-medium">
              Help
            </Link>
            
            {/* Login Button */}
            <Link to="/login">
              <Button variant="primary" className="px-4 py-2">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
