import { useState } from "react";
import CreateAccount from "./CreateAccount";
import SignUp from "./Signup";
export default function HomePage() {
  const [show, setShow] = useState(0);
  const [registeredUser, setRegisteredUser] = useState(null);

  const handleVisiblity = (i) => {
    setShow(i);
  };
  return (
    <>
      {show == 0 && (
        <div className="page-container">
          <h2 className="home-title">Welcome to PopX</h2>
          <p className="home-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit?
          </p>
          <button
            className="btn-primary"
            onClick={() => {
              handleVisiblity(1);
            }}
          >
            Create Account
          </button>
          <button
            className="btn-secondary"
            onClick={() => {
              handleVisiblity(2);
            }}
          >
            Already login?
          </button>
        </div>
      )}

      <CreateAccount
        show={show}
        setShow={setShow}
        setRegisteredUser={setRegisteredUser}
      />
      <SignUp show={show} setShow={setShow} registeredUser={registeredUser} />
    </>
  );
}
