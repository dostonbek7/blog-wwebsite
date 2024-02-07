import { NavLink } from "react-router-dom";
import {
  header,
  navbar,
  link,
  logo,
  navLink,
  loginBtn,
  menu,
  menuBtn
} from "./Navbar.module.css";
import { RiMenu3Fill } from "react-icons/ri";

function Navbar() {
  return (
    <header className={header}>
      <div className="navbar container">
        <NavLink className={logo} to="/">
          Finsweet
        </NavLink>
        <div className={navbar}>
          <nav className={navLink}>
            <NavLink className={link} to="/">
              Home
            </NavLink>
            <NavLink className={link} to="blog">
              Blog
            </NavLink>
            <NavLink className={link} to="about">
              About Us
            </NavLink>
            <NavLink className={link} to="register">
              Register
            </NavLink>
          </nav>
          <div className={menuBtn}>
            <button className={loginBtn}>Login</button>
            <RiMenu3Fill className={menu} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
