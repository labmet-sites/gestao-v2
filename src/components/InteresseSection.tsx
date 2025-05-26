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
import Modal from "./Modal";
import { FaWhatsapp } from "react-icons/fa";

export default function InteresseSection() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    duvida: "",
  });
  const [modal, setModal] = useState({
    show: false,
    message: "",
    success: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyTUUGXOM3Jl8XKcB7hrHLSdm8hpyxEpw1tfQYZKkSmPUKOrbLORPr8vQXnB5dbyc4X/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    if (response.ok) {
      setModal({
        show: true,
        message: "Mensagem enviada com sucesso!",
        success: true,
      });

      setForm({ nome: "", telefone: "", duvida: "" });
    } else {
      setModal({
        show: true,
        message: "Mensagem enviada com sucesso!",
        success: true,
      });
    }
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
        <p className="wpp-p">
          Entre no nosso grupo do Whatsapp para mais informações
        </p>
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
      <Modal
        show={modal.show}
        message={modal.message}
        success={modal.success}
        onClose={() => setModal({ ...modal, show: false })}
      />
    </Section>
  );
}
