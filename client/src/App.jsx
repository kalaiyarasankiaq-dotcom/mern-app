import { useState } from "react";
import { useGetItemsQuery, useAddItemMutation, useDeleteItemMutation ,useUpdateItemMutation,useGetItemQuery} from "./api";

export default function App() {
  const [name, setName] = useState("");
  const { data = [], isLoading } = useGetItemsQuery();
  const [addItem] = useAddItemMutation();
  const [updateItem] = useUpdateItemMutation();
  const [deleteItem] = useDeleteItemMutation();
  const [selectedId, setSelectedId] = useState(null);
  const { data: one} = useGetItemQuery(selectedId, { skip: !selectedId });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>MERN + RTK Query</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => { addItem({ name }); setName(""); }}>Add</button>
      {data.map((i) => (
        <p key={i._id}>
          {i.name} {" "}
          <button onClick={() => setSelectedId(i._id)}>View</button>{" "}
          <button onClick={() => 
            {
               const n = prompt(" new name", i.name);
               if(n) updateItem({ id: i._id, name: n });

            }
          }>
            Edit</button>
          <button onClick={() => deleteItem(i._id)}>X</button>
        </p>
      ))}
      {one && <p><b>Selected:</b> {one.name} ({one._id})</p>}
    </div>
  );
}