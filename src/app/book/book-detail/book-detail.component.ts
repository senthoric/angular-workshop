import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../shared/book-data.service';
// import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'book-detail',
  templateUrl: 'book-detail.component.html',
  styleUrls: ['book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  public book: Book;

  constructor(private route: ActivatedRoute, private bookService: BookDataService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {

    this.route.params.subscribe((params: { isbn: string }) => {
      this.bookService.getBookByIsbn(params.isbn).subscribe(book => {
        console.log(book);
        this.book = book;
        this.cdr.detectChanges();
        this.cdr.detach();
      });
    });
  }

}
