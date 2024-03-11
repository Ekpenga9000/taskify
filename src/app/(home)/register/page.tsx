import AuthenticationComponent from "@/components/AuthenticationComponent";

// Get the user's registration information from the form and send it to the server


const RegistrationPage = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <AuthenticationComponent name="Registration" type="Registration"/>
  </section>
  )
}

export default RegistrationPage