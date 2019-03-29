import * as React from "react";

export interface IStrings {
  components: {
    appBar: {
      title: string;
      menuTitle: string;
      drawer: {
        list: {
          homepage: string;
          addContact: string;
          contacts: string;
        };
      };
    };    
  };  
  scenes: {
    contacts: {
      hd: string;
      components: {
        list: {
          id: string;
          name: string;
          phoneNumber: string;
          note: string;
        }
      };  
    };
    homepage: {
      hd: string;
      addContact: string;
    };
    addContact: {
      form: {
        name: string;
        name_empty: string;
        surname: string;
        surname_empty: string;
        phoneNumber: string;
        phoneNumber_empty: string;
        phoneNumber_invalid: string;
        note: string;
        submit: string;
      }
    }
  }
}

export { default as EN } from "./en/index";
export const StringsContext = React.createContext({ strings: {} as IStrings });
