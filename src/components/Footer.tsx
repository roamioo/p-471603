
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/c9336716-383a-44c6-a6cb-1717fce834b5.png" 
              alt="Elykid Logo" 
              className="h-8 w-8 mr-2" 
            />
            <span className="text-lg font-bold">Elykid</span>
          </div>
          
          <div className="flex space-x-8 text-sm text-gray-500">
            <Link to="/terms" className="hover:text-primary">Terms</Link>
            <Link to="/privacy" className="hover:text-primary">Privacy</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
            <Link to="/about" className="hover:text-primary">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
