export interface IQuestion {
  id?: any;
  qType?: string,
  qContent?: string;
  qSpecify?: boolean;
  qReuired?: boolean;
  answers?: string[];
}

export class Question implements IQuestion {
  constructor(
    public id?: any,
    public qType?: string,
    public qContent?: string,
    public qSpecify?: boolean,
    public qReuired?: boolean,
    public answers?: string[],
  ) {
    this.id = id || undefined;
    this.qType = qType || undefined;
    this.qContent = qContent || undefined;
    this.qSpecify = qSpecify || undefined;
    this.answers = answers || undefined;
  }
}