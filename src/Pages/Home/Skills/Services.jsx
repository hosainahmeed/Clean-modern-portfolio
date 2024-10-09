import { FaCode, FaMobile, FaDesktop, FaDatabase } from 'react-icons/fa';

function Services() {
  const servicesList = [
    { icon: <FaCode />, title: 'Web Development', description: 'Custom websites and web applications tailored to your needs.' },
    { icon: <FaMobile />, title: 'Responsive Design', description: 'Mobile-friendly layouts that work on all devices.' },
    { icon: <FaDesktop />, title: 'Frontend Development', description: 'Creating intuitive and engaging user interfaces.' },
    { icon: <FaDatabase />, title: 'Backend Development', description: 'Robust server-side solutions and API integrations.' },
  ];

  return (
    <section className="services-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-blue-500">{service.icon}</div>
              <h3 className="text-xl text-secondary font-semibold mb-2">{service.title}</h3>
              <p className="text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;