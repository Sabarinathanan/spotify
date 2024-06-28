function Signup() {
  return (
    <header className="sign-up">
      <div className="head">
        <h2>Create Account</h2>
      </div>
      <div className="input">
        <input
          type="email"
          id="emailTxt"
          className="Value"
          placeholder="Mail ID"
          oninput="formValidation()"
        />
        <input
          type="text"
          id="txt"
          className="Value"
          placeholder="Full Name"
          onclick="saveUserdetails()"
        />
        <input
          type="password"
          id="passwordtxt"
          oninput="validatepassword1()"
          placeholder="Password"
        />
      </div>
      <div className="btn">
        <button type="submit">Create</button>
        <p id="paratag">
          I have an account! <a href="#">logIn</a> {/* link */}
        </p>
      </div>
    </header>
  );
}

export default Signup;
