import { Link, NavLink } from "react-router-dom";
import logo from '../../../src/assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import DarkMode from "../../DarkMode/DarkMode";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {


  const {user,userLogOut} = useContext(AuthContext)

    const navLinks = <>
    <li><NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold underline" : ""
  }
>
  Home
</NavLink></li>
<li><NavLink
  to="/addProduct"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold underline" : ""
  }
>
  Add Product
</NavLink></li>
<li><NavLink
  to="/myCart"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold underline" : ""
  }
>
  My Cart
</NavLink></li>
    </>

    const handleLogOut=()=>{
      userLogOut()
      .then(()=>{
        toast.success("user logged out successfully.")
      })
    }

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
        {
            navLinks
        }
        
      </ul>
    </div>
   <Link to='/'> <img className=" h-[50px]" src={logo} alt="logo" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
     {navLinks}
     
    </ul>
  </div>
  <div className="navbar-end">

  {
    user ? 
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
        <li className="text-center">{user?.displayName}</li>
        <li><button onClick={handleLogOut} className="btn btn-sm">Logout</button></li>
      </ul>
    </div> 
    :
    <Link to='/login' className="btn btn-sm">Login</Link>
  }
 

    <DarkMode />
  </div>
  <Toaster />
</div>
    );
};

export default Navbar;


