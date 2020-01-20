import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeDisplayMessageBeanService() {
    this.http.get('http://localhost:8080/call-us-bean').subscribe();

    return this.http.get('http://localhost:8080/call-us-bean');
  }
}
