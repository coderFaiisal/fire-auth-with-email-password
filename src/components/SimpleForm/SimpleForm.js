import React from "react";

const SimpleForm = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  };
  const handleEmailBlur = (e) => {
    console.log(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          onBlur={handleEmailBlur}
          type="email"
          name="email"
          id=""
          placeholder="Your email..."
        />
        <br />
        <input
          onBlur={handlePasswordBlur}
          type="password"
          name="password"
          id=""
          placeholder="Your Password...."
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default SimpleForm;
