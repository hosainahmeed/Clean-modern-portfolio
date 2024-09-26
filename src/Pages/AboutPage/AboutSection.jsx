import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/BannerImages/BannerScrollImage/q.jpg";
import img2 from "../../assets/BannerImages/BannerScrollImage/w.jpg";
import img3 from "../../assets/BannerImages/BannerScrollImage/q.jpg";
import img4 from "../../assets/BannerImages/BannerScrollImage/w.jpg";

// Dynamic content array
const textContent = [
  {
    title: "Who I am.?",
    description:
      "My name is Caleb Raney and I’m a human being. I mean let’s be real, can you really sum up who someone is with a couple of fun facts?",
    image: img1,
  },
  {
    title: "What I do.?",
    description:
      "I am a full time freelance designer. While I specialize in creating brand identities and websites I love variety, and love taking on unique creative challenges. If you want to make a difference or re-imagine the world we live in I’d love to be a part of it.",
    image: img2,
  },
  {
    title: "Where I’m from.?",
    description:
      "I believe design makes a real tangible impact on the world and plays a huge (albeit, sometimes subtle) role in how people understand issues, people, and products. I love design because I think it makes the world a more beautiful and connected place.",
    image: img3,
  },
  {
    title: "Why development?",
    description:
      "Right now. Actually... a more accurate thing to say is between 1 & 2 business days, I usually reply to emails really quickly (except on weekends when I avoid them like the plague). So use the contact form below and lets get in touch!",
    image: img4,
  },
];

function AboutSection() {
  const [activeImage, setActiveImage] = useState(textContent[0].image); 
  const titleRefs = useRef([]); 
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            setActiveImage(textContent[index].image);
          }
        });
      },
      { root: null, threshold: 0.5 }
    );

    titleRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });


    return () => {
      titleRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto flex items-start flex-col-reverse md:flex-row justify-between px-4">
        {/* Text Section */}
        
        <div className="md:w-1/2 w-full mt-[20%]  md:px-12">
        <h1 className="text-4xl font-black p-2 border-2 inline-block rounded-full">HM</h1>
          {textContent.map((item, index) => (
            <div
              key={index}
              ref={(el) => (titleRefs.current[index] = el)} 
              data-index={index} 
              className="text-4xl md:text-3xl font-bold leading-tight py-8 md:py-12"
            >
              <h2>{item.title}</h2>
              <p className="text-sm font-normal md:text-base mt-4">{item.description}</p>
              <div className="divider"></div>
            </div>
          ))}
        </div>

        {/* Image Section with Framer Motion */}
        <motion.div
          className="md:w-1/2 md:min-h-[80vh] sticky md:top-48 bg-cover bg-center md:ml-12"
          key={activeImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration:2 }}
        >
          <motion.img
            className="w-full h-full object-cover"
            src={activeImage}
            alt="Dynamic"
            layoutId={activeImage}
          />
        </motion.div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}

export default AboutSection;
