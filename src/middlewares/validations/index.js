
const validateFilters = (filtrosValidos) =>
  (req, res, next) => {

  const props = Object.keys(req.query)

  const invalidProp = props.find((propName) => !filtrosValidos.includes(propName))

  if (invalidProp) {
    res.status(400);
    res.send(`O Filtro "${invalidProp}" é inválido`);
  }

  req.filters = req.query

  next()
}

module.exports = {
  validateFilters
}