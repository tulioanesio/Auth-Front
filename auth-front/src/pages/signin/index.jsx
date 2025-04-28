import { Link } from "react-router-dom";

function Signin() {
  return (
    <div>
      <h1>Sign In</h1>

      <Link to="/">Don't have an account? Register</Link>
    </div>
  );
}

export default Signin;
