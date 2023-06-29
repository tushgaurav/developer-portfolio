import "./projects.css";
import Footer from "../components/Footer";
import ProjectShowcase from "../components/extended/ProjectShowcase/ProjectShowcase";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website | Full-Stack Project",
      description:
        "Developed a comprehensive e-commerce website using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented features such as user authentication, product listings, shopping cart functionality, and secure payment processing.",
      image_link:
        "https://attainu.com/blog/wp-content/uploads/2022/04/Screenshot-148-lg.png",
      project_link: "https://example.com/ecommerce-website",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    },
    {
      id: 2,
      title: "Blogging Platform | MEAN Stack Project",
      description:
        "Created a dynamic blogging platform using the MEAN stack (MongoDB, Express.js, Angular, Node.js). Enabled users to create and publish blog posts, comment on posts, and engage in social interactions within the platform.",
      image_link:
        "https://dz7xwpjzpkel8.cloudfront.net/production/31594-user1-1672054691.png",
      project_link: "https://example.com/blogging-platform",
      technologies: ["MongoDB", "Express.js", "Angular", "Node.js"],
    },
    {
      id: 3,
      title: "Personal Portfolio Website | Front-End Project",
      description:
        "Designed and developed a professional and visually appealing personal portfolio website using HTML, CSS, and JavaScript. Showcased projects, skills, and achievements, and provided a platform to highlight personal experiences and aspirations.",
      image_link:
        "https://repository-images.githubusercontent.com/384091706/a1614500-e03f-11eb-986a-30f6f0d4f1cc",
      project_link: "https://example.com/personal-portfolio",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 4,
      title: "Task Management Application | React Native Project",
      description:
        "Built a cross-platform mobile application using React Native for efficient task management and organization. Implemented features such as task creation, assignment, deadlines, reminders, and progress tracking to enhance productivity.",
      image_link: "https://i.morioh.com/201102/5a79ad23.webp",
      project_link: "https://example.com/task-management-app",
      technologies: ["React Native", "JavaScript"],
    },
    {
      id: 5,
      title: "Movie Recommendation System | Machine Learning Project",
      description:
        "Developed a movie recommendation system using Python and machine learning algorithms. Utilized collaborative filtering techniques to analyze user preferences and provide personalized movie recommendations.",
      image_link:
        "https://labelyourdata.com/img/article-illustrations/movie_recommender_system.jpg",
      project_link: "https://example.com/movie-recommendation-system",
      technologies: ["Python", "Machine Learning"],
    },
    {
      id: 6,
      title: "Online Quiz Platform | Full-Stack Project",
      description:
        "Created an online quiz platform using a combination of React.js, Node.js, and MongoDB. Implemented features such as user registration, quiz creation, question randomization, and real-time scoring for a seamless quiz-taking experience.",
      image_link:
        "https://dhtmlx.com/docs/products/dhtmlxOnlineExam/img/head/edit_exam.png",
      project_link: "https://example.com/online-quiz-platform",
      technologies: ["React.js", "Node.js", "MongoDB"],
    },
    // Add more project objects as needed
  ];
  return (
    <>
      <div className="container">
        <div className="projects">
          <div className="title">
            <div className="content">
              <h2>Projects</h2>
              <h2>Projects</h2>
            </div>
            <p className="description">
              There are my projects that I have worked on. I have worked on many
              projects but I am showing you some of them.
            </p>
          </div>

          {projects.map((project) => (
            <ProjectShowcase
              key={project.id}
              title={project.title}
              description={project.description}
              image_link={project.image_link}
              project_link={project.project_link}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
