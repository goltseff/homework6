import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import * as Tether from 'tether';

@Component({
  selector: 'app-my-tooltip-cntr',
  templateUrl: './my-tooltip-cntr.component.html'
})
export class MyTooltipCntrComponent implements AfterViewInit {
  private tether = null;
  @Input()
  hostElement: HTMLElement;

  @Input()
  content: string;
  constructor(
    private element: ElementRef
  ) { }


  ngAfterViewInit() {
    this.changePosition();
  }
  changePosition() {
    const options: Tether.ITetherOptions = {
      element: this.element.nativeElement.children[0],
      target: this.hostElement,
      attachment: 'top left',
      targetAttachment: 'top left',
      offset: '20px -20px'
    };
    if (!this.tether) {
      this.tether = new Tether(options);
    } else {
      this.tether.setOptions(options);
    }
  }

}
