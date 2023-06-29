import "./Projects.css";

const ProjectSlider = () => {
  const projects = [
    {
      id: 1,
      image: "project1.jpg",
      heading: "Project 1",
      description: "Description of Project 1",
      codeLink: "https://github.com/project1",
    },
    {
      id: 2,
      image: "project2.jpg",
      heading: "Project 2",
      description: "Description of Project 2",
      codeLink: "https://github.com/project2",
    },
    // Add more project objects here as needed
  ];

  return (
    <div className="project-slider">
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <img src={project.image} alt={project.heading} />
          <h3>{project.heading}</h3>
          <p>{project.description}</p>
          <a href={project.codeLink}>View Code</a>
        </div>
      ))}
    </div>
  );
};

export default ProjectSlider;
