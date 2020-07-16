import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SubscriptionLike } from 'rxjs';
import { TrainingService } from './training.service';


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit, OnDestroy {

  public exerciseSubscription: Subscription;

  public ongoingTraining = false;
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(exercise => {
      if (exercise) {
        this.ongoingTraining = true;
      }
      else {
        this.ongoingTraining = false;
      }

    });

  }
  ngOnDestroy() {
    this.exerciseSubscription.unsubscribe();
  }

}
