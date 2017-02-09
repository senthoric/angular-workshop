/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TooltipDirective } from './tooltip.directive';
import { ElementRef } from '@angular/core';

describe('TooltipDirective', () => {
  it('should create an instance', () => {
    const nativeElement: HTMLDivElement = document.createElement('div');
    const directive = new TooltipDirective(new ElementRef(nativeElement));
    expect(directive).toBeTruthy();
  });
});
