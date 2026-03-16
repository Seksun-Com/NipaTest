import { TicketEntityInput, TicketEntityOutput } from '../../domain/TicketEntity.js';
import { TicketModelInput } from '../../persistence/models/TicketModel.js';
import { TicketDTOOutput } from '../../application/dtos/TicketDTO.js';

export class TicketMapper {
  static dtoToEntity(dto) {
    return new TicketEntityInput(
      dto.title,
      dto.description,
      dto.contact_information,
      dto.status
    );
  }

  static entityToModel(entity) {
    return new TicketModelInput(
      entity.title,
      entity.description,
      entity.contact_information,
      entity.status
    );
  }

  static modelToEntity(model) {
    return new TicketEntityOutput(
      model.id,
      model.title,
      model.description,
      model.contact_information,
      model.status,
      model.created_at,
      model.updated_at
    )
  }

  static entityToDto(entity) {
    return new TicketDTOOutput(
      entity.id,
      entity.title,
      entity.description,
      entity.contact_information,
      entity.status,
      entity.created_at,
      entity.updated_at
    );
  }
  static modelListToEntityList(models) {
    if (!Array.isArray(models)) return [];
    return models.map(model => this.modelToEntity(model));
  }

  static entityListToDtoList(entities) {
    if (!Array.isArray(entities)) console.log("Hi");
    return entities.map(entity => this.entityToDto(entity));
  }
}