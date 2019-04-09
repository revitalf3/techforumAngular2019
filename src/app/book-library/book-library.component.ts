import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-library',
  templateUrl: './book-library.component.html',
  styleUrls: ['./book-library.component.scss']
})
export class BookLibraryComponent implements OnInit {
  books = [];

  constructor(private book: BookService, private router: Router) { }

  ngOnInit() {
    this.books = this.book.getAllBooks();
  }

  editEmit(item) {
    this.router.navigate(['bookEdit', item.id]);
  }

}
