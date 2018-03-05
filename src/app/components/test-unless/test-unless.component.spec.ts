import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUnlessComponent } from './test-unless.component';

describe('TestUnlessComponent', () => {
  let component: TestUnlessComponent;
  let fixture: ComponentFixture<TestUnlessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUnlessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUnlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
