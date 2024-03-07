import { createSlice } from '@reduxjs/toolkit';

import { addContacts, deleteContacts, fetchContacts } from './operations';

const statusPending = state => {
  state.isLoading = true;
  state.error = null;
};

const statusRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const statusFinally = state => {
  state.error = null;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: statusPending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: statusRejected,

    [addContacts.pending]: statusPending,
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state = state.items.push(action.payload);
    },
    [addContacts.rejected]: statusRejected,

    [deleteContacts.pending]: statusPending,
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(contact => {
        return contact.id !== action.payload.id;
      });
    },
    [deleteContacts.rejected]: statusRejected,
    [deleteContacts.finally]: statusFinally,
  },
});

export const contactsReducer = contactsSlice.reducer;
