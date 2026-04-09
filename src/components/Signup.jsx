import { useState } from "react";

export default function SignUp({ show, setShow, registeredUser }) {
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!loginInput.email || !loginInput.password) {
      setError("Please fill all required fields");
      return;
    }

    if (!registeredUser) {
      setError("No account found. Please create an account first.");
      return;
    }

    if (loginInput.email !== registeredUser) {
      setError("Email not found. Please create an account first.");
      return;
    }

    setError("");
    setShow(3);
  };

  return (
    <>
      {show == 2 && (
        <div className="subPages-container">
          <h2 className="page-title">Signin to your</h2>
          <h2 className="page-title">PopX account</h2>
          <p className="page-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div className="input-group">
            <input
              type="email"
              name="email"
              value={loginInput.email}
              onChange={handleInputChange}
              id="email"
              className="input-field"
              placeholder=" "
            />
            <label htmlFor="email" className="input-label">
              Email address*
            </label>
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              value={loginInput.password}
              onChange={handleInputChange}
              id="password"
              className="input-field"
              placeholder=" "
            />
            <label htmlFor="password" className="input-label">
              Password*
            </label>
          </div>
          {error && <p className="error-msg">{error}</p>}
          <button
            className={
              loginInput.email && loginInput.password
                ? "btn-primary"
                : "btn-disabled"
            }
            onClick={handleSubmit}
          >
            Login
          </button>
          <p
            className="text-btn"
            onClick={() => {
              setShow(1);
            }}
          >
            Create new account?
          </p>
        </div>
      )}
    </>
  );
}
