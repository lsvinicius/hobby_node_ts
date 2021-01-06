import { Exercise } from "./exercise";

/*
this interface represents the sets and reps for a given exercise, for example, the given
WorkoutExercise below:

workoutExercise = {
    exercise: {
        // exercise
    },
    sets: [5, 5, 5, 3]
}

it represents a workout exercise that should be done for
three sets of 5 reps and one set of 3 reps (3x5, 1x3)
*/
export interface WorkoutExercise {
  exercise: Exercise;
  sets: number[];
}

export class Workout {
  private _workoutExercises: WorkoutExercise[];
  private _comment: string;

  constructor(workoutExercises?: WorkoutExercise[], comment?: string) {
    this._workoutExercises = workoutExercises ?? new Array<WorkoutExercise>();
    this._comment = comment ?? "";
  }

  addWorkoutExercise(workoutExercise: WorkoutExercise): void {
    this._workoutExercises.push(workoutExercise);
  }

  get comment(): string {
    return this._comment;
  }

  set comment(comment: string) {
    this._comment = comment;
  }
}
