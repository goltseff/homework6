import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestUnlessComponent } from './components/test-unless/test-unless.component';
import { UnlessDirective } from './directives/unless.directive';
import { DisplayListComponent } from './components/display-list/display-list.component';
import { MyTooltipDirective } from './directives/my-tooltip.directive';
import { MyTooltipCntrComponent } from './components/my-tooltip-cntr/my-tooltip-cntr.component';


@NgModule({
  declarations: [
    AppComponent,
    TestUnlessComponent,
    UnlessDirective,
    DisplayListComponent,
    MyTooltipDirective,
    MyTooltipCntrComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MyTooltipCntrComponent]
})
export class AppModule { }
