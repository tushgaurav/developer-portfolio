import Button from "./Button";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <div className="btn-container">
        <Button link={"/"} text={"Home"} />
        <Button link={"/blogs"} text={"Blogs"} />
        <Button link={"/projects"} text={"Projects"} />
        <Button link={"/contact"} text={"Contact"} />
      </div>
    </nav>
  );
}
