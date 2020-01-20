import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<DisplayMessageBean>(`http://localhost:8080/user/${name}`);
  }

}
