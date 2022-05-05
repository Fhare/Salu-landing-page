// import { CardService } from "./CardService";

import { IoPhonePortraitOutline as Phone } from "react-icons/io5";
import {
  MdInsertPhoto as Photo,
  MdComputer as Computer
} from "react-icons/md";

import "./styles.scss";

export function Services() {
  return (
    <section className="services-container">
      <span>Serviços</span>
      <h1 className="service-heading">O que nós oferecemos?</h1>

      <article>
        {/* <CardService info={{ title: "Gerenciamento de midias sociais", description: "Descrição aqui" }}>
          <Phone size={42} color="#F2C94C" />
        </CardService>
        <CardService info={{ title: "Fotográfias 100% autorais", description: "Descrição aqui" }}>
          <Photo size={42} color="#F2C94C" />
        </CardService>
        <CardService info={{ title: "Landing page para apresentar o seu negócio", description: "Descrição aqui" }}>
          <Computer size={42} color="#F2C94C" />
        </CardService> */}
      </article>
    </section>
  )
}