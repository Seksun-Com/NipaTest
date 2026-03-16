const API_BASE = 'http://localhost:3000/tickets';

export const getTickets = async () => {
  const response = await fetch(`${API_BASE}`);
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
};

export const updateTicket = async (id, data) => {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.ok;
};

export const getTicketsQuery = async (query) => {
  const queryString = query?`?${query}` : '';
  
  const response = await fetch(`${API_BASE}${queryString}`);
  
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
};

export const createTicket = async (data) => {
  const response = await fetch(`${API_BASE}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.ok;
};