import dynamic from "next/dynamic";

const LoginForm = dynamic(() => import("./Form"), {
  ssr: false,
});

const page = () => {
  return (
    <section>
      <LoginForm />
    </section>
  );
};

export default page;
