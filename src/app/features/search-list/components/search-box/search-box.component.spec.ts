import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxComponent } from './search-box.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NgxsModule, Store} from "@ngxs/store";
import {SearchListUiState} from "../../store/ui/search-list-ui.state";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SearchListUiSelectors} from "../../store/ui/search-list-ui.selectors";
import {filter} from "rxjs";

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot([SearchListUiState]),
        FormsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatCardModule,
        BrowserAnimationsModule
      ],
      declarations: [ SearchBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  beforeEach(() => {
    // reset input box value
    const input = fixture.nativeElement.querySelector('input');
    input.value = '';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch search value to store', (done) => {
    const input = fixture.nativeElement.querySelector('input');
    const searchValue = 'ultrasound';

    store.select(SearchListUiSelectors.search).pipe(
      filter(search => !!search)
    ).subscribe(search => {
      expect(search).toBe(searchValue);
      done();
    })

    input.value = searchValue;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  });

});
