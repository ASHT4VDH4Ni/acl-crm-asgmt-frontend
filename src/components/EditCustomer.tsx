import React, { useState } from "react";
import { updateCustomer } from "../api";

const EditCustomer: React.FC<{ customer: any; onUpdate: () => void; onCancel: () => void }> = ({
  customer,
  onUpdate,
  onCancel,
}) => {
  const [name, setName] = useState(customer.name);
  const [email, setEmail] = useState(customer.email);
  const [phone, setPhone] = useState(customer.phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateCustomer(customer.id, { name, email, phone });
    onUpdate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Customer</h3>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditCustomer;
