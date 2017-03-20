import { Component, OnInit, ComponentFactoryResolver, ApplicationRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ChildCompComponent } from './../child-comp/child-comp.component';

@Component({
  selector: 'dynamic-components',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.scss']
})
export class DynamicComponentsComponent implements OnInit {


  @ViewChild('parent', {read: ViewContainerRef})
  parent: ViewContainerRef;
  childComponent

   constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(){
    console.log(this.parent);
    
    //  this.childComponent = this.componentFactoryResolver.resolveComponentFactory(FooComponent)
     this.childComponent = this.componentFactoryResolver.resolveComponentFactory(ChildCompComponent)
  for( let a of [1,2]){
    setTimeout(()=> {
      this.childComponent.name = 'Baz!';
      this.parent.createComponent(this.childComponent);
    }, 5000);
  }

  }

}