import React from "react";
import { useParams } from "react-router-dom";
import InteractionList from "../components/InteractionList";

const CustomerDetails: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Customer Details</h2>
      <InteractionList customerId={Number(id)} />
    </div>
  );
};

export default CustomerDetails;
