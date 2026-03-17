import Router from 'express';
import { ticketValidator } from '../middlewares/ticketValidator.js';
import { createTicket, updateTicket, getTickets} from '../controllers/ticketController.js';
import { createTicketSchema, updateTicketSchema, ticketQuerySchema } from '../../application/schemas/ticketSchema.js';

const ticketRouter = Router();
ticketRouter.post('/tickets', ticketValidator(createTicketSchema, 'body'), createTicket);
ticketRouter.get('/tickets', ticketValidator(ticketQuerySchema, 'query'), getTickets);
ticketRouter.put('/tickets/:id', ticketValidator(updateTicketSchema, 'body'), updateTicket);
export default ticketRouter;