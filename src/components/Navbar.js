 import logo from "../logo.png"

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo" width={200}/>
    </nav>
  );
}

export default Navbar;
