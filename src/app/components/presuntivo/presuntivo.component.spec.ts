import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresuntivoComponent } from './presuntivo.component';

describe('PresuntivoComponent', () => {
  let component: PresuntivoComponent;
  let fixture: ComponentFixture<PresuntivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresuntivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresuntivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
