import { createAsyncThunk } from '@reduxjs/toolkit';

import contactsService from './contactsService';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      return await contactsService.get();
    } catch (error) {
      console.alert('There was an error in fetching contacts');
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async initialPost => {
    try {
      return await contactsService.create(initialPost);
    } catch (error) {
      console.alert('There was an error in adding a contact');
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async initialPost => {
    try {
      return await contactsService.remove(initialPost);
    } catch (error) {
      console.alert('There was an error in deleting a contact');
    }
  }
);
