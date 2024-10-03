// src/components/Navbar.jsx
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-0">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <Link to="/" aria-label="Home">
          {" "}
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </Link>
      </div>

      <div className="m-8 flex items-center justify-center gap-6 text-lg">
        <Link to="/" className="hover:text-gray-500">
          Home
        </Link>
        <Link to="/Education" className="hover:text-gray-500">
          Education
        </Link>
        <Link to="/Projects" className="hover:text-gray-500">
          Projects
        </Link>
        <Link to="/Technologies" className="hover:text-gray-500">
          Technologies
        </Link>
        <Link to="/Experience" className="hover:text-gray-500">
          Experience
        </Link>
        <Link to="/Contact" className="hover:text-gray-500">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
