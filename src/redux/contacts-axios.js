import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://6457e1be1a4c152cf98c9a54.mockapi.io/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContactData = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const deleteContactById = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
