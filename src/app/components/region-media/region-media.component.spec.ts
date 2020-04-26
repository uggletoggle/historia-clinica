import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionMediaComponent } from './region-media.component';

describe('RegionMediaComponent', () => {
  let component: RegionMediaComponent;
  let fixture: ComponentFixture<RegionMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
