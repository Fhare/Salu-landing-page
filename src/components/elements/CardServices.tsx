import { ReactNode } from "react";

interface CardServicesProps {
  children: ReactNode;
  info: {
    title: string;
    description: string;
  }
}

export function CardService({ children, info }: CardServicesProps) {
  return (
    <div className="card-container">
      {children}

      <div>
        <h2>{info.title}</h2>
        <div className="line" style={{ marginTop: 12 }}></div>
      </div>

      <p>{info.description}</p>
    </div>
  );
}