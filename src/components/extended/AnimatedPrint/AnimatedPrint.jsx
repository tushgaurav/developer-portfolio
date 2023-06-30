import "./AnimatedPrint.css";

function randomEmoji() {
  const emojis = [
    "👋",
    "🖐️",
    "✋",
    "🤚",
    "🙋",
    "👋🏼",
    "👋🏽",
    "👋🏾",
    "👋🏿",
    "🤙",
    "👐",
    "👏",
    "🤝",
    "🙌",
    "🤲",
    "👍",
    "👎",
    "👊",
    "✊",
    "✌️",
    "🤟",
    "🤗",
    "🥳",
    "😊",
    "😃",
    "😄",
    "😀",
    "😁",
    "😆",
    "😎",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😋",
    "😌",
    "😍",
    "🥰",
    "😘",
    "😗",
    "😚",
    "😙",
    "😛",
    "😜",
    "🤪",
    "😝",
    "🤑",
    "🤠",
    "😺",
    "😸",
    "😹",
    "😻",
    "😼",
    "🙀",
    "😿",
    "😾",
    "👶",
    "👦",
    "👧",
    "🧒",
    "👩",
    "🧑",
    "👨",
    "👵",
    "🧓",
    "👴",
  ];

  return emojis[Math.floor(Math.random() * emojis.length)];
}

export default function AnimatedPrint() {
  return (
    <main className="container-text">
      <p className="animation-title">Hello{randomEmoji()}, I'm a</p>
      <section className="animation">
        <div className="first">
          <div>Web Developer 🌍</div>
        </div>
        <div className="second">
          <div>DevOps Engineer 💿</div>
        </div>
        <div className="third">
          <div>Systems Engineer 🖥️</div>
        </div>
      </section>
    </main>
  );
}
