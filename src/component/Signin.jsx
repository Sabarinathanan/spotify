import { useState } from "react";
import Phonesign from "./Phonesign";
import Loginpage from "./Login";
import Signup from "./Signup";


function Signin() {
  //signup
  const [signup,setSignup]=useState(false);
  const [phonesignin,setPhonesignin]=useState(false);
  const [loginpage,setLoginpage]=useState(false);
  const handleSignup = () => {
    setSignup(true);
  };
  if (signup) {
    return <Signup />;
  }
  // phonesign 
  const hanldePhonesign=()=>{
    setPhonesignin(true);
  }
  if(phonesignin){
    return <Phonesign/>
  }
  // login 
  const hanldeLogin=()=>{
    setLoginpage(true);
  }
  if(loginpage){
    return <Loginpage/>
  }
    return ( 
        <header className="sign-in">
  <div>
    {/* logo */}
    <div className="logo">
      <img src="./img/logo.png" alt="Spotify" width="120px" height="120px" />
    </div>
    {/* content  */}
    <div className="content">
      <h1>
        Million Of Songs. <br />
        Free On Spotify
      </h1>
    </div>
    {/* links */}
    <div className="link">
      <div className="link-login">
        <a href="#" onClick={handleSignup} className="lg-1">
          <span> Sign Up Free</span>
        </a>
        <a href="#" onClick={hanldePhonesign} className="lg-2">
          <i className="fa-solid fa-mobile" style={{ color: "#fcfcfd" }} />
          <span> Continue With Phone Number</span>{/*phonesign */}
        </a>
        <a href="#" className="lg-3">
          <i className="fa-brands fa-google" />
          <span> Continue With Google</span>
        </a>
        <a href="#" className="lg-4">
          <i className="fa-brands fa-facebook" />
          <span> Contine With Facebook</span>
        </a>
        <a href="#" onClick={hanldeLogin} className="lg-5"> {/*login */}
          <span>Log-In</span>
        </a>
      </div>
    </div>
  </div>
</header>

     );
}

export default Signin;