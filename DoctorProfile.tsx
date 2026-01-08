
import React from 'react';

const DoctorProfile: React.FC = () => {
  const qualifications = [
    "BDS (Delhi NCR)",
    "Certified Implantologist (Spain)",
    "Certificate in Laminates (KGMC, Lucknow)",
    "Ex-Resident at Clove Dental (Delhi)"
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-800 mb-2">Meet Our Expert</h2>
          <p className="text-slate-500">Dedicated to your dental health and aesthetic perfection</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-teal-50 flex flex-col md:flex-row">
          {/* Doctor Image Container */}
          <div className="md:w-2/5 bg-teal-600">
            <img 
              src="/doctor.jpg" 
              alt="Dr. Sahil Mallique Barbhuiya" 
              className="w-full h-full object-cover aspect-square md:aspect-auto"
              onError={(e) => {
                 (e.target as HTMLImageElement).src = 'https://drive.google.com/file/d/1xBk0M12dIgmMrgMdspzGK12cX5muPO5E/view?usp=drivesdk';
              }}
            />
          </div>

          {/* Details */}
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-6">
              <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Lead Dentist</span>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">Dr. Sahil Mallique Barbhuiya</h3>
              <p className="text-teal-600 font-medium">Dental Surgeon & Implant Specialist</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-700 text-sm uppercase border-b pb-2 flex items-center gap-2">
                <i className="fas fa-graduation-cap text-teal-500"></i>
                Qualifications & Experience
              </h4>
              <ul className="space-y-3">
                {qualifications.map((qual, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-teal-600 text-[10px]"></i>
                    </div>
                    <span className="text-slate-600 text-sm md:text-base leading-snug">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex gap-4">
               <div className="flex-1 bg-slate-50 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-teal-600">10+</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Years Experience</div>
               </div>
               <div className="flex-1 bg-slate-50 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-teal-600">5k+</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Happy Smiles</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
