import { Widget } from "@typeform/embed-react";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
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
    </>
  );
}
