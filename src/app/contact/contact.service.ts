import { Injectable } from '@angular/core';
import { CONTACTS } from './../../data/contacts';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {
  constructor() {}

  getContact(id) {
    return Observable.of(CONTACTS.find(contact => contact.id === +id)).delay(
      2000
    );
  }
}
