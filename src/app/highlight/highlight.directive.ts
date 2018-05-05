import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  private color: string;
  private colorInput: string;

  constructor(private el: ElementRef) { }

  @Input('appHighlight') highlightColor: string;

  /// default value for this function
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }



 

}
