import { Exercise } from './exercise.model';
import { Subject } from 'rxjs/Subject';


export class TrainingService {

  private runningExercise: Exercise;
  exerciseChanged = new Subject<Exercise>();
  private exercises: Exercise[] = [];

  availableExercises: Exercise[] = [{ id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
  { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
  { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
  { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }];

  getAvailableExercises() {
    return this.availableExercises.slice();
  }
  getPastExercises() {
    return this.exercises.slice();
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(ex => ex.id === selectedId);
    this.exerciseChanged.next({ ...this.runningExercise });
  }

  completeExercise() {
    this.exercises.push({ ...this.runningExercise, date: new Date(), state: 'completed' });
    this.runningExercise = null;
    this.exerciseChanged.next(null);

  }

  cancelExercise(progress: number) {
    this.exercises.push({
      ...this.runningExercise, date: new Date(),
      state: 'cancelled', calories: this.runningExercise.calories * (progress / 100),
      duration: this.runningExercise.duration * (progress / 100)
    });

    this.runningExercise = null;
    this.exerciseChanged.next(null);

  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }


}
