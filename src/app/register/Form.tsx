"use client";
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

type FormData = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  motivation: string;
};

const RegForm = () => {
  const { toast } = useToast();
  const [formValue, setFormValue] = useState<FormData>({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    motivation: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValue((prevFormVal) => ({
      ...prevFormVal,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, password, confirmPassword, motivation } =
      formValue;

    if (!username || !email || !password || !motivation) {
      toast({
        title: "Please fill all fields.",
        style: {
          backgroundColor: "red",
          color: "#fff",
        },
      });

      return;
      }
      
      if (password !== confirmPassword) {
        toast({
          title: "Passwords don't match.",
          style: {
            backgroundColor: "red",
            color: "#fff",
          },
        });
  
        return;
      }
    toast({
      title: "Registration successful!",
      style: {
        backgroundColor: "#fff",
      },
    });
  };

  return (
    <section className="flex flex-col md:items-center pt-10 gap-6">
      <h1 className="text-2xl font-semibold">Create an account</h1>
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
        <button className="bg-zinc-900 text-white px-6 py-2 rounded w-full">
          Create account
        </button>
      </form>
    </section>
  );
};

export default RegForm;
