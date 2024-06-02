"use client";
import React, { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

type FormData = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const token = localStorage.getItem("token");
  const { toast } = useToast();
  const [formValue, setFormValue] = useState<FormData>({
    username: "",
    password: "",
  });
  const [isPageLoading, setIsPageLoading] = useState<Boolean>(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (token) {
      router.push("/");
    } else {
      setIsPageLoading(false);
    }
  }, [token]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValue((prevFormVal) => ({
      ...prevFormVal,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const { username, password } = formValue;

    if (!username || !password) {
      toast({
        title: "Please fill all fields.",
        style: {
          backgroundColor: "rgb(239, 44, 44)",
          color: "#fff",
        },
      });
      setIsLoading(false);
      return;
    }

    try {
      const {data} = await axios.post("/api/auth/login", formValue);
      const { token } = data; 
      localStorage.setItem("token", token); 
      setIsLoading(false);
      toast({
        title: "🎉Login successful!",
        style: {
          backgroundColor: "#fff",
        },
      });
      router.push("/")
    } catch (error:any) {
      toast({
        title: error.response.data.message ||"Error logging you in. Please retry.",
        style: {
          backgroundColor: "rgb(239, 44, 44)",
          color: "#fff",
        },
      });
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col md:items-center pt-10 gap-6">
      {!isPageLoading && <h1 className="text-2xl font-semibold">🔐Login</h1>}
      {!isPageLoading ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            className="form-input"
            value={formValue.username}
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="form-input"
            value={formValue.password}
            onChange={handleChange}
          />
          <button
            className="bg-zinc-900 text-white px-6 py-2 rounded w-full"
            disabled={isLoading}
          >
            {isLoading ? <i className="bx bx-loader-alt bx-spin"></i> : "Login"}
          </button>
        </form>
      ) : (
        "Loading"
      )}
    </section>
  );
};

export default LoginForm;
