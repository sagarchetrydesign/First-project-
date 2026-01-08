
import React from 'react';

const servicesList = [
  { name: 'Teeth Whitening', icon: 'fa-sparkles' },
  { name: 'Check-ups', icon: 'fa-stethoscope' },
  { name: 'Dental Implants', icon: 'fa-tooth' },
  { name: 'Dentures & Bridges', icon: 'fa-teeth-open' },
  { name: 'Emergency Care', icon: 'fa-hospital-user' },
  { name: 'Extractions', icon: 'fa-trash-alt' },
  { name: 'Fillings and Sealants', icon: 'fa-shield-alt' },
  { name: 'Mouth Guards', icon: 'fa-mask' },
  { name: 'Online Dentist Booking', icon: 'fa-laptop-medical' },
  { name: 'Oral Surgery', icon: 'fa-notes-medical' },
  { name: 'Paediatrics', icon: 'fa-child' },
  { name: 'Root Canals', icon: 'fa-bacteria' },
  { name: 'Teeth Cleaning', icon: 'fa-broom' },
  { name: 'Veneers & Crowns', icon: 'fa-gem' },
  { name: 'X-Ray', icon: 'fa-x-ray' },
  { name: 'Braces and Aligners', icon: 'fa-teeth' },
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">Our Comprehensive Services</h2>
        <div className="w-20 h-1.5 bg-teal-500 mx-auto rounded-full"></div>
        <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
          From preventive care to advanced surgical procedures, we provide a wide range of dental treatments tailored to your unique needs.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {servicesList.map((service, index) => (
          <div 
            key={index} 
            className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
              <i className={`fas ${service.icon} text-2xl`}></i>
            </div>
            <h3 className="font-semibold text-slate-800 group-hover:text-teal-700">{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
