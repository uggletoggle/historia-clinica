import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionSuperiorComponent } from './region-superior.component';

describe('RegionSuperiorComponent', () => {
  let component: RegionSuperiorComponent;
  let fixture: ComponentFixture<RegionSuperiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionSuperiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
