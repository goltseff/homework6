import {
    Directive, HostListener, ComponentRef, ViewContainerRef, Input, ComponentFactoryResolver,
    ComponentFactory
} from '@angular/core';
import {MyTooltipCntrComponent} from '../components/my-tooltip-cntr/my-tooltip-cntr.component';

@Directive({
  selector: '[appMyTooltip]'
})
export class MyTooltipDirective {
    private tooltip: ComponentRef<MyTooltipCntrComponent>;
    private visible: boolean;
    constructor(private viewContainerRef: ViewContainerRef,
                private resolver: ComponentFactoryResolver) {
    }
    // tslint:disable-next-line:no-input-rename
    @Input('appMyTooltip') content: string;

    @HostListener('focusin')
    @HostListener('mouseenter')
    show(): void {
      this.visible = true;
      const factory = this.resolver.resolveComponentFactory(MyTooltipCntrComponent);
      this.tooltip = this.viewContainerRef.createComponent(factory);
      this.tooltip.instance.hostElement = this.viewContainerRef.element.nativeElement;
      this.tooltip.instance.content = this.content;
    }

    @HostListener('focusout')
    @HostListener('mouseleave')
    hide(): void {
    if (!this.visible) { return; }

    this.visible = false;
    if (this.tooltip) {
      this.tooltip.destroy();
    }
    }
}
