import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureCardComponent } from './procedure-card.component';
import {MockProcedure} from "../../../../mocks/procedures-service.mock";

describe('ProcedureCardComponent', () => {
  let component: ProcedureCardComponent;
  let fixture: ComponentFixture<ProcedureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcedureCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcedureCardComponent);
    component = fixture.componentInstance;
    component.procedure = MockProcedure;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display procedure details', () => {
    const cardHeader = fixture.nativeElement.querySelector('mat-card-header');
    const cardContent = fixture.nativeElement.querySelectorAll('mat-card-content p span');
    const cardHeaderTitle = cardHeader.innerText;

    expect(cardHeaderTitle).toBe(MockProcedure.term);
    expect(cardContent.length).toBe(2);
    expect(cardContent[0].innerText).toBe(MockProcedure.active.toString());
    expect(cardContent[1].innerText).toBe(MockProcedure.concept.id);
  })

});
