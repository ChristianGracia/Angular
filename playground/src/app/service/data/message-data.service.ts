import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageDataService {

  constructor() { }

  executeDisplayMessageBeanService() {
    console.log('Execute Display message bean service');
  }
}
