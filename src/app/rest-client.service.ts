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

  post(route: string, body: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(route, JSON.stringify(body), { headers: headers })
      .map(res => res.json())
  }

  delete(route: string) {
    return this.http.delete(route)
      .map(response => response.json());
  }

}
