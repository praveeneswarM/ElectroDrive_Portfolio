import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Element } from "react-scroll";
export default function Contact() {
  return (
    <Element name="contact">
    <section id="contact" className="flex flex-col bg-sec px-5 py-32">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl border-b-4 border-black mb-5 w-[140px] font-bold">
          Contact
        </h1>
        <p className="pb-5">
          If you want to know more in Detail, Please feel free to contact us.
        </p>
        <p className="py-2">
          <span className="font-bold">Email: </span>electrodriveev@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone: </span>+91 96295 11619
        </p>
        <div className="flex py-10">
          <a
            className="text-black pr-5 hover:text-yellow-500"
            onClick={() =>
              window.open(
                "https://www.instagram.com/electrodrive2024?igsh=YjJrOHlkM3Z2dW0z","_blank"
              )
            }
          >
            <AiOutlineInstagram size={40} />
          </a>
          <a
            className="text-black pr-5 hover:text-yellow-500"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/madhavan-m-b-baskaran-50b736310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ","_blank"
              )
            }
          >
            <AiOutlineLinkedin size={40} />
          </a>
          <a
            className="text-black pr-5 hover:text-yellow-500"
            onClick={() =>
              window.open(
                "https://x.com/electrodriveev?t=keUZ9FCU8jbDjyB6C085CA&s=08 ","_blank"
              )
            }
          >
            <AiOutlineTwitter size={40} />
          </a>
        </div>
      </div>
    </section>
    </Element>
  );
}
