import bike from "../assets/bike.jpg";
import auto from "../assets/auto.jpg";
import { Element } from "react-scroll";
export default function Service() {
  return (
    <Element name="service">
      <section
        id="service"
        className="flex flex-col py-20 px-5 justify-center bg-prim text-white"
      >
        <div className="md:w-full">
          <div className="flex flex-col px-10 py-5">
            <h1 className=" text-4xl font-bold border-b-4 w-[150px]">
              Services
            </h1>
            <p className="py-3 ">
              Check out our services: We specialize in converting petrol bikes
              and autos into electric vehicles (EVs). Enjoy the benefits of
              eco-friendly, cost-effective transportation with our expert
              conversion solutions. Transform your ride and embrace the future
              of mobility today!
            </p>
          </div>
        </div>
        <div className="md:w-full py-5">
          <div className="flex flex-col md:flex-row justify-center px-10 gap-10">
            <div className="relative">
              <img className="h-[200px] w-[250px]" src={bike} />
              <div className="absolute left-0 right-0 bottom-0 top-0 bg-sec opacity-0 duration-500 hover:opacity-100">
                <p className="text-center px-5 py-20 text-black ">
                  Convert your Petrol gearless bikes into a furnished EV.
                  <br />
                  <br />
                  <a className="btn" herf="#">
                    Check
                  </a>
                </p>
              </div>
            </div>
            <div className="relative">
              <img className="h-[200px] w-[250px]" src={auto} />
              <div className="service-des">
                <p className="text-center px-5 py-14 text-black ">
                  {" "}
                  Instead of New EV or Petrol engine convert your 3 wheeler into
                  a EV.
                  <br />
                  <br />
                  <a className="btn" herf="#">
                    Check
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}
