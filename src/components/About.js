import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "./About.css";
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

// TODO: add github ticker "what ive been up to"
export default function About() {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInLeft"
      animateOnce={true}
      animatePreScroll={false}
      duration={1}
    >
      <div className="about-section" id="about">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOnce={true}
          animatePreScroll={false}
          duration={1}
          delay={3}
        >
          <h2 className="about-title">ABOUT</h2>
          <div className="divider"></div>
        </AnimationOnScroll>

        <p className="about-me-blurb">
          Kia ora! I'm Taiao, a software developer at Flick Electric. When I'm
          not on the tools, you'll find me paddling (Waka Ama), at the gym, and
          listening to (or making) music.
        </p>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOnce={true}
          animatePreScroll={false}
          duration={1}
          delay={2}
        >
          <div className="tech-stack">
            <img
              className="dev-icon html5"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg"
              alt="rails"
            />
            <img
              className="dev-icon html5"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-plain.svg"
              alt="rails"
            />
            <img
              className="dev-icon html5"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
              alt="html5"
            />
            <img
              className="dev-icon css3"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
              alt="css3"
            />
            <img
              className="dev-icon js"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              alt="js"
            />
          </div>
        </AnimationOnScroll>
      </div>
    </AnimationOnScroll>
  );
}
