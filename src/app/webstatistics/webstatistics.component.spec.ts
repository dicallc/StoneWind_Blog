import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebstatisticsComponent } from './webstatistics.component';

describe('WebstatisticsComponent', () => {
  let component: WebstatisticsComponent;
  let fixture: ComponentFixture<WebstatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebstatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebstatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
