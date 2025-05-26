import lattesLogo from "../assets/lattes-logo.svg";
import { professores } from "../assets/professores";
import { useState } from "react";
import { ProfessorsSection } from "../styles/Professors.styles";

export default function Professors() {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggle = (nome: string) => {
    setExpanded((prev) => ({ ...prev, [nome]: !prev[nome] }));
  };

  return (
    <ProfessorsSection id="professores">
      <h2 className="section-title">Nosso Corpo Docente</h2>
      <div className="cards">
        {professores.map((prof) => (
          <div
            className={`card ${expanded[prof.nome] ? "open" : ""}`}
            key={prof.nome}
          >
            <div className="card-header" onClick={() => toggle(prof.nome)}>
              <div className="info">
                <h3>{prof.nome}</h3>
              </div>
              <div
                className={`toggle-icon ${
                  expanded[prof.nome] ? "rotated" : ""
                }`}
              >
                +
              </div>
            </div>

            <div className="card-body">
              <p>{prof.descricao}</p>
              <a href={prof.lattes} target="_blank" rel="noreferrer">
                <img src={lattesLogo} alt="Lattes" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </ProfessorsSection>
  );
}
