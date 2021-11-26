import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() in = 'yellow';
  @Input() out = 'red';
  // quels propriétés modifier
  @HostBinding('style.backgroundColor') bgc = 'white';
  // quels events gérer
  constructor(private element: ElementRef) {
    console.log('appHighlight called');
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
    this.element.nativeElement.innerHTML = 'in';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
    this.element.nativeElement.innerHTML = 'out';
  }
}
