import "./App.css";
import Section from "./components/Section";
import Nav from "./components/Nav";
import Social from "./components/Social"

import React from "react";
import Footer from "./components/Footer";
import DownloadBtn from "./components/DownloadBtn";
import AnimatedPrint from "./components/extended/AnimatedPrint/AnimatedPrint";



export default function App() {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const vantaRef = React.useRef(null);
  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        VANTA.TOPOLOGY({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

const qanda = [
  {
    question: "What is my professional summary?",
    answer:
      "I am a recent graduate with web development and coding skills. I have a strong problem-solving ability and a passion for innovation. I am committed to staying current in the field and continuously expanding my technical abilities.",
  },
  {
    question: "What is my educational background?",
    answer:
      "I have pursued a Bachelor of Technology in Computer Science and Engineering from Noida Institute of Engineer & Technology in Greater Noida. I graduated in 2024 with an academic scholarship and a GPA of 8.4. Prior to that, I completed my Class XII and Class X from Sunbeam Suncity School in Varanasi, UP, achieving 90.6% and 9.4 CGPA respectively."
  },
  {
    question: "What are my proficiencies?",
    answer:
      "I am proficient in several programming languages, including C++, Java, Python, JavaScript, SQL, HTML, CSS, Node.js, Express.js, React.js, and MongoDB. I also have experience with tools like Git and Adobe Creative Suite, and I am familiar with both Linux and Windows operating systems."
  }
];


  return (
    <div className="background" ref={vantaRef}>
      <div className="container">
      <Nav />
      <div className="hero" >
        <div>
          <h1>Aniket Aman</h1>
          <h2>Web Developer / DevOps</h2>
          
        </div>
        <AnimatedPrint />
      </div>
{/* <Section 
            title={qanda[0].question}
            text={qanda[0].answer}
          /> */}
      {
        qanda.map((question) => {
          return <Section 
            title={question.question}
            text={question.answer}
          />
        })
      }
      
    <DownloadBtn link="https://prokits.s3.ap-south-1.amazonaws.com/aniket.us/Resume-Aniket+Aman.docx" />
    <Social />
    </div>
    <Footer />

    </div>
  );
}
