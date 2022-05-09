import { SectionPlaceholder } from "./SectionPlaceholder";

import about from "../../../assets/about.svg";

import "./_about.scss";

export function SectionAbout() {
  return (
    <section className="about-container">
      <SectionPlaceholder title="Sobre" description="Quem nós somos?" />

      <div className="about-content">
        <img src={about} alt="sobre" />

        <div className="about-main-content">
          <h1>Titulo</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.
          </p>

          <button>Entrar em contato</button>
        </div>
      </div>
    </section>
  );
}