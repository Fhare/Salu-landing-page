import { CardService } from "../../elements/CardService";
import { SectionPlaceholder } from "./SectionPlaceholder";

import { IoPhonePortraitOutline as Phone } from "react-icons/io5";
import {
  MdInsertPhoto as Photo,
  MdComputer as Computer
} from "react-icons/md";

import "./_services.scss";

export function SectionServices() {
  return (
    <section className="services-container">
      <SectionPlaceholder title="Serviços" description="O que nós oferecemos?" />
      
      <article>
        <CardService info={{ title: "Gerenciamento de midias sociais", description: "Descrição aqui" }}>
          <Phone size={42} color="#F2C94C" />
        </CardService>
        <CardService info={{ title: "Fotográfias 100% autorais", description: "Descrição aqui" }}>
          <Photo size={42} color="#F2C94C" />
        </CardService>
        <CardService info={{ title: "Landing page para apresentar o seu negócio", description: "Descrição aqui" }}>
          <Computer size={42} color="#F2C94C" />
        </CardService>
      </article>
    </section>
  )
}