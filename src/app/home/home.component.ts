import {Component, OnInit} from '@angular/core';
import { Observable, map } from 'rxjs';
import { TableData, TableHeader } from './components/table/table.component';
import { HomeService } from './home.service';

export interface IEntry {
  name: string;
  description: string;
  status: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tableHeaders: TableHeader[] = [
    {
      id: "name",
      label: "Name",
    },
    {
      id: "description",
      label: "Description",
    },
    {
      id: "status",
      label: "Status",
    },
    {
      id: "cool",
      label: "Cool column",
    },
  ];

  page = 1;
  pageSize = 20;

  searchInput: string = '';
  dataFiltered$: Observable<IEntry[]>;
  currentPage: number;

  constructor(public service: HomeService) {
    this.dataFiltered$ = this.service.data$;
  }

  ngOnInit() {
    this.service.generateData();
  }

  onSearchInputChange(search: string){
    this.searchInput = search;
    let searchInputArray = search.split(" ");
    this.dataFiltered$ = this.service.data$.pipe (
      map(items => 
       items.filter((data:IEntry) => 
        searchInputArray.some(substring=>data.description.includes(substring))
        || searchInputArray.some(substring=>data.name.includes(substring))
        || searchInputArray.some(substring=>data.status.includes(substring))
      )))
  }

  onChangePage(page) {
    this.currentPage=page;
  }

}
