import { HomeStyles } from "./HomeStyles";
import ufcgLogo from "../assets/ufcg-logo.png";
import ufcgName from "../assets/ufcg_png.png";
import vector from "../assets/vector_about.jpg";
import Professors from "../components/Professors";
import { FaWhatsapp } from "react-icons/fa";
import InteresseSection from "../components/InteresseSection";
import Estrutura from "../components/Estrutura";
import ContatoSection from "../components/Contact";
import InformacoesSection from "../components/InformacoesSection";
import { useState } from "react";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const hoje = new Date();
  const inicioInscricao = new Date("2025-06-16T00:00:00");
  const fimInscricao = new Date("2025-07-07T23:59:59");
  const isPeriodoInscricao = hoje >= inicioInscricao && hoje <= fimInscricao;
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <HomeStyles>
      <header>
        <img className="header-logo" src={ufcgLogo} />
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`header-options ${menuOpen ? "open" : ""}`}>
          <li className="option" onClick={() => scrollToSection("home")}>
            Home
          </li>
          <li className="option" onClick={() => scrollToSection("sobre")}>
            Sobre
          </li>
          <li className="option" onClick={() => scrollToSection("estrutura")}>
            Estrutura Curricular
          </li>
          <li className="option" onClick={() => scrollToSection("professores")}>
            Professores
          </li>
          <li className="option" onClick={() => scrollToSection("interesse")}>
            Tenho Iteresse
          </li>
          <li className="option" onClick={() => scrollToSection("informacoes")}>
            Mais Informações
          </li>
          <li className="option" onClick={() => scrollToSection("contato")}>
            Contato
          </li>
          <a
            href="https://prpg.ufcg.edu.br/arquivos/editais/2025/edital-34-2025.pdf"
            target="_blank"
            className="option"
            style={{ textDecoration: "none" }}
          >
            Edital
          </a>
          <li className="option" onClick={() => scrollToSection("inscrição")}>
            Inscrição
          </li>
        </ul>
      </header>
      <section id="home" className="home-container">
        <p className="inicio-aulas">
          <strong>Início das Aulas:</strong> 2º Semestre de 2025
        </p>
        <div className="home-content">
          <img src={ufcgName} className="ufcg-img" alt="UFCG" />
          <h1 className="main-title">
            Especialização em
            <br />
            Gestão de Ativos
          </h1>
          <p className="sub-title">
            Curso <strong>Lato Sensu</strong> com emissão de certificado pela{" "}
            <strong>UFCG</strong>.
          </p>
          <p className="badge">100% Online</p>
        </div>
      </section>

      <section id="sobre" className="sec-sobre">
        <div className="sobre-wrapper">
          <div className="left-content">
            <h2 className="title">Sobre o Curso</h2>
            <p className="about-text">
              A <strong>gestão de ativos</strong> tem como foco principal buscar
              extrair o máximo valor dos ativos da empresa, por meio de ações
              estratégicas que envolvem o <strong>mapeamento</strong>,{" "}
              <strong>planejamento</strong>, análise de{" "}
              <strong>oportunidades e riscos</strong>,{" "}
              <strong>balanceamento de custos</strong>, avaliação da
              <strong> performance dos ativos</strong> e adequação aos{" "}
              <strong>avanços tecnológicos</strong> e requisitos legais. O
              objetivo é garantir a <strong>conformidade</strong> e a{" "}
              <strong>segurança</strong> dos processos.
            </p>
            <p className="about-text">
              Com um conjunto de disciplinas ajustadas às necessidades do
              mercado e professores com experiência na área, o
              <strong> Curso de Gestão de Ativos</strong> promove uma formação
              técnica sólida em suas múltiplas dimensões, desenvolvendo as
              competências necessárias para atuar com ativos tangíveis — como{" "}
              <strong>prédios</strong>,<strong> máquinas</strong> e{" "}
              <strong>estoques</strong>.
            </p>

            <p className="about-text">
              Tudo isso em sintonia com a dinâmica da sociedade e do mercado de
              trabalho, considerando as demandas sociais, econômicas, políticas,
              culturais, ambientais, científico-tecnológicas e educacionais.
            </p>
          </div>

          <div className="right-content">
            <img className="vector" src={vector} alt="Pessoa estudando" />
          </div>
        </div>
      </section>
      <Estrutura />
      <Professors />
      <InteresseSection />
      <InformacoesSection />
      <ContatoSection />
      <section id="inscrição" className="inscricao-section">
        <div className="inscricao-wrapper">
          <h2 className="title">Inscrição</h2>
          <p className="description">
            As inscrições para o curso estarão disponíveis apenas durante o
            período abaixo.
          </p>
          <button
            className="inscricao-button"
            onClick={() => (window.location.href = "/formulario-de-inscricao")}
            disabled={!isPeriodoInscricao}
          >
            {isPeriodoInscricao
              ? "Inscreva-se agora"
              : "Inscrição indisponível"}
          </button>
          <p className="periodo-text">
            Período de inscrições: <strong>16 de junho de 2025</strong> a{" "}
            <strong>07 de julho de 2025</strong>
          </p>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <img src={ufcgLogo} alt="Logo da UFCG" />
          <p>Universidade Federal de Campina Grande</p>
        </div>
      </footer>

      <a
        href="https://chat.whatsapp.com/Is4pCvxzWhY223Q0iPpntS"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entrar no grupo do WhatsApp"
        className="whatsapp-float"
      >
        <FaWhatsapp size={32} color="#ffffff" />
      </a>
    </HomeStyles>
  );
}
