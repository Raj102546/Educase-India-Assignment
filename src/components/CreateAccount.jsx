import { useState } from "react";
import AccountEdit from "./AccountEdit";

export default function CreateAccount({ show, setShow, setRegisteredUser }) {
  const [input, setInput] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setRegisteredUser(input.email);
  };

  const handleSubmit = () => {
    if (!input.fullName || !input.phone || !input.email) {
      setError("Please fill all required fields");
      return;
    }
    setError("");

    setShow(2);
  };

  return (
    <>
      {show == 1 && (
        <div className="subPages-container">
          <h2 className="page-title">Create Your</h2>
          <h2 className="page-title">PopX account</h2>
          <form>
            <div className="input-group">
              <input
                type="text"
                name="fullName"
                value={input.fullName}
                onChange={handleInputChange}
                id="fullName"
                className="input-field"
                placeholder=" "
              />
              <label htmlFor="fullName" className="input-label">
                Full Name*
              </label>
            </div>
            <div className="input-group">
              <input
                type="number"
                name="phone"
                value={input.phone}
                onChange={handleInputChange}
                id="phone"
                className="input-field"
                placeholder=" "
              />
              <label htmlFor="phone" className="input-label">
                Phone number*
              </label>
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                value={input.email}
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
                value={input.password}
                onChange={handleInputChange}
                id="password"
                className="input-field"
                placeholder=" "
              />
              <label htmlFor="password" className="input-label">
                Password*
              </label>
            </div>
            <div className="input-group">
              <input
                type="text"
                name="company"
                value={input.company}
                onChange={handleInputChange}
                id="company"
                className="input-field"
                placeholder=" "
              />
              <label htmlFor="company" className="input-label">
                Company name
              </label>
            </div>
            <div className="radio-question">Are you an Agency?*</div>
            <div className="radio-group">
              <label htmlFor="yes" className="radio-option">
                <input type="radio" name="agency" id="yes" value="yes" />
                Yes
              </label>
              <label htmlFor="no" className="radio-option">
                <input type="radio" name="agency" id="no" value="no" />
                No
              </label>
            </div>
          </form>
          {error && <p className="error-msg">{error}</p>}
          <button
            className={
              input.fullName && input.password && input.email
                ? "btn-primary"
                : "btn-disabled"
            }
            onClick={handleSubmit}
          >
            Create Account
          </button>
          <p
            className="text-btn"
            onClick={() => {
              setShow(2);
            }}
          >
            Already login?
          </p>
        </div>
      )}

      {show == 3 && <AccountEdit input={input} />}
    </>
  );
}
