import { Router } from 'express'

import * as user from './controller/users/controller'
import * as book from './controller/books/controller'
import middleware from './middleware/controller'

const router = Router()

router.use('/users', middleware)
router.route('/users')
  .post(user.createUser)
  .get(user.getUser)

router.route('/users/:Id')
  .get(user.getUserById)
  .put(user.updateUser)
  .patch(user.updateUser)
  .delete(user.deleteUser)

router.route('/books')
  .post(book.createBook)
  .get(book.getBook)

router.route('/books/:Id')
  .get(book.getBookById)
  .put(book.updateBook)
  .patch(book.updateBook)
  .delete(book.deletBook)

export default router
