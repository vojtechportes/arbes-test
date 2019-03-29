export enum ACTIONS {
  ADD_CONTACT,
  DELETE_CONTACT
}

export interface IActions {
  addContact: (
    name: string,
    surname: string,
    phoneNumber: string,
    note: string
  ) => void;
  deleteContact: (id: string) => void;
}

export const addContact = (
  name: string,
  surname: string,
  phoneNumber: string,
  note: string
) => ({
  type: ACTIONS.ADD_CONTACT,
  name,
  surname,
  phoneNumber,
  note
});

export const deleteContact = (id: string) => ({
  type: ACTIONS.DELETE_CONTACT,
  id
});
