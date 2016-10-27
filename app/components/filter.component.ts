import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FILTERS } from "../reducers/constants";

@Component({
  selector: 'td-filter',
  template: `
  <StackLayout [row]="row" orientation="horizontal" horizontalAlignment="center">
    <Button *ngFor="let filter of filters" 
      [class.filter-selected]="filter === currentFilter"
      [class.filter-unselected]="filter !== currentFilter"
      [text]="filter" 
      (tap)="select.next(filter)">
    </Button>
  </StackLayout>  
  `
})
export class FilterComponent {
  @Input() row: number = 0;
  @Input() currentFilter: string;
  @Output() select = new EventEmitter<string>();
  filters: string[] = FILTERS;
}