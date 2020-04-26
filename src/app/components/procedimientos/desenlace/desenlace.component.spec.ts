import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenlaceComponent } from './desenlace.component';

describe('DesenlaceComponent', () => {
  let component: DesenlaceComponent;
  let fixture: ComponentFixture<DesenlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesenlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesenlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
