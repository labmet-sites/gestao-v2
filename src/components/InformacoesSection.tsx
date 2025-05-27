import {
  Section,
  Title,
  InfoList,
  InfoItem,
  Highlight,
} from "../styles/Informacoes.styles";

export default function InformacoesSection() {
  return (
    <Section id="informacoes">
      <Title>Mais Informações</Title>
      <InfoList>
        <InfoItem>
          As aulas ocorrerão <Highlight>quinzenalmente</Highlight>, às{" "}
          <Highlight>sextas-feiras à noite</Highlight> e aos{" "}
          <Highlight>sábados pela manhã e tarde</Highlight>.
        </InfoItem>
        <InfoItem>
          O investimento total é de <Highlight>18x de R$ 600,00</Highlight>.
        </InfoItem>
      </InfoList>
    </Section>
  );
}
