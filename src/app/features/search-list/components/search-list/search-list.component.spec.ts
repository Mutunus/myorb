import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListComponent } from './search-list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NgxsModule} from "@ngxs/store";
import {SearchListUiState} from "../../store/ui/search-list-ui.state";
import {ProceduresService} from "../../../../services/procedures.service";
import {MockProceduresService} from "../../../../mocks/procedures-service.mock";

describe('SearchListComponent', () => {
  let component: SearchListComponent;
  let fixture: ComponentFixture<SearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot([SearchListUiState]),
      ],
      declarations: [ SearchListComponent ],
      providers: [
        { provide: ProceduresService, useValue: MockProceduresService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
