import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;

  constructor() {
    this.contacts = new ContactsCollection()
    this.contacts.load()

  }

  processOptions(options: ContactsControllerOptions) {
    if (options.action === 'get' && options.params === null) {
      this.contacts.getAll()
    }

    if (options.action == null && options.params === Number){
      this.contacts.getOneById(options.params)
    }

    if(options.action === "save"){
      this.contacts.addOne(options.params)
    }


  }
}

export { ContactsController };


