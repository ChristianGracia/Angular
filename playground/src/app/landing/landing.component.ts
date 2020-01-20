import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  message = 'hi';
  name = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.message);
    this.name = this.route.snapshot.params.name;
  }
  getWelcomeMessage() {
    console.log('hi');

  }

}
