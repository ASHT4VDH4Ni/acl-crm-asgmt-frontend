import React, { useState } from "react";

interface InteractionFormProps {
  customerId: number;
  onSubmit: (interaction: { interaction_date: string; type: string; notes: string }) => void;
}

const InteractionForm: React.FC<InteractionFormProps> = ({ customerId, onSubmit }) => {
  const [date, setDate] = useState("");
  const [type, setType] = useState("call");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ interaction_date: date, type, notes });
    setDate("");
    setNotes("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Log Interaction</h3>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)} required>
        <option value="call">Call</option>
        <option value="email">Email</option>
        <option value="meeting">Meeting</option>
      </select>
      <textarea
        placeholder="Interaction notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        required
      />
      <button type="submit">Log Interaction</button>
    </form>
  );
};

export default InteractionForm;
