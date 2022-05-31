import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import paginate from './paginate';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() items: Array<any>;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 10;
  @Input() maxPages = 10;

  pager: any = {};

  ngOnInit() {
      // set page if items array isn't empty
      if (this.items && this.items.length) {
          this.setPage(this.initialPage);
      }
  }

  ngOnChanges(changes: SimpleChanges) {
      // reset page if items array has changed
      if (changes.items.currentValue !== changes.items.previousValue) {
          this.setPage(this.initialPage);
      }
  }

  setPage(page: number) {
      // get new pager object for specified page
      this.pager = paginate(this.items.length, page, this.pageSize, this.maxPages);
      // call change page function in parent component
      this.changePage.emit(page);
  }

}
