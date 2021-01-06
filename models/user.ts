export enum MetricSystem {
  METRIC,
  IMPERIAL,
}

export class User {
  private _email: string;
  private _name: string;
  private _weight: number;
  private _height: number;
  private _system: MetricSystem;

  constructor(
    email: string,
    name: string,
    weight: number,
    height: number,
    system: MetricSystem
  ) {
    this._email = email;
    this._name = name;
    this._weight = weight;
    this._height = height;
    this._system = system;
  }

  get email(): string {
    return this._email;
  }

  get name(): string {
    return this._name;
  }

  get weight(): number {
    return this._weight;
  }

  get height(): number {
    return this._height;
  }

  get system(): MetricSystem {
    return this._system;
  }
}
