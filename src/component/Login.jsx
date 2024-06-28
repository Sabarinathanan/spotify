import { useState } from "react";
import Signup from "./Signup";
import Welcomepage from "./Welcomepage";

function Loginpage() {
  // pg chg coding
  const [signup, setSignup] = useState(false);
  const [login,setLogin]=useState(false);
  const handleSignup = () => {
    setSignup(true);
  };
  if (signup) {
    return <Signup />;
  }
  const handleLogin=()=>{
    setLogin(true);
  }
  if(login){
    return <Welcomepage/>
  }

  return (
    <header className="login">
      <h1>Log_In</h1>
      <div className="input">
        <div className="email">
          <label htmlFor="">Email or UserName:</label>
          <br />
          <input type="text" />
        </div>
        <div className="password">
          <label htmlFor="">Password:</label>
          <br />
          <input type="password" />
        </div>
        <div className="Remember">
          <p>
            <input type="checkbox" />
            <span>Remember me</span>
          </p>
        </div>
        <div className="btn">
          <button type="submit" onClick={handleLogin}>Log In</button>
        </div>
        <a href="" className="forget">
          {/* link */}
          Forgetten Password?
        </a>
        <hr />
        <p>
          Don't have an account?
          <span>
            <a href="#" onClick={handleSignup}>
              sign up for Spotify
            </a>
            {/* link */}
          </span>
        </p>
      </div>
    </header>
  );
}

export default Loginpage;
