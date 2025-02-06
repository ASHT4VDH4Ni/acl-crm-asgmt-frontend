import React from "react";
import { useNavigate } from "react-router-dom";

interface CustomerListProps {
  customers: any[];
  onEdit: (customer: any) => void;
  onDelete: (customerId: number) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, onEdit, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Customer List</h3>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} - {customer.email} - {customer.phone}
            <button onClick={() => onEdit(customer)}>Edit</button>
            <button onClick={() => onDelete(customer.id)}>Delete</button>
            <button onClick={() => navigate(`/customer/${customer.id}`)}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
