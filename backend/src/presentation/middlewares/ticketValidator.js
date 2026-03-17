export const ticketValidator = (schema, source = 'body') => (req, res, next) => {
  const data = source === 'body' ? req.body : req.query;
  const result = schema.safeParse(data);
  if (!result.success) {
    return res.status(400).json({ errors: result.error });
  }

  if (source === 'body') {
    req.validatedBody = result.data;
  } else {
    req.validatedQuery = result.data;
  }
  next();
};