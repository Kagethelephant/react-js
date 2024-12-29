// Functional components
import { NavLink } from 'react-router';
// Recource components
import logo from '../assets/images/logoTop.png';
// import { useRef } from "react";

export function Navbar() {
  
  // const activenav = useref<htmlimageelement>(null);

  // function togglenav () {
  //   const myelement = activenav.current;
  //   if (myelement.classlist.contains("hide")) {
  //     myelement.classlist.remove("hide")
  //   }
  //   else {
  //     myelement.classlist.add("hide")
  //   }
  // }

  return (
    <nav> 

      {/* <NavLink to='/' className={"navImage navLeft"}><img  ref={activeNav} src={logo} ></img></NavLink> */}
      <NavLink to='/' className={"navImage navLeft"}><img src={logo} /></NavLink>

      <NavLink to='/About' className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
      <NavLink to='/Schedule' className={({ isActive }) => (isActive ? 'active' : '')}>Schedule</NavLink>
      <NavLink to='/Sandbox' className={({ isActive }) => (isActive ? 'active' : '')}>Sandbox</NavLink>
      {/* <button onClick={toggleNav}>Hide</button> */}
     
    </nav>
  )
}
