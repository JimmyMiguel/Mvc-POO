import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection = {};

  constructor() {
    this.contacts = new ContactsCollection();
  }
  processOptions(options: ContactsControllerOptions) {}
}

export { ContactsController };
