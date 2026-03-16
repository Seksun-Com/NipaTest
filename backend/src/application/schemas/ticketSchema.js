import { z } from 'zod';
import { TicketStatus } from '../../domain/TicketStatus.js';

export const createTicketSchema = z.object({
  title: z.string({
    invalid_type_error: "Title must be a text string",
    required_error: "Title is required"}),

  description: z.string({
    invalid_type_error: "Description must be a text string",
    required_error: "Description is required"}),

  contact_information: z.string({
    invalid_type_error: "Contact information must be a text string",
    required_error: "Contact information is required"}),
});

export const updateTicketSchema = z.object({
  title: z.string({
    invalid_type_error: "Title must be a text string",
    required_error: "Title is required"}),

  description: z.string({
    invalid_type_error: "Description must be a text string",
    required_error: "Description is required"}),

  contact_information: z.string({
    invalid_type_error: "Contact information must be a text string",
    required_error: "Contact information is required"}),
    
  status: z.enum(Object.values(TicketStatus), {
    errorMap: () => ({ message: "Invalid status value" })
  }),
});

export const ticketQuerySchema = z.object({
  status: z.enum(Object.values(TicketStatus), {
    errorMap: () => ({ message: "Invalid status value" })
  }).optional(),
  sortBy: z.enum(['id', 'status', 'updated_at']).default('id').optional(),
  sortOrder: z.enum(['DESC', 'ASC']).default('DESC').optional()
});