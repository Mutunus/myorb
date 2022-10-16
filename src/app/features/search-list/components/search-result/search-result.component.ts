import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {SearchListUiSelectors} from "../../store/ui/search-list-ui.selectors";
import {distinctUntilChanged, filter, map, Observable, switchMap} from "rxjs";
import {ProceduresService} from "../../../../services/procedures.service";
import {Procedure} from "../../../../types/procedure.types";
import {SetSelectedProcedure} from "../../store/ui/search-list-ui.actions";

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Select(SearchListUiSelectors.search) searchTerm$: Observable<string>;

  public procedures$: Observable<Procedure[]>;

  constructor(private proceduresService: ProceduresService, private store: Store) {}

  ngOnInit() {
    this.procedures$ = this.search$();
  }

  private search$() {
    return this.searchTerm$.pipe(
      filter(search => !!search),
      distinctUntilChanged(),
      switchMap(search => this.proceduresService.procedureSearch$(search))
    )
  }

  public onProcedureSelected(procedure: Procedure) {
    this.store.dispatch(new SetSelectedProcedure(procedure));
  }

}

