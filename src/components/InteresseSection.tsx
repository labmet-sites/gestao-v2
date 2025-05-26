// components/InteresseSection.jsx
import { useState } from "react";
import React from "react";
import {
  Section,
  Title,
  Form,
  InputGroup,
  Label,
  Input,
  TextArea,
  Button,
} from "../styles/Interese.styles";
import { FaWhatsapp } from "react-icons/fa";

export default function InteresseSection() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    duvida: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados enviados:", form);
    alert("Formulário enviado com sucesso!");
  };

  return (
    <Section id="interesse">
      <Title>Tem interesse ou alguma dúvida?</Title>
      <Title>Escreva para a gente!</Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="nome">Nome completo</Label>
          <Input
            type="text"
            id="nome"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="telefone">Número de celular</Label>
          <Input
            type="tel"
            id="telefone"
            name="telefone"
            value={form.telefone}
            onChange={handleChange}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="duvida">Comentário ou dúvida</Label>
          <TextArea
            id="duvida"
            name="duvida"
            value={form.duvida}
            onChange={handleChange}
          />
        </InputGroup>
        <Button type="submit">Enviar</Button>
      </Form>
      <div className="wpp-text">
        <p className="wpp-p">Entre no nosso grupo do Whatsapp para mais informações</p>
        <a
          href="https://chat.whatsapp.com/Is4pCvxzWhY223Q0iPpntS"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Entrar no grupo do WhatsApp"
          className="wpp-icon"
        >
          <FaWhatsapp size={48} color="#1fb627" />
        </a>
      </div>
    </Section>
  );
}
