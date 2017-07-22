import { Component, OnInit } from '@angular/core';
import { CONTACTS } from './../../data/contacts';
import { Contact } from './../contact';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.contact = this.route.snapshot.data['contact'];
  }

  goToContacts() {
    this.router.navigate(['contacts']);
  }

}
