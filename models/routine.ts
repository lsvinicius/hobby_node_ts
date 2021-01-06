import { Workout } from "./workout";

export class DayWorkout {
  private _date: string; // this string must be in MMDDYYYY format
  private _workout: Workout;
  constructor(date: string, workout: Workout) {
    if (DayWorkout._validateDate(date)) {
      this._date = date;
      this._workout = workout;
    } else {
      throw Error("Invalid Date");
    }
  }

  get date(): string {
    return this._date;
  }

  get workout(): Workout {
    return this._workout;
  }

  private static _validateDate(date: string): boolean {
    const match = date.match(/^(\d{2})(\d{2})(\d{4})$/);
    if (!match) {
      return false;
    }

    const month = parseInt(match[1], 10);
    const day = parseInt(match[2], 10);
    const year = parseInt(match[3], 10);
    const monthIndex = month - 1;

    const validDate = new Date(year, monthIndex, day);
    return (
      validDate.getFullYear() === year &&
      validDate.getMonth() === monthIndex &&
      validDate.getDate() === day
    );
  }
}

export class Routine {
  private _allWorkouts: Map<string, Workout>;
  private _comment: string;

  constructor(allWorkouts: DayWorkout[], comment: string) {
    this._allWorkouts = new Map<string, Workout>();
    allWorkouts.reduce(this._populateAllWorkoutsCallback);

    this._comment = comment;
  }

  addWorkout(dayWorkout: DayWorkout): void {
    this._allWorkouts.set(dayWorkout.date, dayWorkout.workout);
  }

  setComment(comment: string): void {
    this._comment = comment;
  }

  get comment(): string {
    return this._comment;
  }

  private _populateAllWorkoutsCallback(
    previousValue: DayWorkout,
    currentValue: DayWorkout
  ): DayWorkout {
    this._allWorkouts.set(currentValue.date, currentValue.workout);
    return currentValue;
  }
}
