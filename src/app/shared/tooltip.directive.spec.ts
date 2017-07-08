import { TooltipDirective } from './tooltip.directive';
import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

@Component({
  selector: 'mock-component',
  template: '<div tooltip></div>',
})
class MockComponent {
}

describe('A component with TooltipDirective', () => {
  let fixture: ComponentFixture<MockComponent>;
  let element: DebugElement;
  let sut: TooltipDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockComponent, TooltipDirective],
    });

    fixture = TestBed.createComponent(MockComponent);
    element = fixture.debugElement.query(By.directive(TooltipDirective));
    sut = element.injector.get(TooltipDirective);
  });

  fdescribe('tooltip', () => {
    it('should default to be hidden', () => {
      expect(sut.tooltipElement.hidden).toBeTruthy();
    });

    it('should be shown if mouse enter host', () => {
      sut.onMouseEnter();

      expect(sut.tooltipElement.hidden).toBeFalsy();
    });

    it('should be hidden if mouse leave host', () => {
      sut.onMouseLeave();
      
      expect(sut.tooltipElement.hidden).toBeTruthy();
    });
  });
});
