import { Button } from "../elements/Button";

import "./header.scss";

export function Header() {
  return (
    <header>
      <h1 className="logo">Salu</h1>

      <ul className="nav">
        <li>Sobre</li>
        <li>Serviços</li>
        <li>Sua jornada</li>
        <li>Contato</li>

        <Button />
      </ul>
    </header>
  );
}