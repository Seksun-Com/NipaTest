export class TicketEntityInput {
  constructor(title, description, contact, status) {
    this.title = title;
    this.description = description;
    this.contact_information = contact;
    this.status = status;
  }
}
export class TicketEntityOutput {
  constructor(id, title, description, contact, status, created_at, updated_at) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.contact_information = contact;
    this.status = status;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}