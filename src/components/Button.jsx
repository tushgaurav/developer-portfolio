import "./Button.css"

export default function Button({link, text}) {
    return (
        <button>
            <a href={link}>
                {text}
            </a>
        </button>
    )
}