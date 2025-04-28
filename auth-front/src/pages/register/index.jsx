import { Link } from "react-router-dom";

function Register() {
  return (
    <body className="bg-gray-900">
      <div className="bg-gray-100 border mx-auto mt-10 p-8 w-96 h rounded-sm">
        <h1 className="text-center">Register</h1>
        <form action="">
          <input type="email" placeholder="Email:" />
          <input type="password" placeholder="Password:" />
          <button></button>
        </form>
        <Link to="/signin">Already have an account? Sign in</Link>
      </div>
    </body>
  );
}

export default Register;
