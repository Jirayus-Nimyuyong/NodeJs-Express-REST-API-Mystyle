export const createUser = (req, res) => {
  try {
    res.send('createUser')
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

export const getUser = (req, res) => {
  try {
    res.send('getUser')
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

export const getUserById = (req, res) => {
  try {
    res.send('getUserById')
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

export const updateUser = (req, res) => {
  try {
    res.send('updateUser')
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

export const deleteUser = (req, res) => {
  try {
    res.send('deleteUser')
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}
