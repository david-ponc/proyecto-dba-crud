const success = (req, res, message, status = 200) => {
  res.status(status).send({
    error: null,
    status,
    body: message,
  })
}

const error = (req, res, error, status = 500) => {
  res.status(status).send({
    error,
    status,
    body: null,
  })
}

module.exports = {success, error}
