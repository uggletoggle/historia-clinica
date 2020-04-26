import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GinecobstetricoComponent } from './ginecobstetrico.component';

describe('GinecobstetricoComponent', () => {
  let component: GinecobstetricoComponent;
  let fixture: ComponentFixture<GinecobstetricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GinecobstetricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GinecobstetricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
