import AuthenticationComponent from "@/components/AuthenticationComponent";
import React from "react";

const LoginPage = () => {

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault(); 
    alert("Done")!
  };
  return (
    <section className="flex justify-center items-center h-screen">
      <AuthenticationComponent name="Login" type="Login"/>
    </section>
  );
};

export default LoginPage;
