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
    const headers = new HttpHeaders({ Authentication: basicAuthenticationString });
    return this.http.get<DisplayMessageBean>(`http://localhost:8080/user/${name}`, { headers });
  }
  createBasicAuthenticationHttpHeaders() {
    const username = 'user';
    const password = 'pass';
    const basicAuthenticationString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthenticationString;
  }

}
