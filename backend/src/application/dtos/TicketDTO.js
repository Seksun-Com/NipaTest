import { TicketStatus } from "../../domain/TicketStatus.js";

export class TicketDTOInput {
  constructor(rawData) {
    this.title = rawData.title;
    this.description = rawData.description;
    this.contact_information = rawData.contact_information;
    this.status = rawData.status? rawData.status : TicketStatus.PENDING;
  }
}
export class TicketDTOOutput {
  constructor(id, title, description, contact_information, status, created_at, updated_at) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.contact_information = contact_information;
    this.status = status;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}