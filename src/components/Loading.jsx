import { Oval } from "react-loader-spinner";
import "./Loading.css";

const LINES = [
  "I may not be a superhero, but I can definitely save your website from a design disaster.",
  "I'm not just a frontend developer and graphic designer, I'm also a professional procrastinator and coffee drinker.",
  "I'm not saying I'm the best designer in the world, but I'm definitely in the top 10,000.",
  "I may not have all the answers, but I do have access to Google and a pretty decent sense of humor.",
  "I didn't choose the designer life, the designer life chose me. And I'm definitely not complaining.",
  "I may not be the next Picasso, but I can definitely make your website look like a masterpiece.",
  "I'm not saying I'm a design wizard, but I do know my way around Photoshop and a bit of HTML magic.",
  "I didn't choose the designer life, I was chosen by the great design gods above. Or maybe it was just my love for pixel-perfect layouts and clean code.",
  "I may not be a superhero, but I do have superhuman powers when it comes to fixing broken websites and turning them into user-friendly masterpieces.",
  "I'm not saying I'm a design genius, but I am pretty darn good at making websites look good and function even better.",
];

function getRandomLine() {
  return LINES[Math.floor(Math.random() * LINES.length)];
}

export default function Loading() {
  return (
    <div className="loading">
      <div>
        <Oval
          height={90}
          width={90}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={5}
          strokeWidthSecondary={6}
        />
        <h1>{getRandomLine()}</h1>
      </div>
    </div>
  );
}
