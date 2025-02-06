import React, { useState, useEffect } from "react";

interface CustomerFormProps {
  customer?: any; // Optional, for editing
  onSubmit: (customer: { name: string; email: string; phone: string }) => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ customer, onSubmit }) => {
  const [name, setName] = useState(customer ? customer.name : "");
  const [email, setEmail] = useState(customer ? customer.email : "");
  const [phone, setPhone] = useState(customer ? customer.phone : "");

  useEffect(() => {
    if (customer) {
      setName(customer.name);
      setEmail(customer.email);
      setPhone(customer.phone);
    }
  }, [customer]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, phone });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{customer ? "Edit Customer" : "Add New Customer"}</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">{customer ? "Update" : "Add"}</button>
    </form>
  );
};

export default CustomerForm;
