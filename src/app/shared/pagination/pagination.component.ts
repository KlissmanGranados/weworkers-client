import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() rows: number;
  @Input() totalRecords: number;
  rowsPerPageOptions: number = 10;
  @Output() paginatorChange: EventEmitter<any> = new EventEmitter<any>();
  // rows //cantidad de paginas
  // totalRecords // toal
  // rowsPerPageOptions: //array
  constructor() { }

  ngOnInit(): void {
  }

  paginate(event) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    this.paginatorChange.emit(event)
  }


}
