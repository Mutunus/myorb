export interface Procedure {
  active: boolean,
  concept: ProcedureConcept,
  module: string,
  term: string
}

export interface ProcedureConcept {
  active: boolean,
  conceptId: string,
  definitionStatus: string,
  id: string,
  moduleId: string,
  fsn: ProcedureMetaData,
  pt: ProcedureMetaData
}

export interface ProcedureMetaData {
  term: string,
  lang: string
}
