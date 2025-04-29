import { Link, useNavigate} from "react-router-dom";
import { useRef } from "react";
import api from "../../services/api";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const { data:token } = await api.post("/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      localStorage.setItem("token", token)
      console.log(token)

      navigate("/list-users")

    } catch (err) {
      alert("Senha ou email incorretos!");

    }
  }

  return (
    <div className="bg-[#0D1117] min-h-screen flex items-center justify-center">
      <div className="bg-[#161B22] p-8 w-96 rounded-md shadow-lg">
        <h1 className="text-center text-[#E6EDF3] font-bold text-2xl mb-6">
          Log In
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            className="px-3 py-2 rounded bg-[#0D1117] border border-[#30363D] text-[#E6EDF3] placeholder-[#8B949E] focus:outline-none focus:ring-2 focus:ring-[#58A6FF]"
            required
          />

          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="px-3 py-2 rounded bg-[#0D1117] border border-[#30363D] text-[#E6EDF3] placeholder-[#8B949E] focus:outline-none focus:ring-2 focus:ring-[#58A6FF]"
            required
          />

          <button
            type="submit"
            className="py-2 bg-[#238636] text-white rounded hover:bg-[#2EA043] transition-colors font-semibold"
          >
            Log in
          </button>
        </form>

        <p className="mt-4 text-sm text-[#8B949E] text-center">
          Doesn't have an account?{" "}
          <Link
            to="/"
            className="text-[#58A6FF] hover:text-[#1F6FEB] underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
