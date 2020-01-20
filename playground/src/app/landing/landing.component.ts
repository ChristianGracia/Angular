import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageDataService } from '../service/data/message-data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  message = 'hi';
  name = '';

  constructor(private route: ActivatedRoute, private messageDataService: MessageDataService) { }

  ngOnInit() {

    this.name = this.route.snapshot.params.name;
  }
  getWelcomeMessage() {
    console.log('hi');
    this.messageDataService.executeDisplayMessageBeanService();

  }

}
