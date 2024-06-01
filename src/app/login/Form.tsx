"use client";
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { toast } = useToast();
  const [formValue, setFormValue] = useState<FormData>({
    email: "",
    password: ""
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
    const { email, password } =
      formValue;

    if (!email || !password ) {
      toast({
        title: "Please fill all fields.",
        style: {
          backgroundColor: "red",
          color: "#fff",
        },
      });

      return;
      }
      
    //   if (password !== confirmPassword) {
    //     toast({
    //       title: "Passwords don't match.",
    //       style: {
    //         backgroundColor: "red",
    //         color: "#fff",
    //       },
    //     });
  
    //     return;
    //   }
    toast({
      title: "Login successful!",
      style: {
        backgroundColor: "#fff",
      },
    });
  };

  return (
    <section className="flex flex-col md:items-center pt-10 gap-6">
      <h1 className="text-2xl font-semibold">🔐Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button className="bg-zinc-900 text-white px-6 py-2 rounded w-full">
          Login
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
