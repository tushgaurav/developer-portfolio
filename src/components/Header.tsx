import "./Header.css"
import React from "react";
import AnimatedPrint from "./extended/AnimatedPrint/AnimatedPrint"
import Nav from "./Nav"

export default function Header() {
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
    
    return (
        <div className="background" ref={vantaRef}>
            <div className="container">
                <Nav />
                <div className="hero">
                    <div >
                        <h1>Aniket Aman</h1>
                        <h2>Web Developer</h2>
                    </div>
                    <AnimatedPrint />
                </div>
            </div>
        </div>
    )
}