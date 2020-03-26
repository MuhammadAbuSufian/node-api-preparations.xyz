export class DataAbleViewModel<T> {
  constructor() {
    this.data = [];
  }
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
}