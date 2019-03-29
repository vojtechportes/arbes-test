import { IStrings } from "../";

const Strings: IStrings = {
  components: {
    appBar: {
      title: "Arbes Test APP",
      menuTitle: "Menu",
      drawer: {
        list: {
          homepage: "Homepage",
          addContact: "Add Contact",
          contacts: "Contacts"
        }
      }
    }
  },
  scenes: {
    contacts: {
      hd: "Contacts",
      components: {
        list: {
          id: "ID",
          name: "Name",
          note: "Note",
          phoneNumber: "Phone number"
        }
      }
    },
    homepage: {
      hd: "Homepage",
      addContact: "Add contact"
    },
    addContact: {
      form: {
        name: "Name",
        name_empty: "Name is required",
        note: "Note",
        phoneNumber: "Phone number",
        phoneNumber_empty: "Phone number is required",
        phoneNumber_invalid: "Phone number is in invalid format",
        surname: "Surname",
        surname_empty: "Surname is required",
        submit: "Submit"
      }
    }
  }
};

export default Strings;
