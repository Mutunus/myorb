import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchListComponent } from './components/search-list/search-list.component';
import {RouterModule} from "@angular/router";
import {searchListRoutes} from "./search-list.routes";
import {NgxsModule} from "@ngxs/store";
import {SearchListUiState} from "./store/ui/search-list-ui.state";
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import { ProcedureCardComponent } from './components/procedure-card/procedure-card.component';



@NgModule({
  declarations: [
    SearchListComponent,
    SearchBoxComponent,
    SearchResultComponent,
    ProcedureCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(searchListRoutes),
    NgxsModule.forFeature([SearchListUiState]),
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCardModule
  ]
})
export class SearchListModule { }
