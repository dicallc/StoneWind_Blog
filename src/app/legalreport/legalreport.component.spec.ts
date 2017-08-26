import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalreportComponent } from './legalreport.component';

describe('LegalreportComponent', () => {
  let component: LegalreportComponent;
  let fixture: ComponentFixture<LegalreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
