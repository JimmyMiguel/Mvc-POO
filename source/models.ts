///importamos json
import { get } from "http";
import contacts from "./contacts.json";
import fs from 'fs'
///


export class Contact {
  id: number = 0;
  name: string = "";
  constructor(id:number,name:string){
    this.id = id;
    this.name = name;
  }
}



class ContactsCollection {
  allContacts : Contact[] = [];  

  load(){
    const fs = require("fs")
    const contactos = JSON.parse(fs.readFileSync('./contacts.json',"utf-8"));
    this.allContacts = contactos
  }
  
  getAll(){
    return this.allContacts
  }
  
  addOne(nuevoContacto:Contact){
    
    this.allContacts.push(nuevoContacto)
  }
  
  save(){
    this.load()
    const fs = require("fs")
    const transformar = JSON.stringify(this.allContacts,null,2)
    fs.writeFileSync('./contacts.json',transformar)
  }
  getOneById(id){
    const buscar = this.allContacts.find(x => x.id === id)
    return buscar || null

  }

}
export { ContactsCollection };

