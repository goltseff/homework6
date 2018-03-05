import { Directive, Input, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  private viewRef: ViewRef = null;

  @Input('appUnless')
  public set expr(value) {
    if (value) {
      this.viewRef.destroy();
    }
  }
  constructor(
    private _vcr: ViewContainerRef,
    private _tpl: TemplateRef<any>
  ) {
    this.viewRef = this._vcr.createEmbeddedView(this._tpl);
  }

}
