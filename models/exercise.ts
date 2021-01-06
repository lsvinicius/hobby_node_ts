import { ExerciseEntity, ExerciseType } from "../entities/exercise";

export class Exercise {
  private _exerciseEntity: ExerciseEntity;

  constructor(exerciseEntity: ExerciseEntity) {
    this._exerciseEntity = exerciseEntity;
  }

  get name(): string {
    return this._exerciseEntity.name;
  }

  get exerciseType(): ExerciseType {
    return this._exerciseEntity.exerciseType;
  }

  get description(): string {
    return this._exerciseEntity.description;
  }

  get createdByUserId(): number {
    return this._exerciseEntity.createdByUserId;
  }

  get shared(): boolean {
    return this._exerciseEntity.shared;
  }

  get createdAt(): Date {
    return this._exerciseEntity.createdAt;
  }

  get hitChest(): boolean {
    return this._exerciseEntity.hitChest;
  }

  get hitLats(): boolean {
    return this._exerciseEntity.hitLats;
  }

  get hitUpperBack(): boolean {
    return this._exerciseEntity.hitUpperBack;
  }

  get hitLowerBack(): boolean {
    return this._exerciseEntity.hitLowerBack;
  }

  get hitShoulders(): boolean {
    return this._exerciseEntity.hitShoulders;
  }

  get hitQuads(): boolean {
    return this._exerciseEntity.hitQuads;
  }

  get hitHamstrings(): boolean {
    return this._exerciseEntity.hitHamstrings;
  }

  get hitBiceps(): boolean {
    return this._exerciseEntity.hitBiceps;
  }

  get hitTriceps(): boolean {
    return this._exerciseEntity.hitTriceps;
  }

  get hitForearms(): boolean {
    return this._exerciseEntity.hitForearms;
  }

  get hitTraps(): boolean {
    return this._exerciseEntity.hitTraps;
  }

  get hitGlutes(): boolean {
    return this._exerciseEntity.hitGlutes;
  }
}
