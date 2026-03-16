import * as repo from '../../persistence/repositories/ticketRepo.js';
import { TicketMapper } from '../mappers/ticketMapper.js';

export const getTickets = async (query) => {
  const status = query?.status || null;
  const sortBy = query?.sortBy || 'id';
  const sortOrder = query?.sortOrder || 'DESC';
  const ticketModels = await repo.getTicketsFilter(status, sortBy, sortOrder);
  const ticketEntities = TicketMapper.modelListToEntityList(ticketModels);
  return TicketMapper.entityListToDtoList(ticketEntities);
};

export const createTicket = async (ticketDto) => {
  const entity = TicketMapper.dtoToEntity(ticketDto);
  const model = TicketMapper.entityToModel(entity);
  const insertId = await repo.createTicket(model);
  if (!insertId) return null;
  const createModel = await getTicketById(insertId);
  const dto = TicketMapper.entityToDto(
    TicketMapper.modelToEntity(createModel));
  return {id: insertId, ...dto};
};

export const updateTicket = async (id, ticketDto) => {
  const entity = TicketMapper.dtoToEntity(ticketDto);
  const model = TicketMapper.entityToModel(entity);
  const isUpdated = await repo.updateTicket(id, model);
  if (!isUpdated) return null;
  const updateModel = await getTicketById(id);
  const dto = TicketMapper.entityToDto(
    TicketMapper.modelToEntity(updateModel));
  return { id, ...dto };
};

export const getTicketById = async (id) => {
  const model = await repo.getTicketById(id);
  if (!model) return null;
  return model
}

export const getTicketsFilter = async (query) => {
  const models = await repo.getTicketsFilter(query.status, query.sortBy, query.sortOrder);
  const dtos = TicketMapper.entityListToDtoList(TicketMapper.modelListToEntityList(models));
  return dtos
};