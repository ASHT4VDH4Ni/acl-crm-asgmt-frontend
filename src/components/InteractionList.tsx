// import React, { useEffect, useState } from "react";
// import { getInteractions, addInteraction } from "../api";

// const InteractionList: React.FC<{ customerId: number }> = ({ customerId }) => {
//   const [interactions, setInteractions] = useState([]);
//   const [date, setDate] = useState("");
//   const [type, setType] = useState("call");
//   const [notes, setNotes] = useState("");

//   const fetchInteractions = () => {
//     getInteractions(customerId).then((res) => setInteractions(res.data));
//   };

//   useEffect(() => {
//     fetchInteractions();
//   }, [customerId]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     await addInteraction({ customer_id: customerId, interaction_date: date, type, notes });
//     setDate("");
//     setType("call");
//     setNotes("");
//     fetchInteractions();
//   };

//   return (
//     <div>
//       <h3>Customer Interactions</h3>
//       <form onSubmit={handleSubmit}>
//         <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
//         <select value={type} onChange={(e) => setType(e.target.value)}>
//           <option value="call">Call</option>
//           <option value="email">Email</option>
//           <option value="meeting">Meeting</option>
//         </select>
//         <textarea placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
//         <button type="submit">Log Interaction</button>
//       </form>
//       <ul>
//         {interactions.map((interaction: any) => (
//           <li key={interaction.id}>
//             {interaction.interaction_date} - {interaction.type} - {interaction.notes}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default InteractionList;



import React, { useEffect, useState } from "react";
import { getInteractions, addInteraction } from "../api";

const InteractionList: React.FC<{ customerId: number }> = ({ customerId }) => {
  const [interactions, setInteractions] = useState([]);
  const [date, setDate] = useState("");
  const [type, setType] = useState("call");
  const [notes, setNotes] = useState("");

  const fetchInteractions = async () => {
    const res = await getInteractions(customerId);
    setInteractions(res.data);
  };

  useEffect(() => {
    fetchInteractions();
  }, [customerId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addInteraction({ customer_id: customerId, interaction_date: date, type, notes });
    setDate("");
    setType("call");
    setNotes("");
    fetchInteractions();
  };

  return (
    <div>
      <h3>Customer Interactions</h3>
      <form onSubmit={handleSubmit}>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="call">Call</option>
          <option value="email">Email</option>
          <option value="meeting">Meeting</option>
        </select>
        <textarea placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
        <button type="submit">Log Interaction</button>
      </form>
      <ul>
        {interactions.map((interaction: any) => (
          <li key={interaction.id}>
            {interaction.interaction_date} - {interaction.type} - {interaction.notes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InteractionList;
