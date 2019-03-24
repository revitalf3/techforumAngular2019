import { Component } from '@angular/core';
import { Book } from './Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public books: Book[];
  public editMode = false;
  public editBook: Book[];

constructor() {
  this.books =  [
    {
      author: 'Suzanne Collins',
      date: new Date('4/5/1813'),
      title: 'the Hunger Games',
      id: '1'
    },
    {
      author: 'jane Austen',
      date: new Date('4/5/1981'),
      title: 'pride and Prejudice',
      id: '2'
    },
    {
      author: 'George Orwell',
      date: new Date('4/5/1991'),
      title: 'animal Farm',
      id: '3'
    }
    ];
}

  editEmit(item) {
    this.editMode = !this.editMode;
    this.editBook = item;
  }

  saveEmit(book) {
    const itemIndex = this.books.findIndex(item => item.id === book.id);
    this.books[itemIndex] = book;
    this.editMode = !this.editMode;

  }
}
