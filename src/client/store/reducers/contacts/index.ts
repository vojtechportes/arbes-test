import { IStoreContacts } from "../../index";
import * as removeAccents from "remove-accents";
import { ACTIONS } from "../../actions/index";

const defaultState: IStoreContacts[] = [];

const contacts = (state: IStoreContacts[] = defaultState, action: any) => {
  switch (action.type) {
    case ACTIONS.ADD_CONTACT:
      const idLength = state.filter(
        item =>
          removeAccents(item.name) === action.name &&
          removeAccents(item.surname) === action.surname
      ).length;
      let id;

      if (idLength === 0) {
        id = removeAccents(
          `${action.surname.replace(" ", "_")}_${action.name.replace(" ", "_")}`
        );
      } else {
        id = removeAccents(
          `${action.surname.replace(" ", "_")}_${action.name.replace(
            " ",
            "_"
          )}-${idLength + 1}`
        );
      }

      return [
        {
          id,
          name: action.name,
          surname: action.surname,
          phoneNumber: action.phoneNumber,
          note: action.note
        },
        ...state
      ];
    case ACTIONS.DELETE_CONTACT:
      return [...state.filter(item => item.id !== action.id)];
    default:
      return state;
  }
};

export default contacts;
