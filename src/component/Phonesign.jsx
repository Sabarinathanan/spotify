function Phonesign() {
    return ( 
        <header className="phonesign">
  <div>
    <button>
      <i className="fa-solid fa-arrow-right fa-flip-horizontal" />
    </button>
  </div>
  <div>
    <h1>Enter Phone Number</h1>
  </div>
  <div>
    <select name="" id="" className="drop1">
      <option value="">India</option>
      <option value="">Morocco</option>
      <option value="">Thailand</option>
      <option value="">Chile</option>
    </select>
  </div>
  <div>
    <select name="" id="" className="drop2">
      <option value="">+91</option>
      <option value="">+212</option>
      <option value="">+66</option>
      <option value="">+56</option>
    </select>
    <input type="number" placeholder="Phone Number" />
  </div>
  <div>
    <p>
      We'll send you a code SMS to confirm your number. <br /> We may essential
      send you service-based messages
    </p>
  </div>
  <div className="next">
    <a href="#">Next</a>{/* link */}
  </div>
</header>

     );
}

export default Phonesign;