import Button from "./Button";
import Hamburger from "./Hamburger";
import "./Nav.css";

import { useState } from "react";

export default function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav>
      {hamburgerOpen && (
        <div className="hamburger-menu">
          <a href={"/"}>Home</a>
          {/* <a href={"/blogs"}>Blogs</a> */}
          <a href={"/projects"}>Projects</a>
          <a href={"/contact"}>Contact</a>
        </div>
      )}
      <div className="btn-container">
        <Button link={"/"} text={"Home"} />
        {/* <Button link={"/blogs"} text={"Blogs"} /> */}
        <Button link={"/projects"} text={"Projects"} />
        <Button link={"/contact"} text={"Contact"} />
      </div>

      <div className="hamburger-container" onClick={toggleHamburger}>
        <Hamburger open={hamburgerOpen} />
      </div>
    </nav>
  );
}
