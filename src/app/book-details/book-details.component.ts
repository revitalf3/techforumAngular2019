import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../Book';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
@Input() item: Book;

@Output() edit: EventEmitter<any> = new EventEmitter();
  bookId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.bookId = params.get('id');
    });
  }

  editButton(id) {
    this.edit.emit(id);
  }

}
