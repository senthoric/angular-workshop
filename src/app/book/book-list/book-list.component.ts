import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css'],
  encapsulation: ViewEncapsulation.None// Emulated | Native | None
})
export class BookListComponent implements OnInit {

  books: Observable<Book[]>;


  constructor(private bookService: BookDataService) {

  }

  ngOnInit() {

    this.books = this.bookService.getBooks();
  }

}
