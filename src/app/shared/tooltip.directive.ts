import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {

  @Input()
  private tooltip;

  tooltipElement: HTMLDivElement = document.createElement('div');

  constructor(elementRef: ElementRef) {

    this.tooltipElement.hidden = true;

    elementRef.nativeElement.appendChild(this.tooltipElement);
  }
  
  

  @HostListener('mouseenter')
  onMouseEnter() {
    this.tooltipElement.innerText = this.tooltip;
    this.tooltipElement.hidden = null;
    console.log('mouse_enter');
    
  }

  @HostListener('mouseleave')
  onMouseLeave() {

    this.tooltipElement.hidden = true;
  }
}
