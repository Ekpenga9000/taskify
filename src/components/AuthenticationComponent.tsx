"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthenticationComponentProps } from "@/interfaces/interfaces";
const AuthenticationComponent = ({
  name,
  type,
}: AuthenticationComponentProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="shadow-md rounded-md w-full md:w-1/2 pb-5">
      <h1 className="text-2xl font-bold text-center p-5 border-b border-b-zinc-200">
        🔐 {name}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="px-5 py-3">
          <label htmlFor="email" className="block text-sm mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            className="border block w-full p-2 rounded-sm"
          />
        </div>
        <div className="px-5 py-3">
          <label htmlFor="password" className="block text-sm mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="border block w-full p-2 rounded-sm"
          />
        </div>
        {type === "Registration" && (
          <div className="px-5 py-3">
            <label htmlFor="cpassword" className="block text-sm mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              placeholder="Confirm Password"
              className="border block w-full p-2 rounded-sm"
            />
          </div>
        )}
        <div className="px-5 py-2">
          <button className="bg-zinc-900 text-zinc-100 w-full p-2 rounded-sm">
            {type === "Registration" ? "Sign up" : "Login"}
          </button>
        </div>
      </form>
      <div className="md:flex w-full">
        <div className="px-5 py-2 md:w-1/2">
          <button className="text-zinc-900 border border-zinc-300 w-full p-2 rounded-sm flex justify-center items-center gap-2">
            Google <FcGoogle />
          </button>
        </div>
        <div className="px-5 py-2 md:w-1/2">
          <button className="bg-zinc-900 text-zinc-100 w-full p-2 rounded-sm flex justify-center items-center gap-2">
            Github <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationComponent;
