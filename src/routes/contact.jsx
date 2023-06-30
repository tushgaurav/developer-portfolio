import { Widget } from "@typeform/embed-react";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <Widget
        id="K1xjThmG"
        style={{
          width: "100%",
          height: "800px",
          border: "none",
        }}
        className="my-form"
      />
      <Footer />
    </div>
  );
}
