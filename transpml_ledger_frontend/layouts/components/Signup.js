import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  const resetForm = () => {
    setEmail("");
    setPasswd("");
  };
  const putPasswd = (event) => {
    setPasswd(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, passwd);
    resetForm();
  };

  return (
    <>
      <div class="mt-4 flex items-center justify-center">
        <div>
          <h4 className="login-title">Signup</h4>
          <form action="#" className="py-6" onSubmit={handleSubmit}>
            <fieldset className="relative">
              <input
                className="newsletter-input form-input h-12 w-full rounded-3xl border-none bg-theme-light px-5 py-3 pr-12 text-dark placeholder:text-xs dark:bg-darkmode-theme-dark"
                type="text"
                placeholder="Enter email-id"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </fieldset>
            <fieldset className="my-1">
              <input
                className="newsletter-input form-input h-12 w-full rounded-3xl border-none bg-theme-light px-5 py-3 pr-12 text-dark placeholder:text-xs dark:bg-darkmode-theme-dark"
                type="password"
                placeholder="Set Password"
                onChange={putPasswd}
                value={passwd}
              />
            </fieldset>
            <button
              className="d-block  btn btn-primary mt-4 w-full"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
