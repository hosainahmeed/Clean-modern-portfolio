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
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    toast.error("unfortunately cant send the message right now please email me!");
    reset();
    console.log(data);
  };

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
      <div className="bg-primary border-secondary shadow-lg card mx-2 p-4 border-2  md:p-[100px] mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-black w-full md:w-2/4">
          <h1 className="text-2xl md:text-4xl my-2">Contact Me</h1>
          <p className="my-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi.
          </p>
          <ContactInfo
            icon={<FaPhoneAlt size={18} color="#222" />}
            text="+88 01795 87 48 29"
          />
          <div className="h-[2px] my-2 bg-[#F7A582] block md:hidden"></div>
          <ContactInfo
            icon={<CiLocationOn size={18} color="#222" />}
            text="Daulatpur, Kushtia, Bangladesh"
          />
          <ContactInfo
            icon={<SiGmail size={18} color="#222" />}
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
            className="w-full resize-none text-white px-2 py-2 col-span-2 rounded-xl h-28 bg-secondary border-2 border-primary"
            {...register("massage", { required: true })}
          ></textarea>
          {errors.massage?.type === "required" && (
            <span className="text-red-600 animate-pulse">
              Please provide a message
            </span>
          )}
          <input
            className="col-span-2 btn bg-[#222] text-white hover:bg-[#dadada] hover:text-black border-none"
            type="submit"
          />
        </form>
      </div>
      <div className="my-28 px-2">
        <div>
          <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight text-center">
            Social Contact and Information
          </h1>
          <h3 className="text-xl mt-4 text-center">
            For more information you can visit...
          </h3>

          <Box sx={{ flexGrow: 1, marginTop: "64px" }}>
            <Grid container spacing={2}>
              {/* Facebook */}
              <Grid item xs={12} sm={6} md={8} className="shadow-inner">
                <Item className="h-28 flex items-center justify-center hover:shadow-2xl gap-3">
                  <FaFacebook className="text-5xl"></FaFacebook>
                  <h1 className="text-2xl md:text-5xl font-semibold">
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
                  <h1 className="text-2xl md:text-5xl font-semibold">
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
                  <h1 className="text-2xl md:text-5xl font-semibold">
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
                  <h1 className="text-2xl md:text-5xl font-semibold">
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
    <h1 className="text-base md:text-xl ml-4">{text}</h1>
  </div>
);

const InputField = ({ type, placeholder, register, error }) => (
  <label className="form-control w-full max-w-xl">
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered w-full max-w-xs bg-secondary border-2 border-primary "
      {...register}
    />
    {error && <ErrorMessage message={`${placeholder} is required`} />}
  </label>
);

const ErrorMessage = ({ message }) => (
  <span className="text-red-600 animate-pulse">{message}</span>
);

export default Contact;
