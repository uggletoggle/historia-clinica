import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionInferiorComponent } from './region-inferior.component';

describe('RegionInferiorComponent', () => {
  let component: RegionInferiorComponent;
  let fixture: ComponentFixture<RegionInferiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionInferiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionInferiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
