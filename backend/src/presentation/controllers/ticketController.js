import { TicketDTOInput } from '../../application/dtos/TicketDTO.js';
import * as ticketService from '../../application/services/ticketService.js';

export const createTicket = async (req, res) => {
  try {
    const ticketDTO = new TicketDTOInput(req.validatedBody);
    const result = await ticketService.createTicket(ticketDTO);
    res.status(201).json({ success: true, message: "Create successful", data: result});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const ticketDTO = new TicketDTOInput(req.validatedBody);
    const result = await ticketService.updateTicket(id, ticketDTO);
    res.status(200).json({ success: true, message: "Update successful", data: result});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const getTickets = async (req, res) => {
  try {
    const query = req.validatedQuery || {};
    const tickets = await ticketService.getTickets(query);
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};