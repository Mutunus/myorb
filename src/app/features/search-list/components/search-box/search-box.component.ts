import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { Store } from '@ngxs/store';
import {debounceTime, filter, Observable, pluck} from "rxjs";
import { SubSink } from 'subsink';
import {SetProcedureSearch} from "../../store/ui/search-list-ui.actions";
import {SearchListUiSelectors} from "../../store/ui/search-list-ui.selectors";

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  public form: FormGroup;
  private subSink: SubSink = new SubSink();

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    const initSearchString = this.store.selectSnapshot(SearchListUiSelectors.search);
    this.form = this.buildForm(initSearchString);
    this.subSink.sink = this.onSearchChange$(this.form)
      .subscribe(search => this.store.dispatch(new SetProcedureSearch(search)))
  }

  ngOnDestroy() {
    this.subSink.unsubscribe();
  }

  private buildForm(searchString: string = '') {
    return this.fb.group({
      search: [searchString]
    })
  }

  private onSearchChange$(form: FormGroup): Observable<string> {
    return form.valueChanges.pipe(
      debounceTime(300),
      pluck('search'),
      filter(search => !!search),
    )
  }

  public onClearSearch() {
    this.form.reset();
    this.store.dispatch([new SetProcedureSearch('')]);
  }

}
