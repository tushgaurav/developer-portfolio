import "./ProjectShowcase.css";

const ProjectShowcase = ({
  title,
  description,
  image_link,
  project_link,
  technologies,
}) => {
  return (
    <div className="project-showcase">
      <h2 className="project-title">{title}</h2>
      <img className="project-image" src={image_link} alt={title} />
      <div className="project-tags">
        {technologies.map((technology, index) => (
          <span key={index} className="tag">
            {technology}
          </span>
        ))}
      </div>
      <p className="project-description">{description}</p>
      <a
        className="project-link"
        href={project_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Project
      </a>
    </div>
  );
};

export default ProjectShowcase;
