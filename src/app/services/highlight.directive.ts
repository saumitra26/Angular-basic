import { Directive, ElementRef, HostListener, Input, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer:Renderer2) { }
  @Input('appHighlight') highlight:string='yellow'

  @HostListener ('mouseenter') onMouseEnter(){
    this.highlightColor(this.highlight)
  }
  @HostListener ('mouseleave') onMouseLeave(){
    this.highlightColor(null)
  }
  private highlightColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color)
  }
}
