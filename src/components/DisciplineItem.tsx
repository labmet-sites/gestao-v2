import { useState } from "react";

export default function DisciplineItem({ title, ementa }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="discipline-container">
      <div className="discipline-header" onClick={() => setOpen(!open)}>
        <h2 className="discipline">{title}</h2>
        <button className="toggle-button">{open ? "−" : "+"}</button>
      </div>
      <div className={`ementa ${open ? "open" : ""}`}>
        <p>{ementa}</p>
      </div>
    </div>
  );
}
