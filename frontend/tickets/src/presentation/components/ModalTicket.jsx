import { TicketStatus } from '../../domain/TicketStatus';
import { getStatusColor } from './TicketItem';

export const ModalEditTicket = ({ ticket, onClose, onSave, onChange }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-slate-900 p-6 rounded-2xl w-[400px] border border-slate-700">
        <h2 className="font-bold mb-4 text-white">Edit Ticket #{ticket.id}</h2>
        <input
          value={ticket.title}
          onChange={(e) => onChange('title', e.target.value)}
          className="w-full mb-2 p-2 bg-slate-800 rounded border border-slate-700"
        />
        <textarea
          value={ticket.description}
          onChange={(e) => onChange('description', e.target.value)}
          className="w-full mb-2 p-2 bg-slate-800 rounded border border-slate-700"
        />
        <textarea
          value={ticket.contact_information}
          onChange={(e) => onChange('contact_information', e.target.value)}
          className="w-full mb-2 p-2 bg-slate-800 rounded border border-slate-700"
        />

        <label className="text-xs text-slate-400 block mb-1"> Status </label>
        <select
          value={ticket.status}
          onChange={(e) => onChange('status', e.target.value)}
          className={`w-full mb-4 p-2 rounded border ${getStatusColor(ticket.status)}`}
        >
          {Object.entries(TicketStatus).map(([key, value]) => (
            <option key={value} value={value}>{key.toLowerCase()}</option>
          ))}
        </select>

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-3 py-1 bg-slate-700 rounded text-white"> Close </button>
          <button onClick={onSave} className="px-3 py-1 bg-blue-600 rounded text-white"> Save </button>
        </div>
      </div>
    </div>
  );
};

export const ModalCreateTicket = ({ ticket, onClose, onCreate, onChange }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-slate-900 p-6 rounded-2xl w-[400px] border border-slate-700">
        <h2 className="font-bold mb-4 text-white">Create New Ticket</h2>
        
        <input
          placeholder="Title"
          value={ticket.title || ''}
          onChange={(e) => onChange('title', e.target.value)}
          className="w-full mb-2 p-2 bg-slate-800 rounded border border-slate-700 text-white"
        />
        
        <textarea
          placeholder="Description"
          value={ticket.description || ''}
          onChange={(e) => onChange('description', e.target.value)}
          className="w-full mb-2 p-2 bg-slate-800 rounded border border-slate-700 text-white"
        />

        <textarea
          placeholder="Contact"
          value={ticket.contact_information || ''}
          onChange={(e) => onChange('contact_information', e.target.value)}
          className="w-full mb-2 p-2 bg-slate-800 rounded border border-slate-700 text-white"
        />

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-3 py-1 bg-slate-700 rounded text-white"> Cancel </button>
          <button onClick={onCreate} className="px-3 py-1 bg-green-600 rounded text-white"> Create </button>
        </div>
      </div>
    </div>
  );
};