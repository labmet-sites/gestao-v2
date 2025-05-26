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
    </Section>
  );
}
