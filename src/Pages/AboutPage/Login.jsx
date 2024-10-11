import { useForm } from "react-hook-form";
import useAuth from "../../../public/hooks/useAuth";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {login} = useAuth()
  console.log(login);

  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic here
  };

  return (
    <div className="flex items-center justify-center my-28">
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
          {...register("Email", { required: true})}
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

    </div>
  );
}

export default Login;
