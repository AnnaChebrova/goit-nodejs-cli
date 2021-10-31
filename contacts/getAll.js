const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.join(__dirname, 'contacts.json');


const getAll = async() => {
  const data = await fs.readFile(contactsPath);

  const contacts = JSON.parse(data);
    // console.log(contacts);

  return contacts;
}

module.exports = getAll;
