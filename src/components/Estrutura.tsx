import { useState } from "react";
import { EstruturaSection } from "../styles/Discipline.styles";
import { disciplinas } from "../assets/disciplinas";

export default function Estrutura() {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggle = (titulo: string) => {
    setExpanded((prev) => ({ ...prev, [titulo]: !prev[titulo] }));
  };

  return (
    <EstruturaSection id="estrutura">
      <p className="estrutura-title">Estrutura Curricular</p>
      {disciplinas.map((bloco, i) => (
        <div className="disciplines" key={i}>
          <h2 className="level-title">{bloco.nivel}</h2>
          {bloco.conteudos.map((disc) => (
            <div
              className={`card ${expanded[disc.titulo] ? "open" : ""}`}
              key={disc.titulo}
            >
              <div className="card-header" onClick={() => toggle(disc.titulo)}>
                <h3 className="discipline">{disc.titulo}</h3>
                <div
                  className={`toggle-icon ${
                    expanded[disc.titulo] ? "rotated" : ""
                  }`}
                >
                  +
                </div>
              </div>
              <div className="card-body">
                <p>{disc.ementa}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </EstruturaSection>
  );
}
