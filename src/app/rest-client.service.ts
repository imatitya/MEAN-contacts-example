import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestClientService {

  constructor(private http: Http) {
  }

  get(route: string) {
    return this.http.get(route)
      .map(response => response.json());
  }

}
