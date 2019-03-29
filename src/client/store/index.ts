import { createStore } from "redux";
import reducer from "./reducers/index";

export interface IStore {
  contacts: IStoreContacts[];
}

export interface IStoreContacts {
  id: string;
  name: string;
  surname: string;
  phoneNumber: string;
  note: string;
};

const store = createStore(reducer);

export default store;