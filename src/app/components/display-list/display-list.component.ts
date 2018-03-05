import { Component, ContentChild, TemplateRef, Input } from '@angular/core';


@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html'
})
export class DisplayListComponent {
  @ContentChild(TemplateRef) parentTemplate;
  @Input() public zveryata: string[];


}
