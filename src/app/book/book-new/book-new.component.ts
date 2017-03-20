import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BookNewComponent implements OnInit  {

  form: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private bookService: BookDataService,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit() {

    this.form = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
      ,publisher: this.fb.group({
        name: ['', Validators.required],
        url: ['',Validators.required]
      })
    });
    // this.cdr.detach();
  }

  isGroup(val: any): boolean{
    console.log('val',val);
    if(val === undefined){return false;}
    return (typeof val.value !== 'string')
  }
  
  stop() {
    this.cdr.detach();
    console.log('STOP');
    
  }

  go(){
    console.log('go');
    
     this.cdr.detectChanges();
  }

  onSubmit() {
    this.cdr.detectChanges();
    if(!this.form.valid){
      return false;
    }
    const book: Book = {
      isbn: '',
      title: this.form.value.title,
      author: this.form.value.author,
      subtitle: '',
      abstract: '',
      numPages: 123,
      publisher: {
        name: '',
        url: ''
      }
    };

    // const bookArray= ["isbn",
    // "title",
    // "author",
    // "subtitle",
    // "abstract",
    // "numPages",
    // "publisher" : ["name", "url"]]

    this.bookService.createBook(book)
      .subscribe((book: Book) => console.log('Added new book', book));
  }
}
