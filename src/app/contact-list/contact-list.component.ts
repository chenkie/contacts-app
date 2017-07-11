import { Component, OnInit } from '@angular/core';
import { CONTACTS } from './../../data/contacts';
import { Contact } from './../contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Array<Contact> = CONTACTS;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }

}
