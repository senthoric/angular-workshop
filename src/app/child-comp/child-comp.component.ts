import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss']
})
export class ChildCompComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {
    console.log('child build');
    
  }

}
