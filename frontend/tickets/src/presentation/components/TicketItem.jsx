export const getStatusColor = (status) => {
  switch (status) {
    case 'pending': return 'bg-yellow-900/50 text-yellow-200 border-yellow-700';
    case 'accepted': return 'bg-blue-900/50 text-blue-200 border-blue-700';
    case 'resolved': return 'bg-green-900/50 text-green-200 border-green-700';
    case 'rejected': return 'bg-red-900/50 text-red-200 border-red-700';
    default: return 'bg-slate-700 text-slate-200 border-slate-600';
  };
};

const TicketItem = ({ ticket, onEdit }) => {
  return (
    <div className=" bg-slate-800 p-5 rounded-xl border border-slate-700 flex justify-between items-start hover:border-slate-600 transition-all">
      <div className="flex-1 min-w-0">
        <span className="text-[20px] text-slate-500 font-mono">#{ticket.id}</span>
        <h2 className="font-bold text-white text-2xl truncate">{ticket.title}</h2>
        <p className="text-slate-400 text-base truncate">{ticket.description}</p>
        <p className="text-slate-400 text-base truncate">{ticket.contact_information}</p>
        <p className="text-slate-400 text-base truncate">{
          new Date(ticket.created_at).toLocaleString(undefined, {
            dateStyle: 'medium',
            timeStyle: 'short'
          })
        }
        </p>
        <p className="text-slate-400 text-base truncate">{new Date(ticket.updated_at).toLocaleString(undefined, {
          dateStyle: 'medium',
          timeStyle: 'short'
        })}
        </p>
        <span className={`px-2 py-0.5 rounded text-[10px] border ${getStatusColor(ticket.status)}`}>
          {ticket.status?.toUpperCase()}
        </span>
      </div>
      <button
        onClick={onEdit}
        className="ml-4 shrink-0 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-xl font-medium"
      >
        Edit
      </button>
    </div>
  );
};

export default TicketItem;