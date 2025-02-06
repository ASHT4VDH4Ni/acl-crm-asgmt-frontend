import React, { useEffect, useState } from "react";
import { getCustomers, deleteCustomer } from "../api";
import AddCustomer from "../components/AddCustomer";
import CustomerList from "../components/CustomerList";
import EditCustomer from "../components/EditCustomer";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [customers, setCustomers] = useState<any[]>([]);
  const [editingCustomer, setEditingCustomer] = useState<any>(null);
  const navigate = useNavigate();

  const fetchCustomers = async () => {
    const res = await getCustomers();
    setCustomers(res.data);
  };

  const handleDelete = async (customerId: number) => {
    await deleteCustomer(customerId);
    fetchCustomers(); // Refresh the customer list
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>Customer List</h2>
      <AddCustomer onCustomerAdded={fetchCustomers} />
      {editingCustomer ? (
        <EditCustomer
          customer={editingCustomer}
          onUpdate={fetchCustomers}
          onCancel={() => setEditingCustomer(null)}
        />
      ) : (
        <CustomerList
          customers={customers}
          onEdit={setEditingCustomer}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
