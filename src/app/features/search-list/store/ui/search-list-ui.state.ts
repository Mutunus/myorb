import { Injectable } from '@angular/core';
import {Action, State, StateContext} from '@ngxs/store';
import {SearchListModel} from "./search-list-ui.types";
import {SearchListDefault} from "./search-list-ui.constants";
import {SetProcedureSearch, SetSelectedProcedure} from "./search-list-ui.actions";

@State<SearchListModel>({
  name: 'search',
  defaults: SearchListDefault
})
@Injectable()
export class SearchListUiState {

  @Action(SetProcedureSearch)
  setProcedureSearch(ctx: StateContext<SearchListModel>, action: SetProcedureSearch) {
    ctx.patchState(action);
  }

  @Action(SetSelectedProcedure)
  setSelectedProcedure(ctx: StateContext<SearchListModel>, {procedure}: SetSelectedProcedure) {
    ctx.patchState({selectedProcedure: procedure});
  }

}
