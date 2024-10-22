import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import wonerImage from "../../../../assets/BannerImages/BannerScrollImage/WonerImage.jpg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import useSkillsImage from "../../../../../public/Component/useSkillsImage";
import { getAuth } from "firebase/auth";

function Banner() {
  const controlsRow1 = useAnimation();
  const [allSkillimage] = useSkillsImage();
  useEffect(() => {
    const duration = 20;
    controlsRow1.start({
      x: ["0%", "-100%"],
      transition: { repeat: Infinity, duration, ease: "linear" },
    });
  }, [controlsRow1]);

  const [isAdmin, setIsAdmin] = useState(false); // State to check if the user is an admin
  const [profilePic, setProfilePic] = useState(wonerImage);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    // Assuming user roles are stored in the user's profile, you can check if the user is an admin
    if (user && user.email === "skyfal430@gmail.com") {
      // Replace with real admin check logic
      setIsAdmin(true);
    }
  }, []);

  useEffect(() => {
    const duration = 20;
    controlsRow1.start({
      x: ["0%", "-100%"],
      transition: { repeat: Infinity, duration, ease: "linear" },
    });
  }, [controlsRow1]);

  const handleProfilePicChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const storageRef = ref(storage, `profile-pictures/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setProfilePic(url);
    }
  };

  return (
    <div className="w-full mt-12 bg-black p-6 md:p-12 px-4 rounded-lg gap-4 md:gap-8 grid-cols-1 md:grid-rows-3 max-w-screen-2xl mx-auto grid md:grid-cols-3">
      <div className="bg-[#121214] flex flex-col items-center md:items-start py-5 justify-center gap-4 text-center md:text-start rounded-lg border-[1px] border-primary text-primary col-span-1 md:col-span-2 row-span-2 px-4">
        <p className="text-base md:text-xl">
          Hello There! I’m Hosain, a Front-End Developer
        </p>
        <div className="w-1/2 h-[2px] relative bg-white overflow-hidden">
          <div className="animation absolute top-0 left-0 w-full h-full bg-blue-400"></div>
        </div>
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          I specialize in creating interactive and user-friendly web
          applications.
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-2 mt-4 md:mt-12">
          <button className="btn btn-xl md:btn-xl bg-primary text-secondary">
            <a href="" download>
              Download resume
            </a>
            <ArrowDownwardIcon />
          </button>
          <div className="flex gap-2">
            <div className="p-2 border-2 border-white rounded-lg hover:scale-105 transition-all">
              <a
                href="https://www.linkedin.com/in/hosain~ahmed/"
                target="_blank"
              >
                <FaLinkedin style={{ fontSize: "20px" }} />
              </a>
            </div>
            <div className="p-2 border-2 border-white rounded-lg hover:scale-105 transition-all">
              <a href="https://github.com/hosainahmeed" target="_blank">
                <FaGithub style={{ fontSize: "20px" }} />
              </a>
            </div>
            <div className="p-2 border-2 border-white rounded-lg hover:scale-105 transition-all">
              <a href="https://www.facebook.com/jiku.ahamed.3" target="_blank">
                <FaFacebook style={{ fontSize: "20px" }} />
              </a>
            </div>
            <div>
              <div className="w-[40px] animate-circle">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 82 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.0554 41.3351C41.1664 41.3342 41.2725 41.2894 41.3507 41.2104C41.4289 41.1315 41.4727 41.0247 41.4727 40.9135C41.4732 40.8446 41.46 40.7764 41.4341 40.7127C41.4081 40.649 41.3698 40.591 41.3214 40.5422C41.273 40.4934 41.2154 40.4546 41.152 40.4282C41.0886 40.4017 41.0206 40.3881 40.9519 40.3881C40.7748 40.3881 40.605 40.4586 40.4798 40.5841C40.3546 40.7096 40.2842 40.8799 40.2842 41.0574C40.2842 41.2757 40.3708 41.4851 40.5248 41.6394C40.6788 41.7938 40.8877 41.8805 41.1055 41.8805C41.3768 41.8796 41.6366 41.771 41.8281 41.5785C42.0196 41.3859 42.1271 41.1251 42.1271 40.8532C42.1275 40.6848 42.0948 40.518 42.0307 40.3623C41.9666 40.2066 41.8724 40.0651 41.7536 39.946C41.6347 39.8269 41.4936 39.7326 41.3383 39.6683C41.1829 39.6041 41.0165 39.5712 40.8484 39.5716C40.6383 39.5712 40.4302 39.6124 40.2359 39.6928C40.0417 39.7732 39.8653 39.8912 39.7167 40.0401C39.5681 40.189 39.4503 40.3659 39.3701 40.5606C39.2899 40.7552 39.2488 40.9639 39.2493 41.1745C39.2493 41.707 39.4603 42.2176 39.836 42.5942C40.2116 42.9707 40.7211 43.1822 41.2524 43.1822C41.915 43.1813 42.5502 42.9169 43.0184 42.4469C43.4866 41.977 43.7496 41.34 43.7496 40.6759C43.7496 40.265 43.6689 39.8582 43.512 39.4786C43.3551 39.099 43.1252 38.7541 42.8354 38.4636C42.5455 38.173 42.2014 37.9426 41.8227 37.7854C41.4439 37.6281 41.038 37.5472 40.6281 37.5472C40.1142 37.545 39.6049 37.6445 39.1294 37.8401C38.654 38.0357 38.2218 38.3235 37.8576 38.687C37.4934 39.0504 37.2045 39.4824 37.0073 39.9581C36.8101 40.4338 36.7086 40.9438 36.7086 41.4589C36.7095 42.7561 37.224 43.9999 38.1392 44.9172C39.0544 45.8345 40.2954 46.3502 41.5896 46.3511C43.2073 46.3511 44.7587 45.707 45.9026 44.5605C47.0465 43.4139 47.6891 41.859 47.6891 40.2375C47.6891 38.2106 46.8858 36.2666 45.4557 34.8333C44.0257 33.4 42.0862 32.5948 40.0639 32.5948C37.536 32.5948 35.1116 33.6013 33.3241 35.3929C31.5365 37.1846 30.5323 39.6145 30.5323 42.1482C30.5332 45.315 31.789 48.3518 34.0234 50.5908C36.2579 52.8297 39.2881 54.0875 42.4476 54.0875C46.3975 54.0875 50.1857 52.5148 52.9787 49.7154C55.3355 47.3531 56.8209 44.2807 57.2273 41M81 41C81 63.0914 63.0914 81 41 81M81 41H80.6273M81 41C81 39.9386 80.9587 38.8869 80.8775 37.8463M41 81C18.9086 81 1 63.0914 1 41M41 81V41M1 41C1 18.9086 18.9086 1 41 1M1 41H41M41 1C62.03 1 79.2695 17.2291 80.8775 37.8463M41 1V20.6447M41 41L21 75.641M41 41L75.641 61M41 41L6.35901 21M41 41L6.35901 61M41 41L61 75.641M41 41L21 6.35901M41 41L56.0418 32.3156M41 41L50.4348 24.6585M41 41V20.6447M41 41H57.2273M61 6.35901L50.4348 24.6585M75.641 21L56.0418 32.3156M80.6273 41C80.756 39.9542 80.8396 38.902 80.8775 37.8463M80.6273 41H57.2273M80.6273 41C80.2268 44.2524 79.3897 47.4428 78.1332 50.483C76.306 54.9045 73.6277 58.922 70.2514 62.3061C63.4325 69.1406 54.1842 72.9802 44.5409 72.9802C40.721 72.9802 36.9386 72.226 33.4096 70.7608C29.8806 69.2956 26.6741 67.1479 23.9732 64.4405C21.2723 61.7332 19.13 58.519 17.6685 54.9818C16.207 51.4445 15.455 47.6533 15.4554 43.8247C15.4554 40.762 16.0574 37.7293 17.2268 34.8998C18.3963 32.0703 20.1103 29.4994 22.2712 27.334C24.432 25.1685 26.9973 23.4508 29.8205 22.2791C32.6436 21.1074 35.6695 20.5045 38.7251 20.505C39.4895 20.505 40.2491 20.5521 41 20.6447M41 20.6447C44.455 21.071 47.7254 22.461 50.4348 24.6585M50.4348 24.6585C50.9392 25.0676 51.4242 25.5046 51.8873 25.9687C53.709 27.7943 55.1143 29.9594 56.0418 32.3156M56.0418 32.3156C56.8917 34.4746 57.3404 36.7941 57.3409 39.1601C57.3409 39.7784 57.3026 40.3928 57.2273 41"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center justify-center row-span-3 md:col-span-1">
        <img
          className="w-1/2 md:w-full md:h-full object-cover rounded-lg"
          src={wonerImage}
        />
      </div> */}

      <div className="flex items-center justify-center row-span-3 md:col-span-1 relative">
        <img
          className="w-1/2 md:w-full md:h-full object-cover rounded-lg"
          src={profilePic}
          alt="Profile"
        />
        {isAdmin && (
          <div className="absolute bottom-4 right-4">
            <input
              type="file"
              onChange={handleProfilePicChange} // Handle file change
              className="opacity-0 absolute w-full h-full cursor-pointer"
            />
            <button className="bg-primary p-2 rounded text-white">Edit</button>
          </div>
        )}
      </div>

      <div className="bg-[#121214] rounded-lg border-[1px] border-primary py-4 px-4 text-primary col-span-1 md:col-span-2">
        <div className="relative w-full h-full overflow-hidden">
          {/* First Row (scrolls vertically with skills) */}
          <h1 className="text-xl">Instent see my skills</h1>
          <motion.div
            className="flex items-center justify-start gap-28 h-full w-full"
            animate={controlsRow1}
          >
            {/* {skills.map((skill, index) => (
              <div
                key={index}
                className="text-lg md:text-xl font-semibold text-white text-nowrap hover:text-blue-400 transition-all"
              >
                {skill}
              </div>
            ))} */}
            {allSkillimage?.map((src, index) => (
              <img
                className="w-12 animate-bounce bg-white rounded-lg"
                key={index}
                src={src}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
