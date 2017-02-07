import { Injectable } from '@angular/core';
import { Book } from './book';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BookDataService {

  constructor(private http: Http) {
  }

  getBooks(): Observable<Book[]> {

    return this.http.get('http://localhost:4730/books').map(response => response.json())
  }

  getBookByIsbn(isbn: string): Observable<Book> {

    return this.http.get(`http://localhost:4730/books/${isbn}`).map(response => response.json())
  }

  createBook(book: Book): Observable<Book> {

    return this.http.post('http://localhost:4730/books', book).map(response => response.json());
  }

  updateBook(isbn: string, vector: any): Observable<Book> {

    return this.http.patch(`http://localhost:4730/books/${isbn}`, vector).map(response => response.json());
  }

}
