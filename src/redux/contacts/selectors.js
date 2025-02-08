import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsError = state => state.contacts.isError;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (phonebook, statusFilter) => {
    const newPhonebook = phonebook.filter(
      contact =>
        contact.name
          .toLowerCase()
          .trim()
          .includes(statusFilter.toLowerCase().trim()) ||
        contact.number.includes(statusFilter)
    );
    return newPhonebook;
  }
);
