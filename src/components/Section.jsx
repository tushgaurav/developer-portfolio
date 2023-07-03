import "./Section.css";

export default function Section({ title, text, className }) {
  return (
    <section className={className}>
      <h3 className="section-title">{title}</h3>
      <p className="section-text">{text}</p>
    </section>
  );
}
