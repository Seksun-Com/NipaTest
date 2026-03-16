import db from '../configs/database.js';
import { TicketModelOutput } from '../models/TicketModel.js';

export const getTicketsFilter = async (status, sortBy, sortOrder) => {
  let sql = `SELECT * FROM tickets WHERE 1=1`;
  const params = [];

  if (status) {
    sql += ` AND status = ?`;
    params.push(status);
  }
  const finalSortBy = sortBy || 'id';
  const finalSortOrder = sortOrder || 'DESC';
  const allowedSortBy = ['id', 'updated_at', 'status'];
  const sortCol = allowedSortBy.includes(finalSortBy) ? finalSortBy : 'id';

  sql += ` ORDER BY ${sortCol} ${finalSortOrder === 'ASC' ? 'ASC' : 'DESC'}`;
  const [rows] = await db.execute(sql, params);
  return rows.map(row => TicketModelOutput.fromRow(row));
};

export const getTicketById = async (id) => {
  const sql = `SELECT * FROM tickets WHERE id = ?`;
  const [rows] = await db.execute(sql, [id]);
  if (rows.length === 0) return null;
  return TicketModelOutput.fromRow(rows[0]);
};

export const createTicket = async (ticketModelInput) => {
  const sql = `
    INSERT INTO tickets (title, description, contact_information, status) 
    VALUES (?, ?, ?, ?)
  `;
  const [result] = await db.execute(sql, [
    ticketModelInput.title,
    ticketModelInput.description,
    ticketModelInput.contact_information,
    ticketModelInput.status,
  ]);

  return result.insertId;
};

export const updateTicket = async (id, ticketModelInput) => {
  const sql = `
    UPDATE tickets 
    SET title = ?, description = ?, contact_information = ?, status = ?, updated_at = NOW() 
    WHERE id = ?
  `;
  const [result] = await db.execute(sql, [
    ticketModelInput.title,
    ticketModelInput.description,
    ticketModelInput.contact_information,
    ticketModelInput.status,
    id
  ]);
  return result.affectedRows > 0;
};