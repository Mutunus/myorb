import {Injectable} from "@angular/core";
import {Selector} from "@ngxs/store";
import {SearchListUiState} from "./search-list-ui.state";
import {SearchListModel} from "./search-list-ui.types";

@Injectable()
export class SearchListUiSelectors {
  constructor() {}

  @Selector([SearchListUiState])
  public static search(
    state: SearchListModel
  ) {
    return state.search;
  }

  @Selector([SearchListUiState])
  public static selectedProcedure(
    state: SearchListModel
  ) {
    return state.selectedProcedure;
  }

}
