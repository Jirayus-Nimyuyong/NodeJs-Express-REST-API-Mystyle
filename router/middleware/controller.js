const middleware = (req, res, next) => {
  try {
    const variable = 2
    if (variable === 1) {
      next()
    } else {
      res.send('access denied')
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

export default middleware
