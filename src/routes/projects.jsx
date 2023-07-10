import "./projects.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectShowcase from "../components/extended/ProjectShowcase/ProjectShowcase";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Soo Social | MERN Stack Project",
      description:
        "Developed a comprehensive social media website using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented features such as user authentication, product listings, shopping cart functionality, and secure payment processing.",
      image_link:
        "https://prokits.s3.ap-south-1.amazonaws.com/aniket.us/ProjectsImages/social.jpeg",
      project_link: "https://github.com/aniketaman17/Soo-Social-MERN-Stack",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    },
    {
      id: 2,
      title: "MeloTunes | Music Player Application",
      description:
        "Built a music player application using React.js and Node.js. Implemented features such as song search, playlist creation, and real-time lyrics display to provide a seamless music listening experience. ",
      image_link:
        "https://prokits.s3.ap-south-1.amazonaws.com/aniket.us/ProjectsImages/music.jpeg",
      project_link: "https://music-player-aniket.netlify.app/",
      technologies: ["JavaScript", "HTML", "CSS"],
    },
    {
      id: 3,
      title: "EduFord University | University Website",
      description:
        "Built a university website using HTML, CSS, and JavaScript. Implemented features such as course listings, faculty information, and student testimonials to provide a comprehensive overview of the university.",
      image_link:
        "https://prokits.s3.ap-south-1.amazonaws.com/aniket.us/ProjectsImages/eduford.jpeg",
      project_link: "https://university-website-aniket.netlify.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 4,
      title: "The Sparks Foundation | Internship Project",
      description:
        "Build a website that takes donations for the COVID-19 relief fund. Implemented features such as payment processing, donation tracking, and donor information storage to provide a seamless donation experience. ",
      image_link:
        "https://prokits.s3.ap-south-1.amazonaws.com/aniket.us/ProjectsImages/sparks_foundation.jpeg",
      project_link: "https://payment-gateway-aniket.netlify.app/",
      technologies: ["React Native", "JavaScript"],
    },
    {
      id: 5,
      title: "puzzleVerse | puzzleVerse Website",
      description:
        "Developed a website that allows users to play a variety of puzzles. Implemented features such as user authentication, puzzle selection, and real-time scoring to provide a seamless puzzle-solving experience. ",
      image_link:
        "https://prokits.s3.ap-south-1.amazonaws.com/aniket.us/ProjectsImages/puzzle_verse.jpeg",
      project_link: "https://puzzle-verse.netlify.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
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
      <Header />
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
