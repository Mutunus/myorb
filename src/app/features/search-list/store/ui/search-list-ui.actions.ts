import {Procedure} from "../../../../types/procedure.types";

export class SetProcedureSearch {
  static readonly type = '[SearchList] Set Procedure Search';
  constructor(public search: string) {}
}

export class SetSelectedProcedure {
  static readonly type = '[SearchList] Set Selected Procedure';
  constructor(public procedure: Procedure) {}
}
