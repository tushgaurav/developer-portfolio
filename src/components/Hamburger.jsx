import "./Hamburger.css";

export default function Hamburger({ open }) {
  return (
    <>
      <div className="hamburger">
        <div className="burger burger1"></div>
        <div className="burger burger2"></div>
        <div className="burger burger3"></div>
      </div>

      <style jsx>{`
        .burger1 {
          transform: ${open ? "rotate(45deg)" : "rotate(0)"};
        }

        .burger2 {
          transform: ${open ? "translateX(100%)" : "translateX(0)"};
          opacity: ${open ? "0" : "1"};
        }

        .burger3 {
          transform: ${open ? "rotate(-45deg)" : "rotate(0)"};
        }
      `}</style>
    </>
  );
}
