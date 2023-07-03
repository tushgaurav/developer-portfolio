import "./App.css";
import Section from "./components/Section";

import Social from "./components/Social";

import Header from "./components/Header";
import Footer from "./components/Footer";
import DownloadBtn from "./components/DownloadBtn";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Section
          title="About Me"
          text="
       As a recent graduate with a strong background in web development and coding, I am driven by a passion for innovation and a relentless pursuit of knowledge. My problem-solving skills and dedication to staying current in the ever-evolving world of technology make me a valuable asset to any team. 
       I am a motivated and talented individual with a strong educational background, practical experience, and a range of personal interests. I am excited to bring my skills and passion to a professional setting, where I can contribute to innovative projects and continue expanding my technical abilities.
        "
        />

        <Section
          title="Education"
          text="
          I have pursued a Bachelor of Technology in Computer Science and Engineering from Noida Institute of Engineer & Technology in Greater Noida. I graduated in 2024 with an academic scholarship and a GPA of 8.0. Prior to that, I completed my Class XII and Class X from Sunbeam Suncity School in Varanasi, UP, achieving 90.6% and 9.4 CGPA respectively.
        "
          className="glass"
        />

        <Section
          title="Hobbies"
          text="I possess a diverse set of hobbies. Writing poetry allows me to express my creativity and emotions while exploring different forms of self-expression. Additionally, my love for food inspires me to explore different culinary experiences and experiment with various recipes. Exploring new places and traveling not only satisfies my curiosity but also broadens my horizons and exposes me to different cultures and perspectives."
        />

        <DownloadBtn link="https://prokits.s3.ap-south-1.amazonaws.com/aniket.us/Resume-Aniket+Aman.docx" />
        <Social />
      </div>
      <Footer />
    </>
  );
}
