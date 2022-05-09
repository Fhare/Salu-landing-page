import { SectionAbout } from "./partials/SectionAbout";
import { SectionJourney } from "./partials/SectionJourney";
import { SectionServices } from "./partials/SectionServices"

import "./main.scss";

export function Main() {
  return (
    <main className="main-container">
      <SectionAbout />
      <SectionServices />
      <SectionJourney />
    </main>
  )
}