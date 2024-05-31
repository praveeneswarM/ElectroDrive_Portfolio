import { Link } from "react-router-dom";
import giff from "../assets/giff.gif";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Element } from "react-scroll";

export default function Hero() {
  return (
    <Element name="home">
      <section
        id="hero"
        className="flex flex-col md:flex-row px-5 py-28 bg-prim justify-center h-screen"
      >
        <div className="md:w-1/2 flex flex-col">
          <h1 className=" text-white text-6xl font-hero-font">
            Hi,
            <br />
            Welcome to{" "}
            <span className="text-yellow-500 font-bold font-hero-font2">
              ElectroDrive
            </span>{" "}
            <p className="text-2xl py-3">"Cherish your vehicle with Us"</p>
          </h1>
          <div className="flex py-10">
            <a
              className="text-white pr-5 hover:text-yellow-500"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/electrodrive2024?igsh=YjJrOHlkM3Z2dW0z",
                  "_blank"
                )
              }
            >
              <AiOutlineInstagram size={40} />
            </a>
            <a
              className="text-white pr-5 hover:text-yellow-500"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/madhavan-m-b-baskaran-50b736310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
                  "_blank"
                )
              }
            >
              <AiOutlineLinkedin size={40} />
            </a>
            <a
              className="text-white pr-5 hover:text-yellow-500"
              onClick={() =>
                window.open(
                  "https://x.com/electrodriveev?t=keUZ9FCU8jbDjyB6C085CA&s=08 ",
                  "_blank"
                )
              }
            >
              <AiOutlineTwitter size={40} />
            </a>
          </div>
        </div>

        <img className="md:w-1/3 top-10 bottom-24 size-3/4" src={giff}></img>
      </section>
    </Element>
  );
}
