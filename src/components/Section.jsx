import "./Section.css"

export default function Section({title, text}) {
    return (
        <section>
            <h1 className="section-title">{title}</h1>
            <p className="section-text">{text}</p>
        </section>
    )
}