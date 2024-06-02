import dynamic from "next/dynamic";

const RegForm = dynamic(() => import("./Form"), {
    ssr:false
});

const Register = () => {
    return (
        <section>
            <RegForm/>
        </section>
    )
}

export default Register;