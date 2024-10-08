import { useForm } from "react-hook-form";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { SiGmail } from "react-icons/si";
import { useEffect } from "react";

function Contact() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="bg-[#07332F] card mx-2 p-4 md:p-[100px] mt-28 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white w-full md:w-2/4">
          <h1 className="text-2xl md:text-4xl my-2">Contact Me</h1>
          <p className="my-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi.
          </p>
          <ContactInfo
            icon={<FaPhoneAlt size={18} color="#ffd700" />}
            text="+88 01795 87 48 29"
          />
          <div className="h-[2px] my-2 bg-[#F7A582] block md:hidden"></div>
          <ContactInfo
            icon={<CiLocationOn size={18} color="#ffd700" />}
            text="Daulatpur, Kushtia, Bangladesh"
          />
          <ContactInfo
            icon={<SiGmail  size={18} color="#ffd700" />}
            text="hosainahmed534745@gmail.com"
          />
        </div>

        <form
          className="md:grid flex flex-col md:grid-cols-2 gap-2 text-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            type="text"
            placeholder="Name"
            register={register("Name", { required: true })}
            error={errors.Name}
          />
          <InputField
            type="email"
            placeholder="Email"
            register={register("Email", { required: true })}
            error={errors.Email}
          />
          <textarea
            placeholder="Massage"
            type="text"
            className="w-full resize-none text-white px-2 py-2 col-span-2 rounded-xl h-28 bg-[#133D39]"
            {...register("massage", { required: true })}
          ></textarea>
          {errors.massage?.type === "required" && (
            <span className="text-red-600 animate-pulse">
              Please provide a message
            </span>
          )}
          <input
            className="col-span-2 btn bg-[#F7A582] border-none"
            type="submit"
          />
        </form>
      </div>
      <div className="my-28 px-2">
        <div>
          <h1 className="text-4xl font-black">
            Social Contact and Information
          </h1>
          <h3>For more information you can visit...</h3>

          <Box sx={{ flexGrow: 1, marginTop: "64px" }}>
            <Grid container spacing={2}>
              {/* Facebook */}
              <Grid item xs={12} sm={6} md={8} className="shadow-inner">
                <Item className="h-28 flex items-center justify-center hover:shadow-2xl gap-3">
                  <FaFacebook className="text-5xl"></FaFacebook>
                  <h1 className="text-2xl md:text-5xl font-black">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/jiku.ahamed.3"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </h1>
                </Item>
              </Grid>
              {/* GitHub */}
              <Grid item xs={12} sm={6} md={4} className="shadow-inner">
                <Item className="h-28 flex items-center justify-center hover:shadow-2xl flex-row md:flex-col gap-3">
                  <FaGithub className="text-5xl"></FaGithub>
                  <h1 className="text-2xl md:text-5xl font-black">
                    <a
                      target="_blank"
                      href="https://github.com/hosainahmeed"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </h1>
                </Item>
              </Grid>
              {/* LinkedIn */}
              <Grid item xs={12} sm={6} md={4} className="shadow-inner">
                <Item className="h-28 flex  items-center justify-center hover:shadow-2xl flex-row md:flex-col gap-3">
                  <FaLinkedin className="text-5xl"></FaLinkedin>
                  <h1 className="text-2xl md:text-5xl font-black">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/hosain~ahmed/"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </h1>
                </Item>
              </Grid>
              {/* Instagram */}
              <Grid item xs={12} sm={6} md={8} className="shadow-inner">
                <Item className="h-28 flex items-center justify-center hover:shadow-2xl gap-3">
                  <FaInstagram className="text-5xl"></FaInstagram>
                  <h1 className="text-2xl md:text-5xl font-black">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/hosain_ali009/"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </h1>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center mt-4">
    {icon}
    <h1 className="text-xl ml-4">{text}</h1>
  </div>
);

const InputField = ({ type, placeholder, register, error }) => (
  <label className="form-control w-full max-w-xl">
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered w-full max-w-xs bg-[#133D39] "
      {...register}
    />
    {error && <ErrorMessage message={`${placeholder} is required`} />}
  </label>
);

const ErrorMessage = ({ message }) => (
  <span className="text-red-600 animate-pulse">{message}</span>
);

export default Contact;
