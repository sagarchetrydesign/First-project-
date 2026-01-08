
import React, { useState } from 'react';

interface NavbarProps {
  onBookClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctor', href: '#doctor' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
             <i className="fas fa-tooth text-white text-xl"></i>
          </div>
          <span className="font-bold text-xl text-teal-800 hidden sm:block leading-tight">
            Smile Care<br/><span className="text-xs font-normal text-slate-500 uppercase tracking-wider">Dental Clinic</span>
          </span>
          <span className="font-bold text-lg text-teal-800 sm:hidden">Smile Care</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-600 hover:text-teal-600 font-medium transition-colors">
              {link.name}
            </a>
          ))}
          <button 
            onClick={onBookClick}
            className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 active:scale-95"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 py-4 absolute w-full left-0 shadow-xl">
          <div className="flex flex-col space-y-4 px-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-teal-600 font-medium py-2 border-b border-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => { onBookClick(); setIsOpen(false); }}
              className="bg-teal-600 text-white w-full py-3 rounded-xl font-semibold shadow-lg shadow-teal-600/20"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
