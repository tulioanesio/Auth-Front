import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import api from "../../services/api";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await api.post("/signup", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      setMessage("User registred sucessfully");
      setError(false);
    } catch (err) {
      setMessage("Error to register user");
      setError(true);
    }
  }

  return (
    <div className="bg-[#0D1117] min-h-screen flex items-center justify-center">
      <div className="bg-[#161B22] p-8 w-96 rounded-md shadow-lg">
        <h1 className="text-center text-[#E6EDF3] font-bold text-2xl mb-6">
          Sign Up
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
            Submit
          </button>
          <p
            className={`font-bold ${
              error ? " text-red-700" : " text-green-700"
            }`}
          >
            {message}
          </p>
        </form>

        <p className="mt-4 text-sm text-[#8B949E] text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#58A6FF] hover:text-[#1F6FEB] underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
