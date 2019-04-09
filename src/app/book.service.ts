import { Book } from './Book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books =  [
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

  constructor() { }

  getAllBooks() {
    return this.books;
  }

  public getBook(id: string) {
    return this.books.find(book => book.id === id);
  }

  public findIndex(id: string) {
    return this.books.findIndex(book => book.id === id);
  }

  public editBook(book: Book) {
    const indexBook = this.findIndex(book.id);
    this.books[indexBook] = book;
  }
  public addBook(book: Book) {
    return this.books.push(book);
  }

}
