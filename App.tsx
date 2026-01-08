
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DoctorProfile from './components/DoctorProfile';
import AppointmentModal from './components/AppointmentModal';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onBookClick={toggleModal} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero onBookClick={toggleModal} />
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-teal-700 mb-6">Welcome to Smile Care</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Smile Care Dental Clinic and Implant Centre is committed to providing high-quality dental care in a comfortable and friendly environment. Located in the heart of Guwahati, we use modern technology and evidence-based techniques to ensure your smile remains healthy and beautiful.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                  <h3 className="font-semibold text-teal-800 mb-2">Our Mission</h3>
                  <p className="text-sm text-slate-600">To provide personalized dental solutions with the highest standard of hygiene and clinical excellence.</p>
                </div>
                <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                  <h3 className="font-semibold text-teal-800 mb-2">Why Choose Us?</h3>
                  <p className="text-sm text-slate-600">Experienced specialists, modern diagnostics, and a patient-centric approach to ensure painless treatments.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-slate-50">
          <Services />
        </section>

        <section id="doctor" className="py-20 bg-white">
          <DoctorProfile />
        </section>
      </main>

      <Footer />

      {isModalOpen && <AppointmentModal onClose={toggleModal} />}
    </div>
  );
};

export default App;
