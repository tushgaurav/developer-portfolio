import Button from "./Button";
import "./Nav.css"

export default function Nav() {
    return (
        <nav>
            <div className="btn-container">
                <Button link={"https://www.google.com"} text={"Contact!"} />
                <Button link={"https://www.google.com"} text={"About"} />
            </div>
        </nav>
    )
}