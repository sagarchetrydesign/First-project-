
import React from 'react';

interface AppointmentModalProps {
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="bg-teal-600 p-6 text-white text-center">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-calendar-alt text-3xl"></i>
          </div>
          <h2 className="text-2xl font-bold">Book Appointment</h2>
          <p className="text-teal-100 text-sm mt-1">Take the first step towards a healthy smile</p>
        </div>

        <form 
          name="appointment" 
          method="POST" 
          data-netlify="true" 
          className="p-8 space-y-6"
        >
          {/* Hidden for Netlify */}
          <input type="hidden" name="form-name" value="appointment" />

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
            <div className="relative">
              <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input 
                type="text" 
                name="name"
                required
                placeholder="John Doe"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Contact Number</label>
            <div className="relative">
              <i className="fas fa-phone absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input 
                type="tel" 
                name="contact"
                required
                placeholder="+91 XXXXX XXXXX"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message / Note</label>
            <textarea 
              name="message"
              rows={3}
              placeholder="Tell us your concern or preferred date..."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col gap-3">
            <button 
              type="submit"
              className="w-full bg-teal-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-teal-600/30 hover:bg-teal-700 transition-all active:scale-95"
            >
              Confirm Booking
            </button>
            <button 
              type="button"
              onClick={onClose}
              className="w-full bg-slate-100 text-slate-600 font-bold py-3 rounded-xl hover:bg-slate-200 transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
