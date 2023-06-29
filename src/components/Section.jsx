import "./Section.css";

export default function Section({ title, text }) {
  return (
    <section>
      <h3 className="section-title">{title}</h3>
      <p className="section-text">{text}</p>
    </section>
  );
}
