import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

export interface TableHeader {
  id: string;
  label: string;
}

export interface TableData {
  [id: string] : string;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() tableHeaders: TableHeader[] = []; 
  @Input() tableData: TableData[] = []; 
  @Input() currentPage: number; 



  constructor() { }

  ngOnInit() {
  }

}
