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
  welcomeMessage: string;

  constructor(private route: ActivatedRoute, private messageDataService: MessageDataService) { }

  ngOnInit() {

    this.name = this.route.snapshot.params.name;
  }
  getWelcomeMessage() {

    this.messageDataService.executeDisplayMessageBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

  }

  getWelcomeMessageWithParam() {

    this.messageDataService.executeDisplayMessageBeanServiceWithPath(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

  }
  handleSuccessfulResponse(response) {
    this.welcomeMessage = response.message;

  }
  handleErrorResponse(error) {
    this.welcomeMessage = error.error.message;
  }

}
