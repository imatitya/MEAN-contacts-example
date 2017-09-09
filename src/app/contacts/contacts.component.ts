import { Component, OnInit } from '@angular/core';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {

  route: string
  contacts: any[] = []
  constructor(private restService: RestClientService) {
    this.route = '/api/contacts'
  }

  ngOnInit() {
    this.getContacts();
  }

  addContact(first: string, last: string, email: string) {
    var body = {}
    body["firstName"] = first
    body["lastName"] = last
    body["email"] = email
    this.restService.post(this.route, body).subscribe(response => {
      console.debug(response)
    })
  }

  getContacts() {
    this.restService.get(this.route).subscribe(response => {
      this.contacts = Object.assign(new Array<any>(), response)
      console.debug(response)
    })
  }

  deleteContact(email: string) {
    this.restService.delete(this.route + '/' + email).subscribe(response => {
      this.contacts = Object.assign(new Array<any>(), response)
      console.debug(response)
    })
  }

}

