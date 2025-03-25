import { useState } from "react";
import { Link } from "react-router-dom";

const NavSection = () => {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white bg-[#3F4F44] h-20 font-popins">
      <div className="flex items-center justify-between max-w-6xl mx-auto py-4 px-4">
        {/* Logo */}
        <span className="font-bold text-2xl">
          <Link to="/">Biswash Mainali</Link>
        </span>

        {/* Desktop Menu (Hidden on Mobile) */}
        <ul className="hidden md:flex items-center gap-10 font-medium text-xl">
          <li><Link to="About" className="hover:text-gray-300">About Me</Link></li>
          <li><Link to="Project" className="hover:text-gray-300">Project</Link></li>
          <li><Link to="Skills" className="hover:text-gray-300">Skills</Link></li>
          <li><Link to="ContactPage" className="hover:text-gray-300">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          {isOpen ? "✖" : "☰"} 
        </button>
      </div>

      {/* Mobile Menu (Shown only when open) */}
      {isOpen && (
        <div className=" bg-[#3F4F44] py-4">
          <ul className="flex flex-col items-end px-5 gap-4 text-2xl ">
            <li><Link to="About" className="  focus:text-red-300 active:text-red-400 " onClick={() => setIsOpen(false)}>About Me</Link></li>
            <li><Link to="Project" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>Project</Link></li>
            <li><Link to="Skills" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>Skills</Link></li>
            <li><Link to="ContactPage" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavSection;

