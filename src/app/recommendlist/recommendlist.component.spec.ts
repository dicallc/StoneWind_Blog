import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendlistComponent } from './recommendlist.component';

describe('RecommendlistComponent', () => {
  let component: RecommendlistComponent;
  let fixture: ComponentFixture<RecommendlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
