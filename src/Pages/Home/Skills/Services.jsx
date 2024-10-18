import { FaCode, FaMobile, FaDesktop, FaDatabase } from "react-icons/fa";
import ServiceSection from "./ServiceSection";
// import { imagin } from "../../../assets/BannerImages/BannerScrollImage/q.jpg";
function Services() {
  const servicesList = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "Custom websites and web applications tailored to your needs.",
      video:
        "https://i.pinimg.com/originals/9e/25/a1/9e25a15f2aae61fb18f7782b65b6baf7.gif",
    },
    {
      icon: <FaMobile />,
      title: "Responsive Design",
      description: "Mobile-friendly layouts that work on all devices.",
      video:
        "https://i.pinimg.com/originals/11/ac/93/11ac93becf9e374b6270ba11c48956e8.gif",
    },
    {
      icon: <FaDesktop />,
      title: "Frontend Development",
      description: "Creating intuitive and engaging user interfaces.",
      video:
        "https://i.pinimg.com/originals/8c/c1/5a/8cc15aae15c0316096eb281f558f4e1b.gif",
    },
    {
      icon: <FaDatabase />,
      title: "Backend Development",
      description: "Robust server-side solutions and API integrations.",
      video:
        "https://i.pinimg.com/originals/e3/f4/31/e3f43118c402a63f1a90cf2f2940174d.gif",
    },
  ];

  return (
    <section className="services-section">
      <div className="container flex flex-col items-center mx-auto px-4">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight text-center py-4">
          My Services
        </h2>
        {/* <img src={imagin} /> */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="relative w-[250px] h-[200px] rounded-lg shadow-md text-center border-2 border-secondary overflow-hidden"
            >
              <img
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src={service.video}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-white hover:opacity-0 transition-opacity duration-300 z-10 flex flex-col justify-center items-center">
                <div className="text-4xl mb-4 text-blue-500">
                  {service.icon}
                </div>
                <h3 className="text-xl text-secondary font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-secondary">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ServiceSection></ServiceSection>
    </section>
  );
}

export default Services;
