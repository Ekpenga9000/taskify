"use client";
import React, { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

type FormData = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  motivation: string;
};

const RegForm = () => {
  const router = useRouter();
  const token = localStorage.getItem("token");

  const { toast } = useToast();
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formValue, setFormValue] = useState<FormData>({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    motivation: "",
  });

  useEffect(() => {
    if (token) router.push("/");
    setIsPageLoading(false);
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
    const { username, email, password, confirmPassword, motivation } =
      formValue;

    if (!username || !email || !password || !motivation) {
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

    if (password.length < 5) {
      toast({
        title: "Passwords must be at least 5 characters.",
        style: {
          backgroundColor: "rgb(239, 44, 44)",
          color: "#fff",
        },
      });
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match.",
        style: {
          backgroundColor: "rgb(239, 44, 44)",
          color: "#fff",
        },
      });
      setIsLoading(false);
      return;
    }
    try {
      const { data } = await axios.post("/api/auth/register", formValue);
      const { success, message } = data;

      if (!success) {
        toast({
          title: message,
          style: {
            backgroundColor: "rgb(239, 44, 44)",
            color: "#fff",
          },
        });
        return;
      }
      toast({
        title: "Registration successful! Please login.",
        style: {
          backgroundColor: "#fff",
        },
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error creating account. Please try again.",
        style: {
          backgroundColor: "rgb(239, 44, 44)",
          color: "#fff",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col md:items-center pt-10 gap-6">
      {!isPageLoading && (
        <h1 className="text-2xl font-semibold">Create an account</h1>
      )}
      {!isPageLoading ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="form-input"
            value={formValue.username}
            onChange={handleChange}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            className="form-input"
            value={formValue.email}
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
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="confirmPassword"
            className="form-input"
            value={formValue.confirmPassword}
            onChange={handleChange}
          />
          <textarea
            name="motivation"
            id="motivation"
            placeholder="Write something inspirational"
            className="form-textArea"
            value={formValue.motivation}
            onChange={handleChange}
          ></textarea>
          <button
            className="bg-zinc-900 text-white px-6 py-2 rounded w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <i className="bx bx-loader-alt bx-spin"></i>
            ) : (
              "Create Account"
            )}
          </button>
        </form>
      ) : (
        <i className="bx bx-loader-alt bx-spin text-4xl"></i>
      )}
    </section>
  );
};

export default RegForm;
