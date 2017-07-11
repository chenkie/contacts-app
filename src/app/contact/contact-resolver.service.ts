import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ContactService } from './contact.service';
import { Contact } from '../contact';

@Injectable()
export class ContactResolverService implements Resolve<Contact> {

  constructor(public contactService: ContactService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.contactService.getContact(route.paramMap.get('id'));
  }

}
