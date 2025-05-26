import {
  Section,
  Title,
  Content,
  InfoBlock,
  InfoItem,
  Unidade,
  Label,
  Value,
  Logo,
} from "../styles/Contato.styles";

import logoUAEM from "../assets/logo_uaem2_small.png";

export default function ContatoSection() {
  return (
    <Section id="contato">
      <Title>Entre em contato</Title>
      <Content>
        <InfoBlock>
          <Unidade>
            Unidade Acadêmica de Engenharia Mecânica (UAEM/CCT/UFCG)
          </Unidade>
          <InfoItem>
            <Label>Coordenador:</Label>
            <Value>Prof. Dr. Jader Morais Borges</Value>
          </InfoItem>
          <InfoItem>
            <Label>Email:</Label>
            <Value>
              <a href="mailto:gestaodeativos@ufcg.edu.br">
                gestaodeativos@ufcg.edu.br
              </a>
            </Value>
          </InfoItem>
          <InfoItem>
            <Label>Telefone:</Label>
            <Value>(83) 99873-5103</Value>
          </InfoItem>
        </InfoBlock>
        <Logo
          src={logoUAEM}
          alt="Logo do Departamento"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      </Content>
    </Section>
  );
}
