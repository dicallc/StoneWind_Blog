import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarditemComponent } from './carditem.component';

describe('CarditemComponent', () => {
  let component: CarditemComponent;
  let fixture: ComponentFixture<CarditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarditemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
