import { useForm } from "react-hook-form";
import useAuth from "../../../public/hooks/useAuth";
import GoogleIcon from "@mui/icons-material/Google";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();
  const navigate = useNavigate();

  const { loginWithGoogle, loading } = useAuth();
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }

  const onSubmit = (data) => {
    // login(data)
    //   .then((result) => {
    //     if (result && result.email) {
    //       const allowedEmails = "skyfal430@gmail.com";
    //       if (!allowedEmails.includes(result.email)) {
    //         Swal.fire({
    //           icon: "error",
    //           title: "Access Denied",
    //           text: "You do not have permission to access this area.",
    //         });
    //         return;
    //       }
    //       Swal.fire({
    //         icon: "success",
    //         title: "Welcome Sir, welcome to your World",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //       navigate("/admin");
    //     } else {
    //       Swal.fire({
    //         icon: "error",
    //         title: "Login Failed",
    //         text: "Invalid login attempt.",
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Login Failed",
    //       text: error.message,
    //     });
    //   });
    // console.log(data);
    // reset();
    console.log(data);
  };

  const loginWithGoogleHandle = () => {
    loginWithGoogle()
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        console.log(result);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
        console.error(error);
      });
  };

  return (
    <>
      <div className="flex flex-col gap-8 items-center justify-center my-28">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-control w-full max-w-xs"
        >
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            placeholder="Email"
            {...register("Email", { required: true })}
          />
          {errors.Email && errors.Email.type === "required" && (
            <p className="text-red-500">This is required</p>
          )}

          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="password"
            placeholder="Password"
            name="Password"
            autoComplete="current-password"
            {...register("Password", {
              required: true,
              max: 25,
              min: 4,
            })}
          />
          {errors.Password && errors.Password.type === "required" && (
            <p className="text-red-500">This is required</p>
          )}
          <input className="btn btn-neutral mt-6" type="submit" value="Login" />
        </form>
        <div onClick={loginWithGoogleHandle} className="cursor-pointer">
          <GoogleIcon></GoogleIcon>
        </div>
      </div>
    </>
  );
}

export default Login;
