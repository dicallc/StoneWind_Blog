import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HottagComponent } from './hottag.component';

describe('HottagComponent', () => {
  let component: HottagComponent;
  let fixture: ComponentFixture<HottagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HottagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HottagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
