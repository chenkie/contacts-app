import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Contact } from './../contact';
import { ContactService } from './contact.service';

@Injectable()
export class ContactResolverService implements Resolve<Contact> {

  constructor(public contactService: ContactService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    return this.contactService.getContact(id);
  }

}
