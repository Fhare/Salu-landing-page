import { SectionPlaceholder } from "./SectionPlaceholder";

import part1 from "../../../assets/part1.svg";
import part2 from "../../../assets/part2.svg";

import "./_journey.scss";

export function SectionJourney() {
  return (
    <section className="journey-container">
      <SectionPlaceholder title="Sua jornada" description="Como irá ser sua jornada com a gente?" />

      <div className="journey-content">
        <div className="first-step">
          <img src={part1} alt="parte 1" />

          <div className="step-description">
            <label>Passo 1</label>

            <h1>Titulo do <strong>primeiro</strong> passo</h1>
            <p>Descrição do primeiro passo</p>
          </div>
        </div>
        <div className="second-step">
          <div className="step-description">
            <label>Passo 1</label>

            <h1>Titulo do <strong>primeiro</strong> passo</h1>
            <p>Descrição do primeiro passo</p>
          </div>

          <img src={part2} alt="parte 1" />
        </div>
      </div>
    </section>
  );
}