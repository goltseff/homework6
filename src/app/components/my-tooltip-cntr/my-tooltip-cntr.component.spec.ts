import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTooltipCntrComponent } from './my-tooltip-cntr.component';

describe('MyTooltipCntrComponent', () => {
  let component: MyTooltipCntrComponent;
  let fixture: ComponentFixture<MyTooltipCntrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTooltipCntrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTooltipCntrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
