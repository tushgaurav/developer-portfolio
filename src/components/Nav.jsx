import Button from "./Button";

export default function Nav() {
    return (
        <nav>
            <div>
                <Button link={"https://www.google.com"} text={"Contact!"} />
                <Button link={"https://www.google.com"} text={"About"} />
            </div>
        </nav>
    )
}