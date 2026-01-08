
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <i className="fas fa-tooth text-slate-900 text-lg"></i>
              </div>
              <span className="font-bold text-xl text-white">Smile Care</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Smile Care Dental Clinic and Implant Centre is your neighborhood destination for comprehensive dental care. We build smiles that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-b border-slate-700 pb-2">Reach Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <i className="fas fa-map-marker-alt text-teal-500 mt-1"></i>
                <span className="text-sm">
                  Zan's Complex, B.K Kakoti Road, South Sarania Chariali, Ulubari, Guwahati, Assam – 781007
                </span>
              </li>
              <li className="flex gap-4">
                <i className="fas fa-phone-alt text-teal-500 mt-1"></i>
                <span className="text-sm">+91 70992 76501</span>
              </li>
              <li className="flex gap-4">
                <i className="fas fa-envelope text-teal-500 mt-1"></i>
                <span className="text-sm">random@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-b border-slate-700 pb-2">Working Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-sm">
                <span>Mon - Sat</span>
                <span className="text-teal-400 font-semibold">10:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between items-center text-sm border-t border-slate-800 pt-3">
                <span>Sunday</span>
                <span className="text-teal-400 font-semibold">9:00 AM - 3:00 PM</span>
              </li>
            </ul>
            <div className="mt-6 bg-teal-500/10 p-4 rounded-xl border border-teal-500/20 text-center">
               <p className="text-xs text-teal-400 font-bold uppercase tracking-widest">Available for Emergencies</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-b border-slate-700 pb-2">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li><a href="#home" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="#doctor" className="hover:text-teal-400 transition-colors">Our Doctor</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs">
          <p>© {new Date().getFullYear()} Smile Care Dental Clinic and Implant Centre. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
