export class TicketModelInput {
  constructor(title, description, contact, status) {
    this.title = title;
    this.description = description;
    this.contact_information = contact;
    this.status = status;
  }
}
export class TicketModelOutput{
  constructor(id, title, description, contact, status, created_at, updated_at) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.contact_information = contact;
    this.status = status;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
  static fromRow(row) {
    return new TicketModelOutput(
      row.id,
      row.title,
      row.description,
      row.contact_information,
      row.status,
      row.created_at,
      row.updated_at
    );
  }
}