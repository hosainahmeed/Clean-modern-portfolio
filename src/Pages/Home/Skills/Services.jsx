import { FaCode, FaMobile, FaDesktop, FaDatabase } from 'react-icons/fa';
import ServiceSection from './ServiceSection';

function Services() {
  const servicesList = [
    { icon: <FaCode />, title: 'Web Development', description: 'Custom websites and web applications tailored to your needs.' },
    { icon: <FaMobile />, title: 'Responsive Design', description: 'Mobile-friendly layouts that work on all devices.' },
    { icon: <FaDesktop />, title: 'Frontend Development', description: 'Creating intuitive and engaging user interfaces.' },
    { icon: <FaDatabase />, title: 'Backend Development', description: 'Robust server-side solutions and API integrations.' },
  ];

  return (
    <section className="services-section ">
      <div className="container mx-auto px-4">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight text-center py-4">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {servicesList.map((service, index) => (
            <div key={index} className="p-6 rounded-lg shadow-md text-center border-2 border-secondary">
              <div className="text-4xl mb-4 text-blue-500">{service.icon}</div>
              <h3 className="text-xl text-secondary font-semibold mb-2">{service.title}</h3>
              <p className="text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <ServiceSection></ServiceSection>
    </section>
  );
}

export default Services;