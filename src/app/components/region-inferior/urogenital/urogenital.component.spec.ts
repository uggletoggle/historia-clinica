import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrogenitalComponent } from './urogenital.component';

describe('UrogenitalComponent', () => {
  let component: UrogenitalComponent;
  let fixture: ComponentFixture<UrogenitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrogenitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrogenitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
