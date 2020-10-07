export const createBook = (req, res) => {
  try {
    res.send('createBook')
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

export const getBook = (req, res) => {
  try {
    res.send('getBook')
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

export const getBookById = (req, res) => {
  try {
    res.send('getBookById')
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

export const updateBook = (req, res) => {
  try {
    res.send('updateBook')
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

export const deletBook = (req, res) => {
  try {
    res.send('deletBook')
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}
