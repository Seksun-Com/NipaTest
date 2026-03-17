import { TicketStatus } from "../../domain/TicketStatus";
import * as ticketApi from "../../persistence/apis/ticketApi";

export const getTickets = async () => {
  const response = await ticketApi.getTickets();
  if (!response) throw new Error('Failed to fetch');
  return response;
};


export const getTicketsQuery = async (status, sortBy, sortOrder) => {
  const allowedSortBy = ["id", "status", "updated_at"];
  const finalSortBy = allowedSortBy.includes(sortBy) ? sortBy : "id";
  const parts = [`sortBy=${finalSortBy}`];

  parts.push(`sortOrder=${sortOrder === 1 ? 'ASC' : 'DESC'}`);
  
  if (Object.values(TicketStatus).includes(status)) {
    parts.push(`status=${status}`);
  }

  const query = parts.join('&');
  const response = await ticketApi.getTicketsQuery(query);
  if (!response) throw new Error('Failed to fetch');
  return response;
};

export const createTicket = async (data) => {
  const response = await ticketApi.createTicket(data);
  return response.data;
};

export const updateTicket = async (id, data) => {
  console.log(id, data)
  const response = await ticketApi.updateTicket(id, data);
  return response;
};
