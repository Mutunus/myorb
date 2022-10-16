import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultComponent } from './search-result.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NgxsModule} from "@ngxs/store";
import {SearchListUiState} from "../../store/ui/search-list-ui.state";
import {BehaviorSubject} from "rxjs";
import {MockProcedures} from "../../../../mocks/procedures-service.mock";

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot([SearchListUiState]),
      ],
      declarations: [ SearchResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display procedures', () => {
    component.procedures$ = new BehaviorSubject(MockProcedures);
    fixture.detectChanges();

    const procedures = fixture.nativeElement.querySelectorAll('mat-list-option');

    expect(procedures.length).toBe(3);
  });

});
