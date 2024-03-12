"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthenticationComponentProps } from "@/interfaces/interfaces";
import Link from "next/link";
import { UserRegistration, RegistrationFeeback } from "@/interfaces/interfaces";
import { registerUser } from "@/app/actions/registration";
import { loginUser } from "@/app/actions/login";

const AuthenticationComponent = ({
  name,
  type,
}: AuthenticationComponentProps) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, password, cpassword } = form;
    const clearForm = { name: "", email: "", password: "", cpassword: "" };

    switch (type) {
      case "Registration":
        if (!name || !email || !password || !cpassword) {
          setError("Please fill in all fields");
          return;
        }

        if (password !== cpassword) {
          setError("Passwords do not match");
          return;
        }

        if (password.length < 6) {
          setError("Password must be at least 6 characters long");
          return;
        }
        
        const useDetails: UserRegistration = {
          name,
          email,
          password,
          cpassword,
        };

        const result = await registerUser(useDetails);

        if (result.error) {
          setError(result.error);
          return;
        } else {
          // Call the server function to register the user
          setForm(clearForm);
          setError("");
          setSuccess(result.success || ""); // Provide a default value for result.success
        }

        break;

      default:
        if (!email || !password) {
          setError("Please fill in all fields");
          return;
        }

        const loginDetails = {
          email,
          password,
        };
        
        const validateValues = await loginUser(loginDetails);

        if (!validateValues.success) {
          setError("Invalid email or password");
          return;
        }

        setForm(clearForm);
        setError("");
        break;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setSuccess("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="shadow-md rounded-md w-full md:w-1/2 pb-5">
      <h1 className="text-2xl font-bold text-center p-5 border-b border-b-zinc-200">
        🔐 {name}
      </h1>
      <form onSubmit={handleSubmit}>
        {type === "Registration" && (
          <div className="px-5 py-3">
            <label htmlFor="name" className="block text-sm mb-2">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              placeholder="Full Name"
              className="border block w-full p-2 rounded-sm"
              onChange={handleChange}
            />
          </div>
        )}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
        )}
        {success && (
          <div className="text-green-500 text-center bg-green-100 mx-5 py-1 border border-green-300">
            {success}
          </div>
        )}
        {error && (
          <div className="text-red-500 text-center bg-red-100 mx-5 py-1 border border-red-300">
            {error}
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
      <div className="text-center p-5">
        {type === "Registration" ? (
          <Link href="/login">Already have an account? </Link>
        ) : (
          <Link href="/register">Don't have an account?</Link>
        )}
      </div>
    </div>
  );
};

export default AuthenticationComponent;
