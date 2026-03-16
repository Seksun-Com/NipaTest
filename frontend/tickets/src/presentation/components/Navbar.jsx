import { TicketStatus } from '../../domain/TicketStatus';

const Navbar = ({onClick, statusFilter, sortBy, sortOrder, setStatusFilter, setSortBy, setSortOrder }) => {
  return (
    <nav className="mx-auto w-[60%] min-w-[600px] mb-8 border-b border-slate-800 pb-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">Tickets Dashboard</h1>
      <button
        onClick={onClick}
        className="ml-4 shrink-0 bg-green-700 hover:bg-green-500 px-4 py-2 rounded text-base font-medium"
      >
        Add Ticket
      </button>

      <div className="flex gap-4">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-slate-800 p-2 rounded text-sm border border-slate-700"
        >
          <option value="all">All Status</option>
          {Object.values(TicketStatus).map(s => <option key={s} value={s}>{s}</option>)}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-slate-800 p-2 rounded text-sm border border-slate-700"
        >
          <option value="id">ID</option>
          <option value="status">Status</option>
          <option value="updated_at">Last Update</option>
        </select>

        <button
          onClick={() => setSortOrder(prev => prev === 1 ? -1 : 1)}
          className="bg-slate-800 px-3 py-1 rounded border border-slate-700 hover:bg-slate-700"
        >
          {sortOrder === 1 ? '↑':'↓'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;