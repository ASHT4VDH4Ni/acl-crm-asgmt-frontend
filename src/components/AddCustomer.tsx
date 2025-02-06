import React, { useState } from "react";
import { addCustomer } from "../api";

const AddCustomer: React.FC<{ onCustomerAdded: () => void }> = ({ onCustomerAdded }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addCustomer({ name, email, phone });
    setName("");
    setEmail("");
    setPhone("");
    onCustomerAdded(); // Refresh customer list
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Customer</h3>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default AddCustomer;
