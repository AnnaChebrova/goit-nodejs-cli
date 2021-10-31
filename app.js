const contactsOperations = require('./contacts')


const invokeContactsAction = async ({ action, id, data }) => {
  switch (action) {
    case 'getAll':
      return await contactsOperations.getAll()

    case 'getById':
      const contact = await contactsOperations.getById(id)
      console.log(contact)
      return contact

    case 'add':
      const newContact = await contactsOperations.add(data)
      console.log(newContact)
      return newContact

    case 'updateById':
      const updateContact = await contactsOperations.updateById(id, data)
      console.log(updateContact)
      return updateContact

    case 'removeById':
      const removeContact = await contactsOperations.removeById(id)
      console.log(removeContact)
      return removeContact

    default:
      throw new Error('Unknown action')
  }
}

invokeContactsAction(argv)


invokeContactsAction({ action: 'getAll' })

const id = 5
invokeContactsAction({ action: 'getById', id })

const data = {
  name: 'Mango',
  email: 'mango@gmail.com',
  phone: '322-22-22',
}
invokeContactsAction({ action: 'add', data })

const updateId = 3

invokeContactsAction({ action: 'removeById', id: updateId })


