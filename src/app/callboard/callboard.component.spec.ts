import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallboardComponent } from './callboard.component';

describe('CallboardComponent', () => {
  let component: CallboardComponent;
  let fixture: ComponentFixture<CallboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
