const ticketValidator = (ticket) => {
  if (!ticket.title) {
    return "Please enter title.";
  }
  if (!ticket.description) {
    return "Please enter description.";
  }
  if (!ticket.contact_information) {
    return "Please enter your contact."
  }
  if (!ticket.status){
    return "Invalid status";
  }
  if (!ticket.created_at){
    return "Invalid created time";
  }
  if (!ticket.updated_at){
    return "Invalid updated time";
  }
}

export default ticketValidator;