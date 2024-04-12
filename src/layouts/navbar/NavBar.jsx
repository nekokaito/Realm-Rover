import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const NavBar = () => {

   const {user, logOut} = useContext(AuthContext);

   const handleLogOut = () => {
    logOut()
    .then()
    .catch()
   }
   
    const navLinks = <div className="md:flex gap-3">
             
             <li><NavLink to="/">Home</NavLink></li>
             <li><NavLink to="/update">Update Profile</NavLink></li>
             

        </div>
    
    return (
        <nav>
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            navLinks
        }
      </ul>
    </div>
    <Link> <img className="w-52" src="logo.png" alt=""/></Link>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      !user ? <Link to="/login"><button className="btn">Login</button></Link> : (
        <div className="flex gap-2">
   <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <Link to="/login"><button onClick={handleLogOut} className="btn">Logout</button></Link> 
   </div>

      )
    }
   
   
  </div>
</div>
        </nav>
    );
};

export default NavBar;