import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class DisplayMessageBean {

  constructor(public message: string) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class MessageDataService {

  constructor(private http: HttpClient) {

  }

  executeDisplayMessageBeanService() {
    return this.http.get<DisplayMessageBean>('http://localhost:8080/call-us-bean/');
  }

  executeDisplayMessageBeanServiceWithPath(name) {
    const basicAuthenticationString = this.createBasicAuthenticationHttpHeaders();
    const headers = new HttpHeaders({ Authorization: basicAuthenticationString });
    return this.http.get<DisplayMessageBean>(`http://localhost:8080/user/${name}`, { headers });
  }
  createBasicAuthenticationHttpHeaders() {
    let username = 'user';
    let password = 'pass';
    let basicAuthenticationString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthenticationString;
  }

}
