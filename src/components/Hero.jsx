import { home, hero, text, name, homeBtn } from "./Hero.module.css";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className={home}>
      <div className="container">
        <div className={hero}>
          <h5 className={text}>Posted on startup</h5>
          <h1>
            Step-by-step guide to choosing <br /> great font pairs
          </h1>
          <h5>
            By <span className={name}>James West</span> | May 23, 2022
          </h5>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident.
          </p>
          <button className={homeBtn}>
            Read more <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
