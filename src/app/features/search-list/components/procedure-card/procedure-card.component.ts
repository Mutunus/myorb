import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Procedure} from "../../../../types/procedure.types";

@Component({
  selector: 'procedure-card',
  templateUrl: './procedure-card.component.html',
  styleUrls: ['./procedure-card.component.scss']
})
export class ProcedureCardComponent {

  @Input() procedure: Procedure;

  @Output() goBack: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

}
