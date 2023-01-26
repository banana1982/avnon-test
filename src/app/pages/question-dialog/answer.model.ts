export interface IAnswer {
  status?: boolean;
  value?: string;
  subValue?: string;
}
export class Answer implements IAnswer {
  constructor(
    public status?: boolean,
    public value?: string,
    public subValue?: string,
  ){
    this.status = status || undefined;
    this.value = value || undefined;
    this.subValue = subValue || undefined;
  }
}