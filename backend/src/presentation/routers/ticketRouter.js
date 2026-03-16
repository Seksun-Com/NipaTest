import Router from 'express';
import { validateTicket } from '../middlewares/validateTicket.js';
import { createTicket, updateTicket, getTickets} from '../controllers/ticketController.js';
import { createTicketSchema, updateTicketSchema, ticketQuerySchema } from '../../application/schemas/ticketSchema.js';

const ticketRouter = Router();
ticketRouter.post('/tickets', validateTicket(createTicketSchema, 'body'), createTicket);
ticketRouter.get('/tickets', validateTicket(ticketQuerySchema, 'query'), getTickets);
ticketRouter.put('/tickets/:id', validateTicket(updateTicketSchema, 'body'), updateTicket);
export default ticketRouter;