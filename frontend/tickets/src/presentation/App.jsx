import { useState, useEffect } from 'react';
import { createTicket, getTicketsQuery, updateTicket } from '../application/services/ticketService';
import TicketItem from './components/TicketItem.jsx';
import { ModalEditTicket, ModalCreateTicket } from './components/ModalTicket.jsx';
import Navbar from './components/Navbar.jsx';
import ticketValidator from './middlewares/ticketValidator.js';

export default function App() {
  const [sourceData, setSourceData] = useState([]);
  const [create, setCreate] = useState(null);
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState(-1); //DSC
  const [statusFilter, setStatusFilter] = useState('all');
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTicketsQuery(statusFilter, sortBy, sortOrder);
        setSourceData(data || []);
      } catch (err) {
        console.error("Fetch error:", err);
        alert("Failed to fetch tickets")
      }
    };
    fetchData();
  }, [statusFilter, sortBy, sortOrder]);

  const handleSave = async () => {
    const validateError = ticketValidator(edit);
    if (validateError) {
      alert(validateError);
      return;
    }
    try {
      const success = await updateTicket(edit.id, edit);
      if (success) {
        setSourceData(prev =>
          prev.map(t => (t.id === edit.id ? {
            ...t,
            ...edit,
            updated_at: new Date().toUTCString()
          } : t))
        );
        getTicketsQuery(statusFilter, sortBy, sortOrder);
        setEdit(null);
      }
    } catch (err) {
      console.error("Update Error:", err);
      alert("Failed to update ticket");
    }
  };

  const handleCreate = async () => {
    const validateError = ticketValidator(create);
    if (validateError) {
      alert(validateError);
      return;
    }
    try {
      const newItem = await createTicket(create);
      if (newItem) {
        setSourceData(prev => [newItem, ...prev]);
        getTicketsQuery(statusFilter, sortBy, sortOrder);
        setCreate(null);
      }
    } catch (err) {
      console.error("Create Error:", err);
      alert("Failed to create ticket");
    }
  };

  return (
    <div className="p-8 bg-slate-950 min-h-screen text-slate-200">
      <Navbar
        onClick={() => setCreate({
          title: '',
          description: '',
          contact_information: '',
          status: 'pending',
          created_at: new Date().toUTCString(),
          updated_at: new Date().toUTCString()
        })}
        statusFilter={statusFilter}
        sortBy={sortBy}
        sortOrder={sortOrder}
        setStatusFilter={setStatusFilter}
        setSortBy={setSortBy}
        setSortOrder={setSortOrder}
      />

      <div className="mx-auto max-w-[60%] min-w-0 h-[calc(100vh-180px)] overflow-y-auto overflow-x-auto pr-2 grid gap-4">
        {sourceData.map(t => (
          <TicketItem
            key={t.id}
            ticket={t}
            onEdit={() => setEdit(t)}
          />
        ))}
      </div>

      {/* Modal */}
      {create && <ModalCreateTicket
        ticket={create}
        onClose={() => setCreate(null)}
        onCreate={handleCreate}
        onChange={(field, value) => setCreate({ ...create, [field]: value })}
      />}
      {edit &&
        <ModalEditTicket
          ticket={edit}
          onClose={() => setEdit(null)}
          onSave={handleSave}
          onChange={(field, value) => setEdit({ ...edit, [field]: value })}
        />
      }
    </div>
  );
}