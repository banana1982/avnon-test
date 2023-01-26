import { IAnswer } from './answer.model';
export interface IQuestion {
  id?: any;
  qType?: string,
  qContent?: string;
  qSpecify?: boolean;
  qReuired?: boolean;
  answers?: string[];
  ans?: IAnswer[];
}

export class Question implements IQuestion {
  constructor(
    public id?: any,
    public qType?: string,
    public qContent?: string,
    public qSpecify?: boolean,
    public qReuired?: boolean,
    public answers?: string[],
    public ans?: IAnswer[],
  ) {
    this.id = id || undefined;
    this.qType = qType || undefined;
    this.qContent = qContent || undefined;
    this.qSpecify = qSpecify || undefined;
    this.qReuired = qReuired || undefined;
    this.answers = answers || [];
    this.ans = ans || [];
  }
}