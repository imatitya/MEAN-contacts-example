import { Component, OnInit } from '@angular/core';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {

  contacts: any[] = [];
  constructor(private restService: RestClientService) { }

  ngOnInit() {
    this.restService.get('/api/contacts').subscribe(response => {
      this.contacts = Object.assign(new Array<any>(), response)
    })
  }

}

