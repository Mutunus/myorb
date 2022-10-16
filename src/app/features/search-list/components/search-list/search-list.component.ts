import { Component } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {SearchListUiSelectors} from "../../store/ui/search-list-ui.selectors";
import {Observable} from "rxjs";
import {Procedure} from "../../../../types/procedure.types";
import {SetSelectedProcedure} from "../../store/ui/search-list-ui.actions";

@Component({
  selector: 'search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {

  @Select(SearchListUiSelectors.selectedProcedure) selectedProcedure$: Observable<Procedure>;

  constructor(private store: Store) { }

  onDeselectProcedure() {
    this.store.dispatch(new SetSelectedProcedure(null));
  }

}
