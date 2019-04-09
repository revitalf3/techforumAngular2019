import { BookService } from './../book.service';
import { Book } from './../Book';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  @Input() book: Book;
  @Output() saveBook: EventEmitter<any> = new EventEmitter();
  public editMode: boolean;

  constructor(private route: ActivatedRoute, private bookservice: BookService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const bookId = params.get('bookId');
      this.editMode = bookId ? true : false;
      this.book = bookId ? this.bookservice.getBook(bookId) : new Book();
    });
  }

  saveButton(book) {
    if (this.editMode) {
      this.bookservice.editBook(book);
    } else {
      this.bookservice.addBook(book);
    }


  }
}
